import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('notification')
  async triggerNotification(@Body('userId') userId: string) {
    await this.notificationService.createNotification(userId);
    return { message: `Notification event triggered for user ${userId}` };
  }
}
