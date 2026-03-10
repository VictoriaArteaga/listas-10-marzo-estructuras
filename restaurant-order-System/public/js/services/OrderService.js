import { Client } from "../roles/Client";
import { Waiter } from "../roles/Waiter";
import { Kitchen } from "../roles/Kitchen";
import { Cashier } from "../roles/Cashier";
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
