import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    cekUser(email: any, password: any): Promise<import("../user/entities/user.entity").User>;
    generateToken(user: any): {
        token: string;
    };
}
