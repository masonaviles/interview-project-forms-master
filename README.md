# Interview Task: Form Helper Enhancement

## Overview

This task is designed to assess your skills in building and enhancing UI components using React. You will work within a provided monorepo, specifically focusing on the `ui` package, which contains essential UI elements for this task.

## Objective

Your goal is to demonstrate proficiency in creating a user-friendly form component, followed by enhancing it for better usability and flexibility.

## Part 1: Building a Basic Form

Create a simple form that captures the user's email address. This form should include:

- A text input field for the email address.
- Labeling for the input field.
- Basic validation to ensure the input is a valid email format.
- Display of error messages for invalid input.
- A submit button that POSTs the email address.

Upon submission, the form should display the submitted email address on the screen.

## Part 2: Enhancing Form Inputs

After creating the basic form, your next task is to develop a component that simplifies the process of adding new form inputs. This component, named `SimpleInput`, should offer a more streamlined way to include form fields with minimal boilerplate.

### Requirements for `SimpleInput`

- **Labeling**: If a `label` prop is provided, the component should display a form label.
- **Validation**: The component should support basic validation (e.g., required fields). Extend this by allowing custom validation rules passed as props.
- **Flexibility**: By default, the component should use a standard `Input` component. If it is provided, it should be able to render any React component passed through this prop as the form input.
- **className**: Should be passed through.
- **Customization**: Allow passing additional props for the input component, enabling customization of placeholder text, styling, etc.

### Advanced Features

- **Form Context**: Implement a form context or use an existing solution to manage form state, validation, and submission more efficiently.
- **Dynamic Form Fields**: Demonstrate how `SimpleInput` can be used to dynamically add or remove form fields (e.g., adding multiple email addresses).
- **Error Handling**: Enhance error display by integrating a tooltip or modal for detailed error messages.

### Demonstration

Create a form that utilizes the `SimpleInput` component to showcase its functionality. This form should include various input types (e.g., text,
email, number) and demonstrate dynamic field addition/removal and custom validation rules.
