import {
  createOrderRequestParams,
  getOrderResponse,
  listOrderOptionalParams,
} from '../types';
import { CodanteClientUtils } from './utils';

export class CodanteOrdersClient {
    private static BASE_API_URL: string = "https://apis.codante.io/api/orders-api"

    static orders = {
        /**
         * Creates a new order, the value needs to be in cents
         * https://docs.apis.codante.io/orders-api#criar-pedido
         * @param params 
         * @returns {boolean} - true if successful (201) or false if not (422 or other codes)
         */
        createOrder: async (params: createOrderRequestParams): Promise<boolean> => {
            const response = await fetch(`${this.BASE_API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            })

            return response.status === 201
        },
        /**
         * Deletes an order by it's own ID
         * https://docs.apis.codante.io/orders-api#apagar-pedido
         * @param {number} id - The order to delete ID
         * @returns {boolean} - true if successful (204) or false if not (404 or other codes, if not found)
         */
        deleteOrder: async (id: number): Promise<boolean> => {
            const response = await fetch(`${this.BASE_API_URL}/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            return response.status !== 404
        },
        /**
         * Get an order by it's own ID
         * https://docs.apis.codante.io/orders-api#pedido-individual
         * @param {number} id - The order ID
         * @returns {getOrderResponse} - The order data response
         */
        getOrder: async (id: number): Promise<getOrderResponse> => {
            const response = await fetch(`${this.BASE_API_URL}/orders/${id}`)

            return response.json()
        },
        /**
         * List all orders with optional parameters for pagination, status, and sort, you can sort in ascending or descending order, for descending order use a "-" before the field name (e.g. -created_at)
         * https://docs.apis.codante.io/orders-api#listagem-de-pedidos
         * @param {listOrderOptionalParams} params
         * @returns 
         */
        listOrders: async (params: listOrderOptionalParams): Promise<getOrderResponse[]> => {
            if (params) {
                const queryParams = CodanteClientUtils.utils.makeQueryParams(params)
                const response = await fetch(`${this.BASE_API_URL}/orders?${queryParams}`)

                return response.json()
            }
            const response = await fetch(`${this.BASE_API_URL}/orders`)

            return response.json()
        }
    }
}