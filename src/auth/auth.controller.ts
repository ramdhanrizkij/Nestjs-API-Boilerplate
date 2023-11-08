import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtGuard } from 'src/common/guards';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('profile')
  @UseGuards(JwtGuard)
  async profile(@Req() user:any){
    return {
      status:HttpStatus.OK,
      message:"success",
      data: user
    }
  }

  @Post('login')
  async login(@Body() payload: AuthDto) {
    const user = await this.authService.cekUser(payload.email, payload.password)
    if (!user) throw new HttpException('Login failed', 401);
    const { token } = this.authService.generateToken({ id: user.uuid })
    
    return {
      token: token,
      user: user
    }
  }
}
