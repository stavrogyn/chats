import { Module } from '@nestjs/common';
import { CoreModule } from './modules';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
