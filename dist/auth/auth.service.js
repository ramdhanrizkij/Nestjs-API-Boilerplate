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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("../common");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async cekUser(email, password) {
        try {
            const user = await this.userService.findByEmail(email);
            if (!user) {
                throw new common_1.HttpException("User tidak ditemukan", common_1.HttpStatus.NOT_FOUND);
            }
            if (user.status == 0) {
                throw new common_1.HttpException("Akun anda tidak aktif, silakan hubungi admin", common_1.HttpStatus.UNAUTHORIZED);
            }
            const valid = this.userService.compare(password, user.password);
            if (valid) {
                delete user.password;
                return user;
            }
            else {
                throw new common_1.HttpException("Email atau password salah", common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 409);
        }
    }
    generateToken(user) {
        const dataToken = { id: user.id };
        const token = this.jwtService.sign(dataToken, {
            secret: common_2.configService.getJwtSecret(),
            expiresIn: '12h',
        });
        return { token: token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map