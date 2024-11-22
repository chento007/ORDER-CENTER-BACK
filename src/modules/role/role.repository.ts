import { Repository } from 'typeorm';
import { Role } from './role.entity';

export interface RoleRepository extends Repository<Role> {}
