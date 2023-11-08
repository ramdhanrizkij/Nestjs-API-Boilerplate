import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcyrpt from 'bcrypt';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    async create(payload:CreateUserDTO){
        try{
            const user = await this.userRepo.save(payload)
            return {
                status: HttpStatus.OK,
                message:"Success create user",
                data:user
            }
        }catch(e){
            throw new HttpException(`Failed to save user :${e.message}`,HttpStatus.BAD_REQUEST)
        }
    }

    async findByEmail(email: string) {
        return await this.userRepo.findOne({ where: { email } })
    }

    async findOne(id:number){
        return await this.userRepo.findOne({where:{id}})
    }

    hashPassword(password: string) {
        const hash = bcyrpt.hashSync(password, 10);
        return hash;
    }

    async compare(plainPassword, hash) {
        return await bcyrpt.compare(plainPassword, hash)
    }
}
