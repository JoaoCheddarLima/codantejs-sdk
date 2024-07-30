//NEEDS TO IMPLEMENT REAL TESTING CASES

import { CodanteClient } from '../lib/index';

CodanteClient.olympics.events().then((response) => {
    console.log(response);
});