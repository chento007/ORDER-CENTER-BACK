import { Repository } from 'typeorm';
import { Category } from './category.entity';

export interface CategoryRepository extends Repository<Category> {}
