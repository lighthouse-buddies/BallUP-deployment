# BallUP

An application designed to help basketball players and enthusiasts find courts near them. The app caters to both non-registered and registered users. While non-registered users can find courts near them, registered users enjoy the privilege of adding new courts, viewing their contributions, and adding comments and addresses.

## About Page

![About Page](https://github.com/lighthouse-buddies/BallUP/blob/main/public/BallUP/About.png?raw=true 'About Page screenshot')

## Home Page

![BallUP](https://github.com/lighthouse-buddies/BallUP/blob/main/public/BallUP/BallUp_Homepage.png?raw=true 'Homepage screenshot')

## Moblie View

![Mobile view](https://github.com/lighthouse-buddies/BallUP/blob/main/public/BallUP/Mobile_view.png?raw=true 'Mobile view screenshot')

## Tech Stack

- Next.js 13
- React 18
- Mapbox, Google Maps geocoding, and places APIs
- PostgreSQL 9+
- Prisma ORM

## Installation

1. Clone the repository
2. Install dependencies using `npm install` or in some cases `npm install --legacy-peer-deps`
3. Create a `.env.local` file and add the following environment variables following the `.env.example` file
4. Run the app using `npm run dev`

## API Usage

This application uses the following APIs:

- Mapbox API for displaying maps
- Google Maps Geocoding API for converting addresses into geographic coordinates
- Google Places API for details on points of interest and business locations

Ensure you have the respective API keys placed in the `.env` file.

## Future Improvements

- User profile enhancements
- Additional social features such as friends and court recommendations
- Ratings and reviews for each court

## Dependencies

Node version v16.20.1 or higher is required.

npm version 8.19.4 or higher is required.

POSTGRESQL version 10.23 or higher is required.

Our application relies on the following dependencies:

```json
{
  "@headlessui/react": "^1.7.7",
  "@heroicons/react": "^2.0.13",
  "@next/font": "13.1.1",
  "@prisma/client": "^4.8.1",
  "@reach/combobox": "^0.18.0",
  "@react-google-maps/api": "^2.17.1",
  "@tailwindcss/forms": "^0.5.3",
  "axios": "^1.2.2",
  "eslint": "8.31.0",
  "eslint-config-next": "13.1.1",
  "firebase": "^9.15.0",
  "heroicons": "^2.0.13",
  "mapbox-gl": "^2.12.0",
  "next": "13.1.1",
  "next-auth": "^4.18.8",
  "next-plausible": "^3.7.1",
  "prisma": "^4.8.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-map-gl": "^7.0.21",
  "use-places-autocomplete": "^4.0.0"
}
```

## Dev Dependencies

```json
{
  "autoprefixer": "^10.4.13",
  "postcss": "^8.4.21",
  "tailwindcss": "^3.2.4"
}
```

## Contributors

- [Arian Ahmadi](https://github.com/arianah75)
- [Abdul Syed](https://github.com/syabdulr)
