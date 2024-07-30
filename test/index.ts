//NEEDS TO IMPLEMENT REAL TESTING CASES

import { CodanteClient } from '../lib/index';
import { registerUserResponseDataMock } from '../src/types/register-user/index';

function testOlympics() {
    CodanteClient.olympics.events().then((response) => {
        console.log(response);
    });
}

function testRegisterUser() {
    CodanteClient.registerUser.register(registerUserResponseDataMock?.user!).then((response) => {
        console.log(response);
    });
}

testRegisterUser();