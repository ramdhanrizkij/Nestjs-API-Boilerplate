import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  havePermission(permissions: string[], userPerm: string[]) {
    return userPerm.some((e) => permissions.includes(e));
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const permission = this.reflector.get<string[]>('permission', context.getHandler());

    if (permission.length == 0) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const userPerm = [];
    for (const role of user.roles) {
      for (const val of role.permissions) {
        if (!userPerm.includes(val.permissionName)) userPerm.push(val.permissionName);
      }
    }

    if (!(userPerm.length > 0)) throw new ForbiddenException();
    return this.havePermission(userPerm, permission);
  }
}
