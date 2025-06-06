import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';

@Module({
    controllers: [UserController],
    providers: [UsersService],
})
export class UserModule {}