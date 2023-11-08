import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    profile(user: any): Promise<{
        status: HttpStatus;
        message: string;
        data: any;
    }>;
    login(payload: AuthDto): Promise<{
        token: string;
        user: import("../user/entities/user.entity").User;
    }>;
}
