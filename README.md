# Type Speedometer

**Type Speedometer** is an interactive web application that allows users to test their typing speed in real-time. The app tracks your typing speed, calculated in Words Per Minute (WPM), while providing a typing challenge in the **Classic** mode. It is built using **React.js**, **TypeScript**, and **Bootstrap**, offering a modern and responsive user experience with a focus on performance and real-time updates.

## Features

- **Real-Time Typing Speed (WPM)**: Track your typing speed dynamically as you type. The app updates the WPM in real-time.
- **Classic Typing Mode**: A simple and clean typing challenge where you type a given text, and your progress is tracked.
- **Timer**: A built-in timer that tracks the time spent on the typing challenge.
- **Dynamic Text Feedback**: Shows correct text in green, incorrect text in red, and remaining text in a neutral color for better visualization.
- **Responsive Design**: A clean and responsive UI powered by Bootstrap, ensuring usability on both desktop and mobile devices.
- **Clear and Retry Option**: Easily reset the challenge and retry typing with a click of a button.
- **Custom Text Input**: Users can enter their own custom text through a modal to change the typing challenge's content.

## Tech Stack

- **React.js**: The app’s UI is built with React.js, leveraging its component-based architecture for creating reusable and modular components. React hooks (`useState`, `useEffect`) are used for managing the state of the app, such as tracking typing progress, timing, and user input.
  
- **TypeScript**: TypeScript adds type safety to the codebase, ensuring better development experience with more predictable and maintainable code.

- **HTML & CSS**: The basic structure and layout are built using HTML and CSS, creating a user-friendly interface.

- **Bootstrap 5**: Used for responsive layout and UI styling. The grid system and components like buttons, modals, and forms are provided by Bootstrap for a fast and consistent UI.

## How React is Used

- **Component-Based Architecture**: The application is built with reusable components for different parts of the UI:
  - `ClassicPage`: The main container where the text challenge and timer are displayed.
  - `SampleText`: Displays the text for the user to type, with color-coded feedback for correct and incorrect characters.
  - `InputText`: The text input area where the user types, with real-time validation.
  - `Timer`: A timer that tracks the time elapsed since the typing started.
  - `WordsPerMinute`: Displays the WPM as the user types, updating in real-time.
  - `UpdateText`: A modal allowing the user to update the challenge text.

- **State Management with Hooks**: React’s `useState` and `useEffect` hooks are extensively used to manage state for things like:
  - The typed text, time elapsed, and WPM.
  - Conditional rendering of UI elements (such as the "Update Text" modal).
  - Timer functionality to update the time and WPM dynamically.

- **Event Handling**: React event handlers, such as `onChange` for capturing text input, allow seamless interaction. The app tracks the user’s typing, updates the state for correct and incorrect text, and calculates the WPM in real time.
