import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateItemDto } from './dtos/create-item.dto';
import { UpdateItemDto } from './dtos/update-item.dto';
import { ItemDto } from './dtos/item.dto';
import { ItemsService } from './items.service';
import { IItem } from './interfaces/item.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  @ApiBearerAuth()
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

  @Get('/category/:id')
  @ApiResponse({
    description: 'Retrieves items by category.',
    type: [ItemDto],
  })
  async findByCategory(@Param('id') id: string): Promise<IItem[]> {
    const items = await this.itemsService.findBy({ category: id });
    return items;
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @ApiBearerAuth()
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

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @ApiBearerAuth()
  @ApiResponse({
    description: 'Removes an item by ID.',
    type: ItemDto,
  })
  async delete(@Param('id') id: string): Promise<IItem> {
    const item = await this.itemsService.delete(id);
    return item;
  }
}
