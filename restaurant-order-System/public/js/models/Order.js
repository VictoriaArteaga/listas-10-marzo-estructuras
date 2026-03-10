export class Order {
    constructor() {
        this.items = [];
        this.total = 0;
        this.paid = false;
    }
    addItem(item) {
        this.items.push(item);
        this.calculateTotal();
    }
    getItems() {
        return this.items;
    }
    calculateTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
        return this.total;
    }
    getTotal() {
        return this.total;
    }
    markAsPaid() {
        this.paid = true;
    }
    isPaid() {
        return this.paid;
    }
}
