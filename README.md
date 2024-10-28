# Real Estate Scraper (Magic Bricks)

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Configure PostgreSQL database in `.env` file.
4. Run migrations with `npx prisma migrate dev`.
5. Start the backend: `cd backend && node backend/index.js or npm run backend`.
6. Start the frontend: `cd frontend && npm run dev`.

## How to Run Backend
   `npm run backend`

## How to Run Frontend
   `npm run dev`

## Lists
    -> https://www.magicbricks.com/owner-property-for-sale-in-new-delhi-pppfs
    * Click on the above link and visit the list page.
    * Click on any one title and it will open in new tab
    * Copy the url and paste it in the form
    * Data will be scrapped
    * Example url: https://www.magicbricks.com/propertyDetails/1-BHK-1100-Sq-ft-Residential-House-FOR-Sale-Pul-Prahlad-Pur-in-New-Delhi&id=4d423735333136373431

#### Designed By: Gaurav
    -> https://www.linkedin.com/in/gaurav-kumar-a945231b0/

<sub>Note: make sure to configure you .env file for backend and .env.local file for frontent</sub>
