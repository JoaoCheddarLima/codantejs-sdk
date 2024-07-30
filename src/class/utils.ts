export class CodanteClientUtils {
    static utils = {
        /**
         * Checks if a password is valid.
         * @param {string} password - The password to be validated.
         * @returns {boolean} - Returns true if the password is valid, false otherwise.
         */
        isValidPassword: (password: string) => {
            return password.length >= 8;
        },
        /**
         * Checks if an cpf is valid.
         * @param {string} cpf - The cpf to be validated.
         * @returns {boolean} - Returns true if the cpf is valid, false otherwise.
         */
        isValidCPF: (cpf: string) => {
            const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
            return cpfRegex.test(cpf);
        },
        /**
         * Checks if an phone is valid.
         * @param {string} phone 
         * @returns {boolean} - Returns true if the phone is valid, false otherwise.
         */
        isValidPhone: (phone: string) => {
            const phoneRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
            return phoneRegex.test(phone);
        },
        /**
         * Checks if an cep is valid.
         * @param {string} cep 
         * @returns {boolean} - Returns true if the cep is valid, false otherwise.
         */
        isValidCEP: (cep: string) => {
            const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
            return cepRegex.test(cep);
        },
        /**
         * Format a regular currency value into cents.
         * @param {number} value 
         * @returns {number} - Returns the value in cents.
         */
        formatCurrency: (value: number) => {
            return Math.floor(value * 100);
        },
        /**
         * Format a object of parameters into a query string.
         * @param {Object} params
         * @returns {string} - Returns the query string.
         */
        makeQueryParams: (params: Object) => {
            const queryParams = Object.entries(params).map(([key, value]) => `${key}=${value}`);
            const queryString = queryParams.join('&');

            return queryString;
        }
    }
}