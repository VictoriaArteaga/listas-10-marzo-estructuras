import { MenuItem } from "../models/MenuItem";
import { Order } from "../models/Order";

export class Client {

    createOrder(): Order {
        return new Order();
    }

    selectItem(order: Order, item: MenuItem): void {
        order.addItem(item);
    }

}