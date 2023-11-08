import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateRoleDTO } from './dto/role.dto';

@Controller('role')
@ApiTags('Role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() payload:CreateRoleDTO){
    return this.roleService.createRole(payload)
  }

  @Get()
  findAll(@Query() filter: any){
    return this.roleService.getRoles()
  }

  @Get('/:uuid')
  findOne(@Param('uuid') uuid:string){
    return this.roleService.getRoleById(uuid)
  }

  @Put('/:uuid')
  updateRole(@Param('uuid') uuid:string, @Body() payload:CreateRoleDTO){
    return this.roleService.updateRole(uuid, payload)
  }

  @Delete('/:uuid')
  deleteRole(@Param('uuid') uuid:string){
    return this.roleService.deleteRole(uuid)
  }
}
