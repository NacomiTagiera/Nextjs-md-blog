# Kocham Gry - Next.js 13 Markdown Blog

This blog is dedicated to showcasing my favorite video games and sharing my experiences with them. With the use of the latest web technologies and design trends, I have created a modern and responsive blog that is easy to navigate and enjoyable to use. From action-packed first-person shooters to engaging role-playing games, this blog covers a variety of genres and titles!
**Live demo**: [https://kocham-gry.vercel.app](https://kocham-gry.vercel.app)

![Home Page](https://github.com/NacomiTagiera/Nextjs-md-blog/assets/106376178/508db29f-6e5a-4cef-a87c-a87f5d8f4feb)
![Posts Page](https://github.com/NacomiTagiera/Nextjs-md-blog/assets/106376178/668138dc-9ce5-42b0-b061-64c68342e8af)
![Contact Page](https://github.com/NacomiTagiera/Nextjs-md-blog/assets/106376178/599a399a-a40d-4e03-b0f1-8defeff0f5ad)

## Technologies used

- [Next.js](https://nextjs.org/docs) - React.js framework for building server-side rendered web applications
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework for building custom designs quickly and easily
- [Zod](https://zod.dev/) - JavaScript schema validation library
- [MongoDB](https://www.mongodb.com/docs/) - NoSQL document database used for data storage and retrieval
- [Remark](https://remark.js.org/) - Markdown processor for parsing and rendering Markdown content
- [Remark-HTML](https://github.com/remarkjs/remark-html) - library for converting Markdown to HTML
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress) - JavaScript end-to-end testing framework

## Features

- Markdown support for easy formatting of blog posts
- Search bar implementation for quick and efficient article searches
- Sorting posts by creation date and in alphabetical order
- Active Link navigation through blog posts for a better user experience
- SEO optimization with Next.js Metadata API
- Server-side form validation using Zod
- Customizable and reusable styling with Tailwind CSS
- Integration with MongoDB to store messages sent by contact form
- End-to-End tests for the contact form and posts page with Cypress

## What did I learn?

- Working with forms in Next.js 14: server actions, useFormState, and useFormStatus hooks
- Defining dynamic routes and generating static params
- Updating query params in Next.js
- SEO optimazation techniques
- Zod schema declaration and validation
- Sending requests to the MongoDB database and storing data
- End-to-End testing with Cypress

## Getting Started

To install and start the app locally, follow these steps:

1. Clone the repo:

```bash
git clone https://github.com/NacomiTagiera/Kocham-Gry.git
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running E2E tests

To run the Cypress E2E tests, follow these steps:

1. Open a terminal in your project directory.
2. Run the following command to open the Cypress Test Runner:

```bash
npx cypress open
```

This will open the Cypress Test Runner window.

3. Click on the test file you want to run in the Cypress Test Runner.

## Running E2E tests in headless mode

If you prefer to run the tests in the terminal without opening the Cypress Test Runner window, you can use the following command:

```bash
npx cypress run
```

This will execute the tests headlessly, and the results will be displayed in the terminal.
