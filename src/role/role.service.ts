import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { CreateRoleDTO } from './dto/role.dto';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(Role) private roleRepo:Repository<Role>){}

    async createRole(payload:CreateRoleDTO){
        const role = await this.roleRepo.save(payload)
        return {
            status:HttpStatus.OK,
            message:"Berhasil menambahkan data role",
            data: role
        }
    }

    async updateRole(uuid:string, payload){
        const role = await this.roleRepo.findOne({where:{uuid}})
        if(!role){
            throw new HttpException("Role tidak ditemukan", HttpStatus.NOT_FOUND)
        }
        role.role_name = payload.role_name
        await this.roleRepo.save(role)
        return {
            status: HttpStatus.OK,
            message:"Berhasil mengupdate data role",
            data: role
        }
    }

    async getRoleById(uuid:string){
        const role = await this.roleRepo.findOne({
            where:{
                uuid:uuid
            }
        })
        if(!role){
            throw new HttpException("Role tidak ditemukan", HttpStatus.NOT_FOUND)
        }
        return {
            status:HttpStatus.OK,
            message:"Success get role",
            data:role
        }
    }

    async getRoles(){
        const role = await this.roleRepo.find()
        return {
            status:HttpStatus.OK,
            message:"Success get roles",
            data: role
        }
    }

    async deleteRole(uuid:string){
        const role = await this.roleRepo.findOne({where:{uuid}})
        if(!role){
            throw new HttpException("Role not found", HttpStatus.NOT_FOUND)
        }
        await this.roleRepo.remove(role)
        return {
            satus:HttpStatus.OK,
            message:"Success delete role",
            data: []
        }
    }
}
