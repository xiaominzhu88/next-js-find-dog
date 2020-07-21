## This is a desktop app created with Next.js ☘️

# Findogs 🐶

## Description

- “FINDOGS” makes the dog adoption process easier, by helping the user to discover a winning match. The user can search and match hundreds of adoptable dogs from different shelters or contact the shelter directly to get in touch.

### As a user, you have possibility to

- [ ] register / log in / out

- [ ] About Page: you can read about important notes before adopt a dog, you can view weekly dog stars, which could be updated every 3 weeks

- [ ] Fetch Page: receive random dog images and information with button 🐶 click (thedogapi)
- [ ] Fetch Page: click on button with 🤍, you will "like" the dogs and save them as favourite

If you are not sure about the dog behaviours, you can search them by breeds

- [ ] Search Page: you are able to search dogs by breeds(doesn't matter Uppercase or Lowercase), you will get lists from your search field, each of them links to a page which contains information from that dog, on that page you are able to view the image, name, temperament, lifespan information...

You can choose the final dogs which you want to adopt, send Email with your request to shelter

- [ ] Favourite page: click on 'adopt me' you will be able to see the saved dog id(s) and with 'send Email' button you will be link to the email sending form which already contains id and name from those dogs

## This project contains:

- frontend code
- backend code
- PostgreSQL database
- user authentication (registration + login)
- a readme with description, screenshots, technologies
- TypeScript
- 404 page

## Technologies used

This project is a Next.js app which makes use of a PostgresQL database.

Migrations are set up with Ley.

- [ ] [`ley`](https://github.com/lukeed/ley)

- [ ] [`postgres`](https://www.npmjs.com/package/postgres)

Some pages and components are written using TypeScript.

Deployment was carried out with Heroku.

## Setup Instructions

### Database Setup

Copy the `.env.example` file to `.env` and add the database connection information.

You'll also need PostgreSQL for this.

#### PostgreSQL Installation Instructions

Follow the instructions from the PostgreSQL step on https://github.com/upleveled/system-setup/

```
Run the following queries inside of psql to set up the database and the user:

CREATE DATABASE;

CREATE USER next_js_find_dog WITH ENCRYPTED PASSWORD 'net_js_find_dog';

GRANT ALL PRIVILEGES ON DATABASE next_js_find_dog TO next_js_find_dog;

Then, to connect to the database using this new user, quit psql and reconnect:

\q

psql -U next_js_find_dog next_js_find_dog
```

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

<img src="/public/findogs.png" width="400" height="250" alt='home'>

Login page:

<img src="/public/findogs-login.png" width="400" height="250" alt='login'>

Search page:

<img src="/public/findogs-search.png" width="400" height="250" alt='search'>

Star page:

<img src="/public/findogs-star.png" width="400" height="250" alt='star'>
