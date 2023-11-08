import { HttpStatus } from '@nestjs/common';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { CreateRoleDTO } from './dto/role.dto';
export declare class RoleService {
    private roleRepo;
    constructor(roleRepo: Repository<Role>);
    createRole(payload: CreateRoleDTO): Promise<{
        status: HttpStatus;
        message: string;
        data: CreateRoleDTO & Role;
    }>;
    updateRole(uuid: string, payload: any): Promise<{
        status: HttpStatus;
        message: string;
        data: Role;
    }>;
    getRoleById(uuid: string): Promise<{
        status: HttpStatus;
        message: string;
        data: Role;
    }>;
    getRoles(): Promise<{
        status: HttpStatus;
        message: string;
        data: Role[];
    }>;
    deleteRole(uuid: string): Promise<{
        satus: HttpStatus;
        message: string;
        data: any[];
    }>;
}
