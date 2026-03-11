import { Order } from "../models/Order.js";
export class Client {
    createOrder() {
        return new Order();
    }
    selectItem(order, item) {
        order.addItem(item);
    }
}
