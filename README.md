# 👤 User Card Creator

A beginner-friendly **React + Vite mini project** where users can enter their information through a form and dynamically generate user cards based on the submitted data.

The project also uses **Browser Local Storage** to persist user data even after refreshing the page.

## 🚀 Features

* Add users through a form
* Enter user name, email, age, and image URL
* Dynamically generate user cards
* Display the user's profile image
* Delete users
* Store users in Local Storage
* Persist users after page refresh
* Responsive UI
* Clean and simple interface

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript (JSX)**
* **Tailwind CSS**
* **Browser Local Storage**

## 📚 React Concepts Practiced

This project helped me practice:

* `useState`
* `useEffect`
* Controlled Components
* Two-way Binding
* Event Handling
* Form Handling
* Array State
* `.map()`
* `.filter()`
* Conditional Rendering
* Dynamic Rendering
* Component-based UI
* Local Storage integration

## 💾 Local Storage

User data is stored in the browser's Local Storage so that the created cards remain available even after refreshing the page.

### Data Flow

```text
User enters information
        ↓
Form State
        ↓
Add User
        ↓
Users State
        ↓
User Card
        ↓
useEffect
        ↓
JSON.stringify()
        ↓
Local Storage
```

When the application starts, the stored data is loaded back into React state:

```text
Local Storage
      ↓
getItem()
      ↓
JSON.parse()
      ↓
Users State
      ↓
User Cards
```

## 🔄 Project Workflow

```text
Fill the form
     ↓
Click "Add User"
     ↓
User added to users array
     ↓
React updates the UI
     ↓
User card is displayed
     ↓
useEffect saves updated users
     ↓
Data is stored in Local Storage
```

## 🗑️ Delete User

Users can be removed from the card list using the Delete button.

The updated users array is automatically stored in Local Storage through `useEffect`.

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## 🎯 Future Improvements

*  Edit user functionality
*  Form validation
*  Search users
*  Filter users
*  Add animations
*  Add dark mode
*  Improve UI/UX
*  Add unique IDs for users

## 👩‍💻 Learning Project

This project is part of my journey of learning **React.js and modern frontend development**.

Built with React + Vite while learning React fundamentals, state management, and browser storage.
