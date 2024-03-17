import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.create(createUserDto);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  @Get('all')
  async findAll() {
    try {
      const users = await this.userService.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findOne(@Query('id') id: string) {
    try {
      const user = this.userService.findOne(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Get('email')
  findByEmail(@Query('email') email: string) {
    try {
      const user = this.userService.findByEmail(email);
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Put('update')
  async update(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.userService.update(id, updateUserDto);
      return updatedUser;
    } catch (error) {
      throw  error;
    }
  }

  @Delete(':id')
  async remove(@Query('id') id: string) {
    try {
      const deletedUser = await this.userService.remove(id);
      return  deletedUser;
    } catch ( error) {
      throw error;
    }
  }
}