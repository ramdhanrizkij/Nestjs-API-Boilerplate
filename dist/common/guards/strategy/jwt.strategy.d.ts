import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<{
        email: string;
        name: string;
        password: string;
        phone_number: string;
        status: number;
        roles: import("../../../role/entities/role.entity").Role[];
        id: number;
        uuid: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
