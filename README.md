# JAN RESTAURANT

A modern and responsive restaurant website built for Jan Restaurant.

The website presents traditional Afghan food, restaurant information, food gallery, contact form, dark mode, responsive navigation, scroll animations, and WhatsApp food ordering.

## Project Overview

JAN RESTAURANT is a frontend web project designed to provide customers with a simple and attractive way to explore the restaurant and its menu.

The project focuses on:

- Responsive web design
- Clean HTML structure
- Modern CSS styling
- JavaScript interactions
- Dynamic menu rendering
- Contact form validation
- Dark and light mode
- Mobile navigation
- Scroll animations
- Active navigation links
- Back to top functionality
- WhatsApp food ordering
- Loading spinner
- Basic SEO metadata

## Features

### 1. Responsive Design

The website works on:

- Desktop
- Laptop
- Tablet
- Mobile devices

The navigation menu changes to a mobile menu on smaller screens.

### 2. Navigation Bar

The navigation includes:

- Home
- Menu
- About
- Gallery
- Contact

The active navigation link changes automatically when the user scrolls through different sections.

### 3. Hero Section

The hero section introduces the restaurant with:

- Restaurant name
- Short description
- View Menu button

The View Menu button takes the user directly to the menu section.

### 4. Dynamic Menu

Menu items are stored inside a JavaScript array.

Each food item contains:

- Name
- Description
- Price
- Image

Example:

```javascript
{
  name: "Afghan Kebab",
  description: "Delicious grilled kebab with traditional spices.",
  price: "100AF",
  image: "images/kebab.jpg"
}
```

## Run locally

```sh
git clone https://github.com/awaljanhematyar/Restaurant-Website.git
cd Restaurant-Website
```

Open `index.html` in a browser or serve the folder with VS Code Live Server. This static project has no npm installation or build step.

## Source map

| Path | Purpose |
| --- | --- |
| `index.html` | Page structure and restaurant sections |
| `style.css` | Visual design and responsive layout |
| `script.js` | Menu data and interactive behavior |
| `images/` | Food, gallery and restaurant assets |

## Customization and scope

Update the food records in `script.js`, the page content in `index.html` and styles in `style.css`. Verify business details, image rights and contact destinations before publishing a customized version. A frontend form or WhatsApp link alone does not confirm an order or reservation.

This README review does not establish new runtime or accessibility test results.

## Author

[Awal Jan Hematyar](https://github.com/awaljanhematyar) · [Developer portfolio](https://hematyar-professional-portfolio.vercel.app/)

