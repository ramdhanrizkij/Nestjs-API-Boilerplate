import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
export declare class PermissionsGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    havePermission(permissions: string[], userPerm: string[]): boolean;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
