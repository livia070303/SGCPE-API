import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginSenha } from './login_senha.entity';
import { LoginService } from './login_senha.service';
import { LoginController } from './login_senha.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LoginSenha])],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}