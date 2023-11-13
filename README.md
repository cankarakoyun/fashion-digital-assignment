# Fashion Digital Assignment

## Overview

This project is a web application built with React, Next.js, and Tailwind CSS. It includes three main routes:

- `/` for the home page
- `/productList` for product listing and filtering
- `/statistic` for statistics

The design of the project is inspired by Peek&Cloppenburg, and it features a clean and modern UI. The application uses React hooks for data filtering and relies on the following technologies:

- React
- Next.js
- Tailwind CSS
- React-Select

No additional libraries were used to keep the project lightweight and straightforward.

## Folder Structure

The project follows a well-organized folder structure:

- **assets**: Contains project-related assets.
- **tests**: Contains unit tests for pages and hooks.
- **hooks**: Includes hooks used for data filtering and processing.
- **components**: Holds shared components used across the application.
- **models**: Defines models for statistics and product data.
- **pages**: Contains the index files of the views and bootstrap files.

## Getting Started

Follow these steps to run the project locally:

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```
> Open http://localhost:3000 in your browser to view the application.

3. Run the tests:
```bash
npm run test
```

## Features
- Home Page (/): Brief description of the project and its purpose.

- Product Listing and Filtering (/productList): Displays a list of products with filtering options for sizes and prices. Uses React hooks for efficient data filtering.

- Statistics (/statistic): Provides statistical information, including the brand with the most products under 40 EUR, the brand with the largest selection of sizes, and the brand with the lowest average price for customers wearing size "32".

## Credits
- Tailwind CSS: A utility-first CSS framework used for styling.

- React-Select: A flexible and customizable Select component for React.

## Design Inspiration
The design of this project is inspired by Peek&Cloppenburg, aiming for a sleek and modern user interface.

