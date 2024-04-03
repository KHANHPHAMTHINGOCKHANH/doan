import { Controller, Get, Post, Body, Patch, Param, Delete ,Query,Put} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('create')
  async create(@Body() createLocationDto: CreateLocationDto) {
    try {
      const newLocation = await this.locationService.create(createLocationDto);
      return newLocation;
    } catch (err) {
        throw err
    }
  }

  @Get('get-all')
  async findAll() {
    try {
      const locations = await this.locationService.findAll();
      return locations;
    } catch (err) {
      throw err;
    }
  }

  @Put('update')
  async update(@Query('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    try{
      const newLocation = await this.locationService.update(id, updateLocationDto);
      return newLocation;
    }
    catch(err){
      throw err;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      const deletedLocation = await this.locationService.remove(id);
      return deletedLocation;
    }
    catch(err){
      throw err;
    }
  }
}