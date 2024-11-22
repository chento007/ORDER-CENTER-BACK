import { CommonEntity } from "src/common/entity/common.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Product } from "../product/product.entity";

@Entity()
export class Category extends CommonEntity {

    @Column({
        type: 'text',
    })
    name: string;

    @Column({
        type: 'text',
    })
    description: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}