import {
  Links,
  Meta,
  orderStatusTypes,
  sortOrderTypes,
} from '../index';

export interface Order {
    id: number;
    customer_name: string;
    customer_email: string;
    order_date: string;
    amount_in_cents: number;
    status: orderStatusTypes;
    created_at: string;
    updated_at: string;
}

export interface listOrderOptionalParams {
    page?: number;
    status?: orderStatusTypes;
    sort?: sortOrderTypes;
}

export interface createOrderRequestParams {
    customer_name: string;
    customer_email: string;
    order_date: string;
    amount_in_cents: number;
    status: orderStatusTypes;
}

export interface getOrderResponse {
    data: Order;
}

export interface listOrdersResponse {
    data: Order[];
    links: Links;
    meta: Meta;
}