export interface User {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
    phone: string;
    cpf: string;
    zipcode: string;
    address: string;
    city: string;
}

export interface RegisterUserResponseData {
    message: string;
    user?: User;
    errors?: Object;
}

export interface RegisterUserRequestParams {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    cpf: string;
    phone: string;
    zipcode: string;
    address: string;
    city: string;
    terms: boolean;
}

export const registerUserResponseDataMock: RegisterUserResponseData = {
    message: "User registered.",
    user: {
        name: "João Silva",
        email: "joao.silva@example.com",
        password: "senhaSegura123",
        password_confirmation: "senhaSegura123",
        terms: true,
        phone: "11987654321",
        cpf: "350.519.788-27",
        zipcode: "12345-670",
        address: "Rua Exemplo, 123",
        city: "Cidade Exemplo"
    }
};