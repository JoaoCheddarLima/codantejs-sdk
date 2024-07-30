import {
  RegisterUserRequestParams,
  RegisterUserResponseData,
} from '../types/register-user/data';

export class CodanteRegisterUserClient {
    private static BASE_API_URL: string = "https://apis.codante.io/api/register-user"

    static registerUser = {
        /**
         * Register a new user
         * This endpoint registers a new user.
         * https://docs.apis.codante.io/register-user
         * @param {string} email - The email of the user
         * @param {string} name - The name of the user
         * @param {string} password - The password of the user
         * @param {string} password_confirmation - The password confirmation of the user
         * @param {string} cpf - The CPF of the user
         * @param {string} phone - The phone of the user
         * @param {string} zipcode - The zipcode of the user
         * @param {string} address - The address of the user
         * @param {string} city - The city of the user
         * @param {boolean} terms - The terms of the user
         * @returns {Promise<RegisterUserResponse>}
        */
        register: async (params: RegisterUserRequestParams): Promise<RegisterUserResponseData> => {
            const response = await fetch(`${this.BASE_API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            })

            return response.json()
        }
    }
}