# 🧑‍💻 CodanteJS SDK

![image](./images/Codante.png)

Built with Typescript ❤️‍🔥

This repository aims to help coding along with the [Codante API](https://docs.apis.codante.io/olympic-games-english) in a way where we are type-safe and have this API wrapping made easy.

## Installing

`npm i --save codantejs-sdk` or `yarn add codantejs-sdk`

## Example Usage

📥 Getting all the games for a specific country
[Official docs](https://docs.apis.codante.io/olympic-games-english#game-by-id)

```js
import { CodanteClient, CountriesTypes } from "codantejs-sdk";

CodanteClient.olympics.events({
  country: CountriesTypes.BRA,
  page: 1,
})
  .then(console.log)
  .catch(console.error);

//All optional params down below mocked
CodanteClient.olympics.events({
  country: CountriesTypes.BRA,
  discipline: DisciplinesTypes.FBL,
  venue: VenuesTypes.CTX,
  date: "2024-10-01",
  competitor: "Brasil",
  page: 1,
})
  .then(console.log)
  .catch(console.error);
```

📥 Getting a single game by id

```js
import { CodanteClient } from "codantejs-sdk";

CodanteClient.olympics.event(1)
    .then(console.log)
    .catch(console.error);
```

### All Methods covered on the lib
```js
import { CodanteClient } from "codantejs-sdk";

CodanteClient.olympics.countries()
CodanteClient.olympics.disciplines()
CodanteClient.olympics.event()
CodanteClient.olympics.events()
CodanteClient.olympics.venues()

CodanteClient.orders.createOrder()
CodanteClient.orders.deleteOrder()
CodanteClient.orders.getOrder()
CodanteClient.orders.listOrders()

CodanteClient.registerUser.register()
```

### All the methods are available on [Codante's API](https://docs.apis.codante.io/olympic-games-english)