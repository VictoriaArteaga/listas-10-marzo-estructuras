export class Cashier {
    calculateTotal(order) {
        return order.calculateTotal();
    }
    processPayment(order) {
        if (order.getTotal() <= 0) {
            throw new Error("Invalid payment");
        }
        order.markAsPaid();
    }
}
