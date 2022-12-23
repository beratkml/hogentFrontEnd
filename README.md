# Examenopdracht Front-end Web Development / Web Services


- Student: Berat Kamali
- Studentennummer: 202181265
- E-mailadres: berat.kamali@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- [Prisma] (https://www.prisma.io/)
- [ChakraUI] (https://chakra-ui.com/)
- ...

## Opstarten


Back-end:
- navigeer naar de \src map (\2223-frontendweb-berathog\mangaverz\src)
- voer yarn start uit

Env bestand bevat:<br/>
- NODE_ENV=development
- DATABASE_USERNAME=username
- DATABASE_PASSWORD=password
- DATABASE_URL="{type databank (mysql,...)}://{usernameVanDatabank}:{passwoord}@{host}:{port}/{databank}"--> moet in commentaar
- DATABASE_URL="{type databank (mysql,...)}://{usernameVanDatabank}:{passwoord}@{host}:{port}/{databank}"
- AUTH_JWKS_URI='https://{TENANT}/.well-known/jwks.json'
- AUTH_AUDIENCE={API-IDENTIFIER}
- AUTH_ISSUER='https://{TENANT}/'
- AUTH_USER_INFO='https://{TENANT}/userinfo'
- AUTH_TOKEN_URL='https://{TENANT}/oauth/token'
- node ./src/prisma/seed.js -->moet in commentaar
- "node prisma/seed.js" ->moet in commentaar

## Testen backend

- zorg ervoor dat je in de map 'mangaverz-webservices' zit en niet de \src map. (\2223-webservices-berathog\mangaverz-webservices)
- voer yarn test uit en yarn test:coverage voor de coverage

Maak een .env.test bestand aan met de volgende variabelen:

- NODE_ENV=test

- DATABASE_HOST="{database host}"
- DATABASE_PORT={port}
- DATABASE_USERNAME="{username}"
- DATABASE_PASSWORD="{password}"

- DATABASE_URL="{type databank (mysql,...)}://{username}:{passwoord}@{host}:{port}/{databank}"
- AUTH_JWKS_URI='https://{TENANT}/.well-known/jwks.json'
- AUTH_AUDIENCE={API-IDENTIFIER}
- AUTH_ISSUER='https://{TENANT}/'
- AUTH_USER_INFO='https://{TENANT}/userinfo'

- AUTH_TEST_USER_USER_ID={YOUR TEST USER AUTH0 ID}
- AUTH_TEST_USER_USERNAME={YOUR TEST USER USERNAME}
- AUTH_TEST_USER_PASSWORD={YOUR TEST USER PASSWORD}
- AUTH_TOKEN_URL={YOUR DOMAIN}/oauth/token
- AUTH_CLIENT_ID={YOUR CLIENT ID}
- AUTH_CLIENT_SECRET={YOUR CLIENT SECRET}

## Front-end:
- Navigeer naar het de map 'mangaverz' (\2223-frontendweb-berathog\mangaverz)

Env bestand bevat:

- REACT_APP_AUTH0_DOMAIN={YOUR_DOMAIN}
- REACT_APP_AUTH0_CLIENT_ID={YOUR_CLIENT_ID}
- REACT_APP_AUTH0_API_AUDIENCE={YOUR_API_AUDIENCE}
- REACT_APP_API_URL={API_URL}


## Testen

Als we de testen willen uitvoeren gebruiken we het commando npx cypress open (dit gebeurt allemaal binnen de map (mangaverz)) (\2223-frontendweb-berathog\mangaverz)
