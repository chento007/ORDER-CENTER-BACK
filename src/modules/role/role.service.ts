import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./role.entity";
import { RoleRepository } from "./role.repository";
import { Repository, In } from "typeorm";

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: RoleRepository,
    ) { }

    async findByIds(ids: number[]): Promise<Role[]> {
        return await this.roleRepository.find({
            where: {
                id: In(ids),
            },
        });
    }
}