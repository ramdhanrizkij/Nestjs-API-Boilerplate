import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(payload: CreateUserDTO): Promise<{
        status: HttpStatus;
        message: string;
        data: CreateUserDTO & import("./entities/user.entity").User;
    }>;
}
