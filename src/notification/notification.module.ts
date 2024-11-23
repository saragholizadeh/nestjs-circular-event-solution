import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
