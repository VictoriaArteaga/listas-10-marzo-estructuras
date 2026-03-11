import { Client } from "../roles/Client.js";
import { Waiter } from "../roles/Waiter.js";
import { Kitchen } from "../roles/Kitchen.js";
import { Cashier } from "../roles/Cashier.js";
export class OrderService {
    constructor() {
        this.client = new Client();
        this.waiter = new Waiter();
        this.kitchen = new Kitchen();
        this.cashier = new Cashier();
    }
    startOrder() {
        this.order = this.client.createOrder();
        return this.order;
    }
    addItem(item) {
        this.client.selectItem(this.order, item);
    }
    sendToKitchen() {
        const collected = this.waiter.collectOrder(this.order);
        this.kitchen.prepareOrder(collected);
    }
    serveOrder() {
        this.waiter.serveOrder(this.order);
    }
    requestBill() {
        return this.cashier.calculateTotal(this.order);
    }
    pay() {
        this.cashier.processPayment(this.order);
    }
    getCurrentItems() {
        return this.order.getItems();
    }
}
