import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { configService } from 'src/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService) { }

    async cekUser(email, password) {
        try {
            const user = await this.userService.findByEmail(email)
            if (!user) {
                throw new HttpException("User tidak ditemukan", HttpStatus.NOT_FOUND)
            }

            if (user.status == 0) {
                throw new HttpException("Akun anda tidak aktif, silakan hubungi admin", HttpStatus.UNAUTHORIZED)
            }
            const valid = this.userService.compare(password, user.password)
            if (valid) {
                delete user.password
                return user
            } else {
                throw new HttpException("Email atau password salah", HttpStatus.UNAUTHORIZED)
            }
        } catch (e) {
            throw new HttpException(e.message, 409)
        }
    }

    generateToken(user: any) {
        const dataToken = { id: user.id };
        const token = this.jwtService.sign(dataToken, {
            secret: configService.getJwtSecret(),
            expiresIn: '12h',
        });
        return { token: token };
    }
}
