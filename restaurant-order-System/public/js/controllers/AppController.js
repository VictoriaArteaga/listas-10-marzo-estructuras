import { OrderService } from "../services/OrderService";
import { MenuItem } from "../models/MenuItem";
export class AppController {
    constructor() {
        this.service = new OrderService();
        this.menuItems = [
            new MenuItem(1, "Burger", 10),
            new MenuItem(2, "Pizza", 15),
            new MenuItem(3, "Soda", 5),
            new MenuItem(4, "Pasta", 18),
            new MenuItem(5, "Salad", 9),
            new MenuItem(6, "Coffee", 4)
        ];
    }
    init() {
        this.service.startOrder();
        this.renderMenu();
        this.configureButtons();
    }
    renderMenu() {
        const menuContainer = document.getElementById("menu");
        if (!menuContainer) {
            throw new Error("Menu container not found");
        }
        menuContainer.innerHTML = "";
        this.menuItems.forEach(item => {
            const button = document.createElement("button");
            button.classList.add("menu-item");
            button.innerHTML = `
                <span class="item-name">${item.name}</span>
                <span class="item-price">$${item.price}</span>
            `;
            button.addEventListener("click", () => {
                this.addItemToOrder(item);
            });
            menuContainer.appendChild(button);
        });
    }
    configureButtons() {
        const sendButton = document.getElementById("sendKitchen");
        const billButton = document.getElementById("getBill");
        const payButton = document.getElementById("pay");
        if (!sendButton || !billButton || !payButton) {
            throw new Error("One or more buttons are missing in HTML");
        }
        sendButton.addEventListener("click", () => {
            try {
                this.service.sendToKitchen();
                this.service.serveOrder();
                alert("Order has been prepared and served");
            }
            catch (error) {
                alert(error.message);
            }
        });
        billButton.addEventListener("click", () => {
            try {
                const total = this.service.requestBill();
                const totalElement = document.getElementById("total");
                if (totalElement) {
                    totalElement.textContent = "$" + total;
                }
            }
            catch (error) {
                alert(error.message);
            }
        });
        payButton.addEventListener("click", () => {
            try {
                this.service.pay();
                alert("Payment completed successfully");
                this.resetOrder();
            }
            catch (error) {
                alert(error.message);
            }
        });
    }
    addItemToOrder(item) {
        try {
            this.service.addItem(item);
            this.updateOrderPreview();
        }
        catch (error) {
            alert(error.message);
        }
    }
    updateOrderPreview() {
        const preview = document.getElementById("orderPreview");
        if (!preview) {
            return;
        }
        const items = this.service.getCurrentItems();
        preview.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            preview.appendChild(li);
        });
    }
    resetOrder() {
        this.service.startOrder();
        const preview = document.getElementById("orderPreview");
        const total = document.getElementById("total");
        if (preview) {
            preview.innerHTML = "";
        }
        if (total) {
            total.textContent = "$0";
        }
    }
}
