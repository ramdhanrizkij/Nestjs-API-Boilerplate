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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const permission_entity_1 = require("./entities/permission.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PermissionService = class PermissionService {
    constructor(permissionRepo) {
        this.permissionRepo = permissionRepo;
    }
    async createPermission(payload) {
        const permission = await this.permissionRepo.save(payload);
        return {
            status: common_1.HttpStatus.OK,
            message: "Berhasil menambahkan data permission",
            data: permission
        };
    }
    async getAllPermission() {
        const permissions = await this.permissionRepo.find({
            order: {
                group: 'asc',
                permission_name: 'asc'
            }
        });
        return {
            status: common_1.HttpStatus.OK,
            message: "Success get permission",
            data: permissions
        };
    }
    async updatePermission(uuid, payload) {
        const models = await this.permissionRepo.findOne({ where: { uuid } });
        if (!models) {
            throw new common_1.HttpException("Permission not found", common_1.HttpStatus.NOT_FOUND);
        }
        models.group = payload.group;
        models.permission_name = payload.permission_name;
        await this.permissionRepo.save(models);
        return {
            status: common_1.HttpStatus.OK,
            message: "Success update permission",
            data: models
        };
    }
    async getPermisisonById(uuid) {
        const models = await this.permissionRepo.findOne({ where: { uuid } });
        if (!models) {
            throw new common_1.HttpException("Permission not found", common_1.HttpStatus.NOT_FOUND);
        }
        return {
            status: common_1.HttpStatus.OK,
            message: "Success get permission",
            data: models
        };
    }
    async deletePermission(uuid) {
        const models = await this.permissionRepo.findOne({ where: { uuid } });
        if (!models) {
            throw new common_1.HttpException("Permission not found", common_1.HttpStatus.NOT_FOUND);
        }
        await this.permissionRepo.remove(models);
        return {
            status: common_1.HttpStatus.OK,
            message: "Success delete permission",
            data: []
        };
    }
};
exports.PermissionService = PermissionService;
exports.PermissionService = PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PermissionService);
//# sourceMappingURL=permission.service.js.map