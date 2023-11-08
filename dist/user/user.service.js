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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcyrpt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async create(payload) {
        try {
            const user = await this.userRepo.save(payload);
            return {
                status: common_1.HttpStatus.OK,
                message: "Success create user",
                data: user
            };
        }
        catch (e) {
            throw new common_1.HttpException(`Failed to save user :${e.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByEmail(email) {
        return await this.userRepo.findOne({ where: { email } });
    }
    async findOne(id) {
        return await this.userRepo.findOne({ where: { id } });
    }
    hashPassword(password) {
        const hash = bcyrpt.hashSync(password, 10);
        return hash;
    }
    async compare(plainPassword, hash) {
        return await bcyrpt.compare(plainPassword, hash);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map