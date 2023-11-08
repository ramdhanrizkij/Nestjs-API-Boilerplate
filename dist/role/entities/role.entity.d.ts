import { BaseEntityWithUUID } from "src/common";
import { Permission } from "src/permission/entities/permission.entity";
import { User } from "src/user/entities/user.entity";
export declare class Role extends BaseEntityWithUUID {
    role_name: string;
    users: User[];
    permissions: Permission[];
}
