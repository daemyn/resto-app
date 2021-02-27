import { ICategory } from '../../categories/interfaces/category.interface';

export interface IItem {
  name: string;
  description: string;
  price: number;
  category: string | ICategory;
}
