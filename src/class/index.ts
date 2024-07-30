import { CodanteOlympicsClient } from './olympics';
import { CodanteOrdersClient } from './orders_api';
import { CodanteRegisterUserClient } from './register_user_api';
import { CodanteClientUtils } from './utils';

export class CodanteClient {
    static olympics = CodanteOlympicsClient.olympics
    static utils = CodanteClientUtils.utils
    static registerUser = CodanteRegisterUserClient.registerUser
    static orders = CodanteOrdersClient.orders
}
