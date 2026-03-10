export class Kitchen {
    prepareOrder(order) {
        if (order.getItems().length === 0) {
            throw new Error("Kitchen cannot prepare empty order");
        }
        return order;
    }
}
