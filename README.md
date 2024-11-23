# NestJS Circular Dependency with EventEmitter Example

This project demonstrates how to handle circular dependencies in a NestJS application using the `EventEmitter` module. It's a simple example that shows how to decouple services by emitting and listening for events to avoid direct dependencies.

## Features

- **Circular Dependency Handling**: Uses `EventEmitter` to decouple services and prevent circular dependencies.
- **Notification API**: A POST endpoint that triggers an event when a notification is created, and the event is handled by a separate service.
- **Simple NestJS Setup**: Basic NestJS application structure with clear separation of concerns.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/saragholizadeh/nestjs-circular-event-solution
```

2. Navigate to the project directory:

```bash
cd nestjs-circular-event-solution
```

3. Install the dependencies:

```bash
npm install
```
## Running the Application

To run the application, use the following command:

```bash
npm run start
```

This will start the NestJS server on the default port `3000`.

## API Testing

Once the server is running, you can test the functionality by calling the following `POST` API:

```bash
POST /notifications/notification
```

This endpoint triggers the creation of a notification and emits an event which is handled by the `UserService`.

*Request Body*
```json
{
  "userId": "123"
}
```

*Example Request Using curl:*

```bash
curl -X POST http://localhost:3000/notifications/notification \
  -H "Content-Type: application/json" \
  -d '{"userId": "123"}'
```

*You should see a log message in the console like:*

`Handling notification for user 123`

This message comes from the `UserService`, which listens for the `user.notificationCreated` event emitted by the `NotificationService`.

## Key Concepts

**EventEmitter**: The EventEmitter module is used to handle events in a decoupled way, helping to avoid circular dependencies.

**Circular Dependency**: This occurs when two services depend on each other directly, creating a loop. By emitting events and handling them asynchronously, we can break the direct dependency chain.

## Technologies Used
**NestJS**: A framework for building efficient, scalable Node.js applications.

**EventEmitter**: A module that helps in event-driven architectures, allowing services to communicate without direct dependencies.

