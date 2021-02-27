import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';
import { Category } from 'src/categories/category.schema';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Category' })
  category: Category | string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
