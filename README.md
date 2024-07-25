Stocks API Project:

Overview
This project is a simple web application that allows users to filter stock quotes based on their category (e.g., "facts" or "learning"). The application is built with React for the frontend and Node.js/Express for the backend.

Features
Fetch random stock facts and learning quotes.
Filter stocks by category.
Responsive design with Tailwind CSS for styling.


Backend Overview
The backend is built with Node.js and Express. It provides endpoints to fetch stock quotes and filter them based on categories.

Endpoints
GET /filter: Filters stocks by category.
Query Parameter: category - The category to filter by (e.g., "facts" or "learning").
Response: JSON array of filtered stock quotes.

Frontend Overview
The frontend is built with React and styled using Tailwind CSS. It includes input fields and buttons to interact with the backend and display the filtered stock quotes.

Main Components
StockFilter: Main component that handles user input and displays filtered stock quotes.
State Management: Uses React hooks to manage state and handle user input.
Styling: Tailwind CSS classes for a responsive and modern UI. Using <b>Shadcn</b>

This project showcases the integration of a React frontend with a Node.js/Express backend. The application allows users to filter and view stock quotes based on categories, with a focus on clean and responsive UI design using Tailwind CSS.
