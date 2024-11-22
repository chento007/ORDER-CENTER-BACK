import { CommonEntity } from 'src/common/entity/common.entity';
import { Role } from './role.entity';
import { Column } from 'typeorm';

export class Permission extends CommonEntity {
  role: Role;

  @Column()
  actioon: string;

  @Column()
  subject: string;
}
