import { BaseEntityWithUUID } from "src/common";
import { Role } from "src/role/entities/role.entity";
export declare class User extends BaseEntityWithUUID {
    email: string;
    name: string;
    password: string;
    phone_number: string;
    status: number;
    roles: Role[];
}
