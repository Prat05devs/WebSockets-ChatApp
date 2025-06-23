# Hommies 📞 - Real-Time Group Chat Application

URL :- https://websockets-chatapp-production.up.railway.app/

## Introduction

Welcome to **Hommies 📞**, a real-time group chat application built with WebSockets and Socket.io. This project demonstrates the power of WebSockets in creating a dynamic, interactive chat experience with features like typing indicators and real-time user updates.

## Features

- **Group Chat Functionality:** Users can seamlessly send and receive messages within a group.
- **Typing Indicators:** Provides real-time feedback when someone is typing, enhancing user interaction.
- **Dynamic User Updates:** Users can join the chat anonymously and update their names. The total client count updates in real-time.
- **Bi-Directional Communication:** Utilizes WebSockets for full-duplex communication, ensuring smooth data flow between clients and the server.

## Technologies Used

- **Front-End:** HTML, CSS
- **Back-End:** Node.js, Express.js
- **Real-Time Communication:** WebSockets, Socket.io
- **Date and Time Handling:** Moment.js

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/hommies-chat-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd hommies-chat-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node server.js
    npm run dev // it contains nodemon
    ```

5. Open your browser and navigate to `http://localhost:4000`.

## Usage

1. Open the chat application in multiple browser windows or tabs.
2. Users can type their names and start sending messages.
3. The application will show who is typing in real-time.
4. Messages sent will be visible to all connected users.

## Project Structure

- **public/**: Contains static files (HTML, CSS, client-side JavaScript).
- **server.js**: Main server file.
- **package.json**: Node.js dependencies and scripts.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-branch
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m "Description of your changes"
    ```

4. Push to your branch:

    ```bash
    git push origin feature-branch
    ```

5. Open a pull request on GitHub.

## Acknowledgments

- Thanks to the creators of Socket.io and Moment.js for their excellent libraries.

## Contact

For any questions or suggestions, please feel free to open an issue or contact me at [prateekthofficial789@gmail.com](mailto:prateekthofficial789@gmail.com).
