import { Order } from "../models/Order";

export interface OrderProcessor {

    process(order: Order): void;

}