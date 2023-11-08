import { PermissionService } from './permission.service';
import { CreatePermissionDTO } from './dto/permission.dto';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    getAll(filter: any): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entities/permission.entity").Permission[];
    }>;
    getById(uuid: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entities/permission.entity").Permission;
    }>;
    create(payload: CreatePermissionDTO): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: CreatePermissionDTO & import("./entities/permission.entity").Permission;
    }>;
    update(uuid: string, payload: CreatePermissionDTO): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entities/permission.entity").Permission;
    }>;
    delete(uuid: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        data: any[];
    }>;
}
