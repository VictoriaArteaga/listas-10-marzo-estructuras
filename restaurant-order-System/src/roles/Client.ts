import { MenuItem } from "../models/MenuItem.js";
import { Order } from "../models/Order.js";

export class Client {

    createOrder(): Order {
        return new Order();
    }

    selectItem(order: Order, item: MenuItem): void {
        order.addItem(item);
    }

}