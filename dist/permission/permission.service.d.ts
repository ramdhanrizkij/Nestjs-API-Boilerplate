import { HttpStatus } from '@nestjs/common';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDTO } from './dto/permission.dto';
export declare class PermissionService {
    private permissionRepo;
    constructor(permissionRepo: Repository<Permission>);
    createPermission(payload: CreatePermissionDTO): Promise<{
        status: HttpStatus;
        message: string;
        data: CreatePermissionDTO & Permission;
    }>;
    getAllPermission(): Promise<{
        status: HttpStatus;
        message: string;
        data: Permission[];
    }>;
    updatePermission(uuid: string, payload: CreatePermissionDTO): Promise<{
        status: HttpStatus;
        message: string;
        data: Permission;
    }>;
    getPermisisonById(uuid: string): Promise<{
        status: HttpStatus;
        message: string;
        data: Permission;
    }>;
    deletePermission(uuid: string): Promise<{
        status: HttpStatus;
        message: string;
        data: any[];
    }>;
}
