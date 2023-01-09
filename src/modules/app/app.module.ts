import { APP_GUARD } from '@nestjs/core';
import { UsersModule } from '&modules/users';
import { Module } from '@nestjs/common';

import { DatabaseModule } from '&modules/database';
import { JwtAuthGuard } from '&modules/auth/jwt-auth.guard';

import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
