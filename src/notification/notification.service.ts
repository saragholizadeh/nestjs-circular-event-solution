// order.service.ts
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class NotificationService {
  constructor(private eventEmitter: EventEmitter2) {}

  async createNotification(userId: string) {
    // Logic to create the order
    console.log(`Notification created for user ${userId}`);

    // Emit an event after the order is created
    this.eventEmitter.emit('user.notificationCreated', { userId });
  }
}
