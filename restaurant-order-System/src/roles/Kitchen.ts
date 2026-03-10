import { Order } from "../models/Order";

export class Kitchen {

    prepareOrder(order: Order): Order {

        if(order.getItems().length === 0){
            throw new Error("Kitchen cannot prepare empty order");
        }

        return order;

    }

}