# LeadFlow CRM

LeadFlow CRM is a comprehensive MERN stack application for managing sales leads and customer relationships. The application features user authentication, lead management, and a responsive interface for both desktop and mobile.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
  - [Testing Approach](#testing-approach)
  - [Test Directory Structure](#test-directory-structure)
  - [Running Tests](#running-tests)
  - [Mock Setup](#mock-setup)
  - [Coverage Goals](#coverage-goals)
  - [Testing Best Practices](#testing-best-practices)
  - [Writing New Tests](#writing-new-tests)
  - [CI/CD Integration](#cicd-integration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Getting Started

To get started with the LeadFlow CRM application, clone the repository and install the dependencies.

```bash
git clone <repository-url>
cd leadflow-crm
npm run install-deps
```

## Project Structure

The project is organized into two main directories:

- **backend**: Express.js server with MongoDB integration
- **frontend**: React application with TypeScript

## Environment Setup

The application requires Node.js version 22.13.2 and MongoDB.

## Running the Application

To run both the frontend and backend simultaneously:

```bash
npm run dev
```

To run only the backend:

```bash
npm run server
```

To run only the frontend:

```bash
npm run client
```

## Testing

### Testing Approach

The LeadFlow CRM application uses a comprehensive testing strategy with:

- **Backend**: Jest for unit and integration tests with MongoDB Memory Server for database testing
- **Frontend**: React Testing Library for component testing and integration tests

The testing approach follows these principles:
- **Unit Tests**: Test individual functions and components in isolation
- **Integration Tests**: Test interactions between multiple components or API endpoints
- **End-to-End Tests**: Test complete user flows from UI to database and back

### Test Directory Structure

#### Backend Tests
```
backend/
└── tests/
    ├── setup.js             # Test configuration and database setup
    ├── models/              # Tests for MongoDB models
    │   ├── User.test.js
    │   └── Lead.test.js
    ├── routes/              # Tests for API routes
    │   └── auth.test.js
    └── integration/         # Integration tests
        └── api.test.js
```

#### Frontend Tests
```
frontend/
└── src/
    ├── setupTests.ts        # React Testing Library configuration
    ├── tests/
    │   ├── utils/           # Test utilities
    │   │   └── test-utils.tsx
    │   └── integration/     # Integration tests
    │       └── UserFlow.test.tsx
    ├── components/
    │   └── __tests__/       # Component tests
    │       ├── Button.test.tsx
    │       └── Card.test.tsx
    ├── pages/
    │   └── __tests__/       # Page component tests
    │       ├── Dashboard.test.tsx
    │       └── LoginScreen.test.tsx
    └── redux/
        └── __tests__/       # Redux tests
            └── authSlice.test.ts
```

### Running Tests

#### Backend Tests

```bash
# Run all backend tests
cd backend && npm test

# Run backend tests in watch mode
cd backend && npm run test:watch
```

#### Frontend Tests

```bash
# Run all frontend tests
cd frontend && npm test

# Run frontend tests in watch mode
cd frontend && npm run test:watch

# Run frontend tests with coverage report
cd frontend && npm run test:coverage

# Run frontend tests in CI mode
cd frontend && npm run test:ci
```

### Mock Setup

#### Backend Mocks

The backend tests use `mongodb-memory-server` to create an in-memory MongoDB database for testing. This approach allows tests to run without requiring an actual MongoDB instance. Key configurations:

- The `tests/setup.js` file initializes the in-memory database before tests run
- Environment variables are set for testing in the setup file
- Database connections are established before tests and cleaned up after

```javascript
// Example from tests/setup.js
const connectDB = async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  process.env.MONGODB_URI = mongoUri;
  await mongoose.connect(mongoUri, { /* options */ });
};
```

#### Frontend Mocks

Frontend tests use various mocks to isolate components and avoid external dependencies:

- React Navigation is mocked to prevent actual navigation
- Redux store is mocked with a test store configuration
- API service calls are mocked to return test data
- Theme values are mocked for consistent styling in tests

```typescript
// Example from setupTests.ts
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));
```

### Coverage Goals

The project aims for the following test coverage thresholds:

#### Frontend Coverage
- 60% branch coverage
- 60% function coverage
- 60% line coverage
- 60% statement coverage

```json
// From frontend/package.json
"coverageThreshold": {
  "global": {
    "branches": 60,
    "functions": 60,
    "lines": 60,
    "statements": 60
  }
}
```

#### Backend Coverage
Backend coverage goals are not explicitly defined but follow similar standards of 60% minimum coverage.

To check coverage:
```bash
# Frontend coverage
cd frontend && npm run test:coverage

# Backend coverage would require adding coverage flag to Jest
cd backend && npm test -- --coverage
```

### Testing Best Practices

The project follows these testing best practices:

1. **Isolated Tests**: Each test should be independent and not rely on the state from other tests
2. **Clear Assertions**: Each test should have clear, meaningful assertions
3. **Test Preparation**: Use beforeEach/afterEach hooks to set up and clean up test state
4. **Mock External Dependencies**: Always mock API calls, databases, and other external services
5. **Test Edge Cases**: Include tests for error conditions and edge cases
6. **Descriptive Test Names**: Test names should clearly describe what they're testing
7. **DRY Test Code**: Use utility functions and fixtures to avoid repetition
8. **Test Real User Behaviors**: Tests should reflect how users actually interact with the application

### Writing New Tests

#### Writing a Component Test

```typescript
// Example of a component test
import React from 'react';
import { render, screen, fireEvent } from '../../../tests/utils/test-utils';
import Button from '../../components/Button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onPress function when clicked', () => {
    const handlePress = jest.fn();
    render(<Button onPress={handlePress}>Click Me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
```

#### Writing an API Endpoint Test

```javascript
// Example of an API endpoint test
import request from 'supertest';
import express from 'express';
import authRoutes from '../../routes/auth';
import User from '../../models/User';

describe('Auth Routes', () => {
  let app;
  
  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/api/auth', authRoutes);
  });
  
  it('should register a new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };
    
    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);
      
    expect(response.body).toHaveProperty('message', 'User registered');
    
    // Verify user was saved to the database
    const user = await User.findOne({ email: userData.email });
    expect(user).toBeTruthy();
    expect(user.name).toBe(userData.name);
  });
});
```

### CI/CD Integration

The testing setup is configured for integration with CI/CD pipelines:

- **Frontend**: The `test:ci` script is specifically designed for CI environments, using the `--ci` flag for Jest and generating JUnit reports.
- **Backend**: The standard test script can be used in CI environments.

CI/CD configuration should include:

1. Running backend tests: `cd backend && npm test`
2. Running frontend tests: `cd frontend && npm run test:ci`
3. Collecting and displaying coverage reports
4. Failing the build if coverage thresholds are not met

Example CI workflow:

```yml
# Example CI workflow (not included in repo)
test:
  stage: test
  script:
    - cd backend && npm test
    - cd ../frontend && npm run test:ci
  artifacts:
    paths:
      - backend/coverage/
      - frontend/coverage/
    reports:
      junit: frontend/junit.xml
```

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React, TypeScript, Redux Toolkit, React Navigation
- **Testing**: Jest, React Testing Library, Supertest, MongoDB Memory Server

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
