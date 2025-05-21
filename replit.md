# Punith KJ Portfolio Website

## Overview
This project is a professional portfolio website for Punith KJ, a Senior Tax Consultant. The application is built using a modern web stack with React for the frontend, Express for the backend, and Drizzle ORM for database management. The site includes sections for about, services, skills, experience, and a contact form with API integration.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture with:

1. **Frontend**: React-based single-page application with various UI components
2. **Backend**: Express.js server handling API requests
3. **Database**: PostgreSQL database (to be integrated) with Drizzle ORM
4. **Styling**: TailwindCSS for responsive design with a custom theme

The project uses a modular approach with clear separation between frontend and backend code:
- `/client`: Contains the React frontend application
- `/server`: Houses the Express server code
- `/shared`: Contains schema definitions shared between frontend and backend

## Key Components

### Frontend
1. **UI Framework**: The application uses a comprehensive component library based on shadcn/ui with Radix UI primitives for accessible components.
2. **Routing**: Simple routing is handled by Wouter, a lightweight router.
3. **State Management**: React Query is used for server state management and data fetching.
4. **Animations**: Framer Motion is integrated for smooth animations and transitions.
5. **Forms**: React Hook Form with Zod validation for form handling in the contact section.
6. **Theme**: Custom theme with light/dark mode support.

### Backend
1. **API Server**: Express.js server with modular route structure.
2. **Database Access**: Drizzle ORM for PostgreSQL database operations.
3. **Contact Form**: RESTful API endpoint (/api/contact) for handling contact form submissions.
4. **Storage Interface**: Interface for data persistence with current in-memory implementation.

### Database
The application uses Drizzle ORM with PostgreSQL (to be fully integrated). The database schema currently includes:
- `users` table with id, username, and password fields

## Data Flow

1. **Page Load**: The frontend loads with static content for the portfolio sections.
2. **Contact Form**: 
   - User fills out and submits the contact form
   - Form data is validated client-side with Zod
   - Data is sent to the `/api/contact` endpoint via POST request
   - Server processes the form data (currently logs to console)
   - Server responds with success/failure message
   - UI displays a toast notification based on the response

3. **Theme Toggling**:
   - User clicks theme toggle button
   - Theme preference is stored in localStorage
   - UI updates to reflect the selected theme

## External Dependencies

### Frontend
- React and React DOM for UI rendering
- TailwindCSS for styling
- Radix UI components for accessible UI elements
- Framer Motion for animations
- React Hook Form for form handling
- Zod for validation
- React Query for data fetching

### Backend
- Express for the server framework
- Drizzle ORM for database operations
- Drizzle-zod for schema validation

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - `npm run build`: Builds both frontend and backend
   - Frontend: Vite bundles React code
   - Backend: ESBuild bundles server code

2. **Runtime**:
   - In development: `npm run dev` starts the server with tsx
   - In production: `npm run start` runs the bundled application

3. **Database**:
   - The application is configured to use Postgres through the `@neondatabase/serverless` package
   - Database migrations are managed with Drizzle Kit

## Getting Started

1. **Setup the Database**:
   - The application expects a PostgreSQL database URL in the `DATABASE_URL` environment variable
   - Run `npm run db:push` to apply the database schema

2. **Development**:
   - Run `npm run dev` to start the development server
   - The server will run on port 5000

3. **Production**:
   - Run `npm run build` to build the application
   - Run `npm run start` to start the production server

## Future Enhancements

1. **Authentication**: Implement user authentication using the existing users schema
2. **Blog Section**: Add a blog or articles section for sharing tax knowledge
3. **Client Testimonials**: Add a testimonials section with a carousel component
4. **File Upload**: Enable file uploads in the contact form for documents
5. **Email Integration**: Connect the contact form to an actual email service