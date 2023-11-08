import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/user.dto';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(payload: CreateUserDTO): Promise<{
        status: HttpStatus;
        message: string;
        data: CreateUserDTO & User;
    }>;
    findByEmail(email: string): Promise<User>;
    findOne(id: number): Promise<User>;
    hashPassword(password: string): string;
    compare(plainPassword: any, hash: any): Promise<boolean>;
}
