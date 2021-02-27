import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dtos/create-item.dto';
import { UpdateItemDto } from './dtos/update-item.dto';
import { Item, ItemDocument } from './item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find({}).exec();
  }

  async find(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    return this.itemModel
      .findByIdAndUpdate(id, updateItemDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id).exec();
  }
}
