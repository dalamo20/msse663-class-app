# Pizza Creator

## Project Overview
Pizza Creator is a web application built using Angular and TypeScript, designed as part of the MSSE 663 course to demonstrate frontend development concepts. While it does not actually process orders, it allows users to interact with the system by customizing pizzas. Users can add and remove toppings, modify pizza sizes, and view updated totals, providing a hands-on example of CRUD operations in a real-world scenario. The app is hosted on Firebase and showcases integration with NgRx for state management, as well as a responsive user interface. Final code in Week7 branch.

## Features
- Add/Remove Toppings: Users can select their desired toppings for each pizza and update their choices dynamically.
- Pizza Size Adjustment: Users can choose between different pizza sizes, with the total cost updating accordingly.
- Add/Remove Pizzas: Users can manage multiple pizzas in their order, adding or removing pizzas from their selection.
- View Totals: The application calculates and displays the total cost of the order based on the selected pizzas, sizes, and toppings.

## Tech Stack
- Frontend: Angular (v16.2.0), TypeScript
- State Management: NgRx (v16.3.0)
- Backend: Firebase hosting (no backend server)
- Database: MySQL (for demonstration purposes in development)
- Libraries:
- RxJS (Reactive Extensions for JavaScript)
- Zone.js (Angular's execution context)
- Sequelize and MySQL2 for database management in development

## Project Structure
- src/: Contains the main Angular application code.
- api/: Holds the API logic (for development only).
- ngrx/: Manages state using NgRx store and effects.
- firebase/: Handles Firebase hosting for production.

## Future Improvements
- Implement backend services to handle real pizza ordering.
- Add authentication and user profiles to save previous orders.
- Enhance the user interface for a more interactive experience.
