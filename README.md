## This is a desktop app created by Next.js

# Findogs

## Description

- “FINDOGS” makes the dog adoption process easier, by helping the user to discover a winning match. The user can search and match hundreds of adoptable dogs from different shelters or contact the shelter directly to get in touch.

### As a user, you have possibility to

- [ ] register / log in / out
- [ ] About Page: read information about adoption, view 'weekly star dogs', they could be updated each 3 weeks
- [ ] Find Page: receive random dog images with one button click
- [ ] Find Page: "like" the dogs and save them as favourite
- [ ] Favourite page: click on 'adopt me' you will be able to see the choosed dog id(s) and with 'send Email' button you will be link to the email sending form which already contains id and name from those choosed dogs
- [ ] Search Page: you are able to search dogs by breeds, you will get lists from your search field, each of them links to a page which contains information from that dog, on that page you are able to view the image, name, temperament, lifespan information...

## This project contains:

- frontend code
- backend code
- PostgreSQL database
- user authentication (registration + login)
- a readme with description, screenshots, technologies
- TypeScript

## Technologies used

This project is a Next.js app which makes use of PostgresQL database.

Migrations are set up with Ley.

- [ ] [`ley`](https://github.com/lukeed/ley)

- [ ] [`postgres`](https://www.npmjs.com/package/postgres)

Some pages and components are written using Typescript.

Deployment was carried out with Heroku.

## Setup instructions

### Database Setup

Copy the .env.example file to .env and add the database connection information.

You'll also need PostgreSQL for this.

PostgreSQL Installation instructions

Follow the instructions from the PostgreSQL step on https://www.postgresql.org/docs/10/runtime.html

- [ ] Run the following queries inside of psql to set up the database and the user:

- [ ] CREATE DATABASE;

- [ ] CREATE USER next_js_find_dog WITH ENCRYPTED PASSWORD 'net_js_find_dog';

- [ ] GRANT ALL PRIVILEGES ON DATABASE next_js_find_dog TO next_js_find_dog;

- [ ] Then, to connect to the database using this new user, quit psql and reconnect:

\q

psql -U next_js_find_dog next_js_find_dog

You can run the migrations with the following command:
`yarn migrate up`

To drop the last migration run the following in your terminal:
`yarn migrate down`

### Deployment instructions for Heroku

- Sign up for Heroku: https://signup.heroku.com/
- Create a new App
- Choose a name and select your region
- Click on the button in the middle called "Connect to GitHub"
- Search for your repository in the search box at the bottom of the page and click on the "Connect" button
- Click on the button for "Enable Automatic Deploys"
- Go back to the Overview tab and click on "Configure Add-On"
- Search for "Postgres" and select "Heroku Postgres" from the results

Page Screenshot:

<img src="/public/findogs.png" width="400" height="250">

Login page:

<img src="/public/findogs-login.png" width="400" height="250">

Search page:

<img src="/public/findogs-search.png" width="400" height="250">

Star page:

<img src="/public/findogs-star.png" width="400" height="250">
