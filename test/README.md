# Medical Dashboard

This project is a React-based frontend medical dashboard application designed to display comprehensive patient records. It fetches patient data from a remote API and presents it in an intuitive, easy-to-navigate interface.

## Features

- **Patient Sidebar:** Browse and select from a list of patients.
- **Patient Information:** View detailed personal and medical information for the selected patient.
- **Diagnosis History Graph:** Interactive chart displaying the patient's blood pressure history over time.
- **Diagnosis Cards:** Key metrics including respiratory rate, temperature, and heart rate.
- **Diagnostic List:** A detailed table of the patient's diagnosed conditions.
- **Lab Results:** A list of the patient's recent laboratory test results.

## Technologies Used

- **React 18**
- **Chart.js & React-Chartjs-2** (for data visualization)
- **React Icons**
- **CSS** (Custom styling)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd test
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Building for Production

To build the app for production to the `build` folder, run:

```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.
