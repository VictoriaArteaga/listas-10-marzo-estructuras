import { Order } from "../models/Order.js";

export class Waiter {

    collectOrder(order: Order): Order {

        if(order.getItems().length === 0){
            throw new Error("Order has no items");
        }

        return order;
    }

    serveOrder(order: Order): void {

        if(order.getItems().length === 0){
            throw new Error("Cannot serve empty order");
        }

    }

}