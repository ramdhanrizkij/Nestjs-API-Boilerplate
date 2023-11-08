import { BaseEntityWithUUID } from "src/common";
import { Role } from "src/role/entities/role.entity";
export declare class Permission extends BaseEntityWithUUID {
    permission_name: string;
    group: string;
    roles: Role[];
}
