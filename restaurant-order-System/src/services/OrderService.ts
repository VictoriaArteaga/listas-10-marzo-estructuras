import { Client } from "../roles/Client";
import { Waiter } from "../roles/Waiter";
import { Kitchen } from "../roles/Kitchen";
import { Cashier } from "../roles/Cashier";
import { MenuItem } from "../models/MenuItem";
import { Order } from "../models/Order";

export class OrderService {

    private client = new Client();
    private waiter = new Waiter();
    private kitchen = new Kitchen();
    private cashier = new Cashier();

    private order!: Order;

    startOrder(): Order {

        this.order = this.client.createOrder();
        return this.order;

    }

    addItem(item: MenuItem): void {

        this.client.selectItem(this.order, item);

    }

    sendToKitchen(): void {

        const collected = this.waiter.collectOrder(this.order);
        this.kitchen.prepareOrder(collected);

    }

    serveOrder(): void {

        this.waiter.serveOrder(this.order);

    }

    requestBill(): number {

        return this.cashier.calculateTotal(this.order);

    }

    pay(): void {

        this.cashier.processPayment(this.order);

    }

    public getCurrentItems(){

    return this.order.getItems();

}

}