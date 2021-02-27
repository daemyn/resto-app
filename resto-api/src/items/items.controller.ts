import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dtos/create-item.dto';
import { UpdateItemDto } from './dtos/update-item.dto';
import { ItemDto } from './dtos/item.dto';
import { ItemsService } from './items.service';
import { IItem } from './interfaces/item.interface';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Post('/')
  @ApiCreatedResponse({
    description: 'The item has been successfully created.',
    type: ItemDto,
  })
  async create(@Body() createItemDto: CreateItemDto): Promise<IItem> {
    const item = await this.itemsService.create(createItemDto);
    return item;
  }

  @Get('/')
  @ApiResponse({
    description: 'Retrieves all items.',
    type: [ItemDto],
  })
  async findAll(): Promise<IItem[]> {
    const items = await this.itemsService.findAll();
    return items;
  }

  @Put('/:id')
  @ApiResponse({
    description: 'Find and update an item by ID.',
    type: ItemDto,
  })
  async update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<IItem> {
    const item = await this.itemsService.update(id, updateItemDto);
    return item;
  }

  @Delete('/:id')
  @ApiResponse({
    description: 'Removes an item by ID.',
    type: ItemDto,
  })
  async delete(@Param('id') id: string): Promise<IItem> {
    const item = await this.itemsService.delete(id);
    return item;
  }
}
