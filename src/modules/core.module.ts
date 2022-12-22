import { Module } from '@nestjs/common';

import { UserModule } from './user';
import { DatabaseModule } from './database';
import { ClientModule } from './client';

@Module({
  imports: [UserModule, DatabaseModule, ClientModule],
  exports: [UserModule, DatabaseModule, ClientModule],
})
export class CoreModule {}
