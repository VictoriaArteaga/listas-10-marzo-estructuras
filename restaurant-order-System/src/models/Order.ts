import { MenuItem } from "./MenuItem";

export class Order {

    private items: MenuItem[] = [];
    private total: number = 0;
    private paid: boolean = false;

    addItem(item: MenuItem): void {
        this.items.push(item);
        this.calculateTotal();
    }

    getItems(): MenuItem[] {
        return this.items;
    }

    calculateTotal(): number {

        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
        return this.total;

    }

    getTotal(): number {
        return this.total;
    }

    markAsPaid(): void {
        this.paid = true;
    }

    isPaid(): boolean {
        return this.paid;
    }

}