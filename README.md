# REST API for FLOWDESK

## Introduction
This project implements a REST API for interacting with the KuCoin cryptocurrency exchange. It provides two endpoints: one to compute the cumulative delta on a specific trading pair, and the other to show all available trading pairs.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)


## Installation
To set up this project, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/ahKafagy/REST_API_FLOWDESK.git
   ```
2. Navigate to the project directory:
   ```bash
   cd '.\REST API KUCOIN\'
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage
To run the API server, use one of the following commands:
- Development mode (with hot reloading):
  ```bash
  npm run dev
  ```
- Production build:
  ```bash
  npm run build
  npm start
  ```

## Features
- **Cumulative Delta Calculation**: Calculate the cumulative delta for cryptocurrency trading pairs by aggregating buy and sell data.
(Exemple:http://localhost:3001/delta/KucoinCumulativeDelta/MTV-BTC)
- **Consult Available Trading Tokens**: Endpoint to fetch and display available trading pairs on KuCoin.
(Exemple:http://localhost:3001/AvailableToken) 
- Communication with KuCoin API.
- Middleware for error handling.
- Automated testing setup with Jest.(run with :  npm test)

## Dependencies
- [Express](http://expressjs.com/) for handling API requests.
- [Axios](https://github.com/axios/axios) for making HTTP requests.
- [KuCoin Node SDK](https://www.npmjs.com/package/kucoin) for interacting with KuCoin API.

## Configuration
The application uses the following configuration from `tsconfig.json`:
- Target: ES6
- Module system: CommonJS
- Strict type checking.

Ensure all environmental variables and configurations are set before running the application.

## Examples
Example of fetching available tokens from KuCoin:
```typescript
import { KucoinDeltaAvailableTokenService } from './KucoinDeltaAvailableTokenService';

const tokenService = new KucoinDeltaAvailableTokenService();
tokenService.getAvailableTokens().then(tokens => console.log(tokens));
```

## Troubleshooting
For any issues regarding dependencies or TypeScript configurations, ensure you are using the compatible versions as specified in `package.json`.

## Contributors
- Kafagy Ahmed


