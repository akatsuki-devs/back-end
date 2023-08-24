import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsersModule, PrismaService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
