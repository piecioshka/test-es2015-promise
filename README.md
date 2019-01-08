# test-promise

[![dependencies](https://david-dm.org/piecioshka/test-promise.svg)](https://github.com/piecioshka/test-promise)

:ledger: Test app with Promises (ES2015)

## Demo 🎉

<https://piecioshka.github.io/test-promise>

## Features

* :white_check_mark: Use syntax `new Promise`
* :white_check_mark: Use syntax `Promise.all`
* :white_check_mark: Use syntax `Promise.race`

## Step by step 👣

* Instalacja `http-server`
    ```bash
    npm install -g http-server
    ```
* Stworzyć plik `data.json`
* Stworzyć plik `index.html`
* Stworzyć plik `src/main.js`
* `src/main.js`: Stworzyć funkcję `makeRequest` — realizującą zapytanie HTTP (użyć Fetch API)
* Uruchomić HTTP serwer: `http-server`
* `src/main.js`: Rozszerzyć odpowiedź o nowe dane zw. z aktualnym czasem
* `src/main.js`: Wykorzystać `debugger statement` do analizy odpowiedzi

## Related

* [test-es2015-promise-catch](https://github.com/piecioshka/test-es2015-promise-catch) - Testing error handling
* [test-es2015-promise-chain](https://github.com/piecioshka/test-es2015-promise-chain) - Testing chaining

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
