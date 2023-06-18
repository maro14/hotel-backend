# Hotel Backend Project

This is the backend application for a hotel management system. It provides APIs for user authentication, room management, booking management, and other related functionalities.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Rooms](#rooms)
  - [Bookings](#bookings)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js: JavaScript runtime environment
- Express.js: Web application framework
- MongoDB: NoSQL database for data storage
- Mongoose: Object Data Modeling (ODM) library for MongoDB
- JWT (JSON Web Tokens): Authentication mechanism
- bcryptjs: Library for password hashing
- Other dependencies as specified in the project files

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hotel-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hotel-backend
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

### Configuration

1. Create a `.env` file in the project root directory.

2. Add the required environment variables to the `.env` file. Example:

   ```plaintext
   # MongoDB Connection String
   MONGODB_URI=mongodb://localhost:27017/hotel

   # JWT Secret Key
   JWT_SECRET=your_secret_key
   ```

3. Save the `.env` file.

4. Start the application:

   ```bash
   yarn start
   ```

   The server should now be running on `http://localhost:5000`.

## API Endpoints

### Authentication

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Authenticate user and generate a JSON Web Token (JWT).

### Rooms

- `GET /room/live/rooms`: Retrieve all available rooms.
- `POST /room/add/room`: Create a new room.

### Bookings

- `GET /book/live`: Retrieve active bookings for the authenticated user.
- `POST /book/book`: Create a new booking for the authenticated user.
- `GET /book/yourbookings`: Retrieve all bookings for the authenticated user.

Please refer to the API documentation or code files for detailed request and response information for each endpoint.

## Contributing

Contributions to the project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -am 'Add my feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.

