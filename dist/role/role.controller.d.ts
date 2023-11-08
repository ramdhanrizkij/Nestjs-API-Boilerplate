import { RoleService } from './role.service';
import { CreateRoleDTO } from './dto/role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(payload: CreateRoleDTO): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: CreateRoleDTO & import("./entities/role.entity").Role;
    }>;
    findAll(filter: any): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entities/role.entity").Role[];
    }>;
    findOne(uuid: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entities/role.entity").Role;
    }>;
    updateRole(uuid: string, payload: CreateRoleDTO): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entities/role.entity").Role;
    }>;
    deleteRole(uuid: string): Promise<{
        satus: import("@nestjs/common").HttpStatus;
        message: string;
        data: any[];
    }>;
}
