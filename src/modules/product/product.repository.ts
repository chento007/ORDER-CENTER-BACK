import { Repository } from 'typeorm';
import { Product } from './product.entity';

export interface ProductRepository extends Repository<Product> {}
