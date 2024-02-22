# Readme

## Running the project for first time

1. Clone the repository
2. Copy .env.example to .env file
2. Install dependencies
3. You have to get installed docker + docker compose before
4. Run: docker compose up (to build the containers)
This command will setup all the containers and create the DB.
After that, you will need to run the migrations to create the initial tables.
5. Run the migrations with: npm run migration:run
This command will run all the migrations under database/migrations and will create
all the tables we need or we have setup.
6. Then, we need to populate our tables with our seeders to get some users, initial data to avoid insert it manually.

We can achieve this running: npm run seed:run


## Runing the project later
After we setup the project, and we're working on new features, fixing bugs, etc.
We just need to do 2 things, update our database schemas and add more seeders.
To achieve that, we need to run the following commands

```
npm run migration:generate -- src/database/migrations/CreateNameTable

npm run migration:run

```