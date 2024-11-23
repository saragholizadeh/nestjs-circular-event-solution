// user.service.ts
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserService {
  @OnEvent('user.notificationCreated')
  handleNotificationCreatedEvent(payload: { userId: string }) {
    console.log(`Handling notification for user ${payload.userId}`);
  }
}
