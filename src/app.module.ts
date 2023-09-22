import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenController } from './token.controller';
import { HttpModule } from '@nestjs/axios';
import { DiGAController } from './diga.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TokenController, DiGAController],
  providers: [AppService],
})
export class AppModule {}
