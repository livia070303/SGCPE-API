import { Controller, Post, Body} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login_senha.service';
import { ReturnLoginDto } from './dto/return-login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login_senha')
@Controller('login_senha')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<ReturnLoginDto> {
    const login = await this.loginService.checkLogin(loginDto);
    return {
      dados : login,
      message: 'Login feito com sucesso',
    };
  }

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<ReturnLoginDto> {
    const register = await this.loginService.salvaRegister(registerDto);
    return {
      dados : register ,
      message: ' Registro feito com sucesso',
    };
  }
}
