# Todo Today

Todo Today is a cross-platform desktop ToDo application built with Tauri, ViteJS, TypeScript, React, and Tailwind CSS. It offers a modern, responsive user interface with basic ToDo functionalities such as adding, toggling, and deleting tasks. The application also includes proper exception handling for a seamless user experience.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add ToDo**: Add new tasks to your ToDo list.
- **Toggle ToDo**: Mark tasks as completed or not completed.
- **Delete ToDo**: Remove tasks from your ToDo list.
- **Responsive UI**: Modern, responsive UI built with Tailwind CSS.
- **Exception Handling**: Proper error handling for a smooth user experience.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- [Rust](https://www.rust-lang.org/tools/install) (for Tauri CLI)
- [Tauri CLI](https://tauri.studio/docs/getting-started/intro)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/todo-today.git
   cd todo-today
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Initialize Tauri:**
   ```sh
   npx tauri init
   ```

## Usage

### Development

To start the development server and the Tauri application, run:
```sh
npm run tauri dev
```

### Build

To build the application for production, run:
```sh
npm run tauri build
```

## File Structure

```
todo-today/
├── src/
│   ├── components/
│   │   ├── Todo.tsx
│   │   └── TodoItem.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── src-tauri/
│   ├── tauri.conf.json
├── tailwind.config.js
├── index.html
├── package.json
└── README.md
```

## Development

### Adding a New ToDo

- **Todo.tsx**: Main component for managing the list of todos and providing input for adding new todos.
- **TodoItem.tsx**: Component for displaying individual todo items with options to toggle and delete.

### Styling

- **Tailwind CSS**: Utility-first CSS framework for styling the application. Configuration is defined in `tailwind.config.js` and `index.css`.

### Configuration

- **ViteJS**: Used for fast development and building of the project.
- **Tauri**: Configured via `tauri.conf.json` for building the cross-platform desktop application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---