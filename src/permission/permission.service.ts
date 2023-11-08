import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePermissionDTO } from './dto/permission.dto';

@Injectable()
export class PermissionService {
    constructor(@InjectRepository(Permission) private permissionRepo:Repository<Permission>){}

    async createPermission(payload:CreatePermissionDTO){
        const permission = await this.permissionRepo.save(payload)
        return {
            status:HttpStatus.OK,
            message:"Berhasil menambahkan data permission",
            data:permission
        }
    }

    async getAllPermission(){
        const permissions = await this.permissionRepo.find({
            order:{
                group:'asc',
                permission_name:'asc'
            }
        })
        return {
            status:HttpStatus.OK,
            message:"Success get permission",
            data:permissions
        }
    }

    async updatePermission(uuid:string, payload:CreatePermissionDTO){
        const models = await this.permissionRepo.findOne({where:{uuid}})
        if(!models){
            throw new HttpException("Permission not found", HttpStatus.NOT_FOUND)
        }
        models.group = payload.group
        models.permission_name = payload.permission_name
        await this.permissionRepo.save(models)
        return {
            status: HttpStatus.OK,
            message:"Success update permission",
            data:models
        }
    }

    async getPermisisonById(uuid:string){
        const models = await this.permissionRepo.findOne({where:{uuid}})
        if(!models){
            throw new HttpException("Permission not found", HttpStatus.NOT_FOUND)
        }
        return {
            status: HttpStatus.OK,
            message:"Success get permission",
            data:models
        }
    }

    async deletePermission(uuid:string){
        const models = await this.permissionRepo.findOne({where:{uuid}})
        if(!models){
            throw new HttpException("Permission not found", HttpStatus.NOT_FOUND)
        }
        await this.permissionRepo.remove(models)
        return {
            status:HttpStatus.OK,
            message:"Success delete permission",
            data:[]
        }
    }
}
