import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePermissionDTO } from './dto/permission.dto';

@Controller('permission')
@ApiTags("Permission")
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get('/')
  getAll(@Query() filter:any){
    return this.permissionService.getAllPermission();
  }

  @Get('/:id')
  getById(@Param('uuid') uuid:string){
    return this.permissionService.getPermisisonById(uuid)
  }

  @Post('/')
  create(@Body() payload:CreatePermissionDTO){
    return this.permissionService.createPermission(payload)
  }

  @Put('/:id')
  update(@Param('uuid') uuid:string,@Body() payload:CreatePermissionDTO){
    return this.permissionService.updatePermission(uuid, payload)
  }

  @Delete('/:id')
  delete(@Param('uuid') uuid:string){
    return this.permissionService.deletePermission(uuid)
  }
}
