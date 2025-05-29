import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'; 
import { UpdateUserDto } from './dto/update-user.dto'; 
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }

    @Get()
    findAll() {
        return this.usersService.users({});
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.usersService.user({ id: +id });
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
        return this.usersService.updateUser(
            +id,
            dto,
            {
                where: { id: +id },
                data: dto
            }
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.deleteUser({ id: +id });
    }
}
