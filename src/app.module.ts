import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async()=>{
      return configService.getTypeOrmConfig();
    }
  }), AuthModule, UserModule, RoleModule, PermissionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
