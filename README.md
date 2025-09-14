# Mini Seller - Lead Management System

A modern React-based lead management system built with TypeScript, Vite, and Tailwind CSS. This application helps you manage leads, track opportunities, and visualize your sales pipeline.

## 🚀 Features

- **Lead Management**: View, search, and manage leads with detailed information
- **Advanced Sorting**: Sort leads by name, company, source, score, or status (ascending/descending)
- **Opportunity Tracking**: Monitor sales opportunities and their stages
- **Pipeline Overview**: Visual breakdown of opportunities by stage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Search**: Filter leads by name, company, or email
- **Interactive UI**: Modern interface with smooth animations and hover effects

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Testing**: Vitest, Testing Library
- **Mock API**: JSON Server

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js**: Version 22.3.0 or higher
- **Yarn**: Version 1.22.22 or higher
- **Git**: For cloning the repository

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd mini-seller
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Start the Development Servers

You need to run two servers simultaneously:

**Terminal 1 - Start the Mock API Server:**
```bash
yarn server
```
This will start the JSON Server on `http://localhost:3001`

**Terminal 2 - Start the Development Server:**
```bash
yarn dev
```
This will start the Vite development server on `http://localhost:5173`

### 4. Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── modules/
│   ├── leads/                 # Lead management module
│   │   ├── components/        # Lead-related components
│   │   ├── hooks/            # Custom hooks for leads
│   │   ├── interfaces/       # TypeScript interfaces
│   │   ├── services/         # API services
│   │   └── utils/            # Utility functions
│   └── opportunities/        # Opportunity management module
│       ├── components/       # Opportunity components
│       ├── hooks/           # Custom hooks for opportunities
│       ├── interfaces/      # TypeScript interfaces
│       ├── services/        # API services
│       └── utils/           # Utility functions
├── shared/                   # Shared components and utilities
├── pages/                    # Page components
└── config/                   # Configuration files
```

## 🎯 Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn preview` - Preview the production build
- `yarn test` - Run tests
- `yarn test --run` - Run tests once (without watch mode)
- `yarn server` - Start the mock API server
- `yarn lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

The application uses a mock API by default. To connect to a real API, update the configuration in:
- `src/config/axios/index.ts`

### Mock Data

Mock data is stored in `__mocks__/db.json` and includes:
- Sample leads with various statuses and scores
- Opportunity data for pipeline visualization

## 📊 Features Overview

### Lead Management
- **View Leads**: Browse all leads in a responsive table
- **Search**: Filter leads by name, company, or email
- **Sort**: Click column headers to sort by different criteria
- **Details**: Click on any lead to view detailed information

### Opportunity Tracking
- **Summary Cards**: View total opportunities, value, and conversion rate
- **Pipeline Overview**: Visual breakdown of opportunities by stage
- **Stage Management**: Track opportunities through different sales stages

### Sorting System
The application features an advanced sorting system:
- **First Click**: Sort in ascending order (A→Z, 1→9)
- **Second Click**: Sort in descending order (Z→A, 9→1)
- **Third Click**: Remove sorting (return to original order)

## 🧪 Testing

The project includes comprehensive tests:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests once
yarn test --run

# Run specific test file
yarn test src/modules/leads/utils/sort-by-col/sortByCol.spec.ts
```

## 🚀 Production Build

To build the application for production:

```bash
yarn build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
yarn preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
- Make sure ports 3001 and 5173 are available
- Kill existing processes if necessary

**Dependencies issues:**
- Delete `node_modules` and `yarn.lock`
- Run `yarn install` again

**Build errors:**
- Check Node.js version compatibility
- Ensure all dependencies are installed

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all prerequisites are installed
3. Ensure both servers are running
4. Check the browser's developer tools for additional errors

For support and questions, please open an issue in the repository.
