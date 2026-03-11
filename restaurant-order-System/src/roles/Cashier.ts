import { Order } from "../models/Order.js";

export class Cashier {

    calculateTotal(order: Order): number {

        return order.calculateTotal();

    }

    processPayment(order: Order): void {

        if(order.getTotal() <= 0){
            throw new Error("Invalid payment");
        }

        order.markAsPaid();

    }

}