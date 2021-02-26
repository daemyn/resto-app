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
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dtos/category.dto';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { ICategory } from './interfaces/category.interface';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post('/')
  @ApiCreatedResponse({
    description: 'The category has been successfully created.',
    type: CategoryDto,
  })
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<ICategory> {
    const category = await this.categoriesService.create(createCategoryDto);
    return category;
  }

  @Get('/')
  @ApiResponse({
    description: 'Retrieves all categories.',
    type: [CategoryDto],
  })
  async findAll(): Promise<ICategory[]> {
    const categories = await this.categoriesService.findAll();
    return categories;
  }

  @Get('/:id')
  @ApiResponse({
    description: 'Retrieves category by ID.',
    type: CategoryDto,
  })
  async find(@Param('id') id: string): Promise<ICategory> {
    const category = await this.categoriesService.find(id);
    return category;
  }

  @Put('/:id')
  @ApiResponse({
    description: 'Find and update a category by ID.',
    type: CategoryDto,
  })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<ICategory> {
    const category = await this.categoriesService.update(id, updateCategoryDto);
    return category;
  }

  @Delete('/:id')
  @ApiResponse({
    description: 'Removes a category by ID.',
    type: CategoryDto,
  })
  async delete(@Param('id') id: string): Promise<ICategory> {
    const category = await this.categoriesService.delete(id);
    return category;
  }
}
