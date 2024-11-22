import { AppRoles } from 'src/common/enum/roles.enum';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Role {
  constructor() {
    this.id = 1;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  name: AppRoles;

  @ManyToMany(() => User, (user) => user.roles)
  user: User[];
}
