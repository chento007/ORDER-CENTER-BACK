import { IsEmail } from 'class-validator';
import { CommonEntity } from 'src/common/entity/common.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Role } from '../role/role.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends CommonEntity {
  @Column({
    type: 'text',
    nullable: true,
  })
  username: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  fullname: string;

  @Column({
    type: 'text',
    nullable: true,
    unique: true,
  })
  phone: string;

  @IsEmail()
  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column({
    type: 'text',
  })
  @Exclude()
  password: string;

  @Column({ nullable: true })
  @Exclude()
  refresh?: string;

  @ManyToMany(() => Role, (role) => role.user, { eager: true })
  @JoinTable()
  roles: Role[];
}
