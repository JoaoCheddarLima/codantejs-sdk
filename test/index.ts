//NEEDS TO IMPLEMENT REAL TESTING CASES

import { CodanteClient } from '../lib/index';

CodanteClient.event(1)
    .then(console.log)
    .catch(console.error);