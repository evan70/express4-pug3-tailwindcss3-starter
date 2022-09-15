# express4-pug3-tailwindcss3-starter

An [Express.js](https://expressjs.com) application boilerplate using [Pug](https://pugjs.org) as the template engine and using [Tailwind](https://tailwindcss.com) for styles.

## Using the boilerplate
Clone the repo, install dependencies and start the server.
```
git clone https://github.com/evan70/express4-pug3-tailwindcss3-starter
cd express4-pug3-tailwindcss3-starter
yarn set version berry
yarn install
yarn dev
```


## Development mode
Tailwind CSS will not be purged so that you can experiment with the different styles during development.

```
yarn dev
```


## Production
Express will start in production mode and the Tailwind CSS will be purged and minified.
```
yarn start
```
