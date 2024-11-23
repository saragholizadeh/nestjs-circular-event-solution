import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserModule } from './user';
import { NotificationModule } from './notification';

@Module({
  imports: [EventEmitterModule.forRoot(), UserModule, NotificationModule],
})
export class AppModule {}
