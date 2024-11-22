import { CommonEntity } from 'src/common/entity/common.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Product extends CommonEntity {
  @Column({
    type: 'text',
  })
  name: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column('decimal', { precision: 6, scale: 2 })
  price: number;

  @Column({
    nullable: true
  })
  discount: number;

  @Column()
  stockQty: number;

  @Column({
    nullable: true
  })
  order: number;

  @Column({
    type: 'text',
  })
  thumbnail: string;

  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column()
  categoryId: number;
}
