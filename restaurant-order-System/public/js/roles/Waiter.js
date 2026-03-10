export class Waiter {
    collectOrder(order) {
        if (order.getItems().length === 0) {
            throw new Error("Order has no items");
        }
        return order;
    }
    serveOrder(order) {
        if (order.getItems().length === 0) {
            throw new Error("Cannot serve empty order");
        }
    }
}
