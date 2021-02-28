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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dtos/category.dto';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { ICategory } from './interfaces/category.interface';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  @ApiBearerAuth()
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

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @ApiBearerAuth()
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

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @ApiBearerAuth()
  @ApiResponse({
    description: 'Removes a category by ID.',
    type: CategoryDto,
  })
  async delete(@Param('id') id: string): Promise<ICategory> {
    const category = await this.categoriesService.delete(id);
    return category;
  }
}
