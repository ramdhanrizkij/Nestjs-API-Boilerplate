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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("./entities/role.entity");
const typeorm_2 = require("typeorm");
let RoleService = class RoleService {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    async createRole(payload) {
        const role = await this.roleRepo.save(payload);
        return {
            status: common_1.HttpStatus.OK,
            message: "Berhasil menambahkan data role",
            data: role
        };
    }
    async updateRole(uuid, payload) {
        const role = await this.roleRepo.findOne({ where: { uuid } });
        if (!role) {
            throw new common_1.HttpException("Role tidak ditemukan", common_1.HttpStatus.NOT_FOUND);
        }
        role.role_name = payload.role_name;
        await this.roleRepo.save(role);
        return {
            status: common_1.HttpStatus.OK,
            message: "Berhasil mengupdate data role",
            data: role
        };
    }
    async getRoleById(uuid) {
        const role = await this.roleRepo.findOne({
            where: {
                uuid: uuid
            }
        });
        if (!role) {
            throw new common_1.HttpException("Role tidak ditemukan", common_1.HttpStatus.NOT_FOUND);
        }
        return {
            status: common_1.HttpStatus.OK,
            message: "Success get role",
            data: role
        };
    }
    async getRoles() {
        const role = await this.roleRepo.find();
        return {
            status: common_1.HttpStatus.OK,
            message: "Success get roles",
            data: role
        };
    }
    async deleteRole(uuid) {
        const role = await this.roleRepo.findOne({ where: { uuid } });
        if (!role) {
            throw new common_1.HttpException("Role not found", common_1.HttpStatus.NOT_FOUND);
        }
        await this.roleRepo.remove(role);
        return {
            satus: common_1.HttpStatus.OK,
            message: "Success delete role",
            data: []
        };
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
//# sourceMappingURL=role.service.js.map