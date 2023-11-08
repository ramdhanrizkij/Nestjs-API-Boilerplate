"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let PermissionsGuard = class PermissionsGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    havePermission(permissions, userPerm) {
        return userPerm.some((e) => permissions.includes(e));
    }
    canActivate(context) {
        const permission = this.reflector.get('permission', context.getHandler());
        if (permission.length == 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const userPerm = [];
        for (const role of user.roles) {
            for (const val of role.permissions) {
                if (!userPerm.includes(val.permissionName))
                    userPerm.push(val.permissionName);
            }
        }
        if (!(userPerm.length > 0))
            throw new common_1.ForbiddenException();
        return this.havePermission(userPerm, permission);
    }
};
exports.PermissionsGuard = PermissionsGuard;
exports.PermissionsGuard = PermissionsGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], PermissionsGuard);
//# sourceMappingURL=permission.guard.js.map