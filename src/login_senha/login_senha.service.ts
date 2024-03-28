import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginSenha } from "./login_senha.entity";
import { Repository } from "typeorm";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class LoginService{
  constructor(
    @InjectRepository(LoginSenha)
    private loginRepository: Repository<LoginSenha>,
  ) {}

    async checkLogin(loginDto: LoginDto): Promise<LoginSenha> {
         
        try {
            const login = await this.loginRepository.findOne(
            { where:
                {   nomeUsuario: loginDto.nomeUsuario,
                    RG: loginDto.RG,
                    senha: loginDto.senha }
            });

            if(login){
                delete login.senha;
                delete login.RG;
                return login;
            }
            else {
                throw new BadRequestException("Login não é válido");
            }
    
        } catch (error) {

            throw new InternalServerErrorException(
            'Erro ao fazer login no banco de dados : ' + error.message,
            );
        }      
      }

      async salvaRegister(registerDto: RegisterDto): Promise<LoginSenha> {

        const register = this.loginRepository.create();
        register.nomeCompleto = registerDto.nomeCompleto;
        register.dataNascimento = new Date (registerDto.dataNascimento);
        register.RG = registerDto.RG;
        register.cargoEscolar = registerDto.cargoEscolar;
        register.nomeEscola = registerDto.nomeEscola;
        register.nomeUsuario = registerDto.nomeUsuario;
        register.senha = registerDto.senha;

        try {
            await register.save();
            delete register.senha;
            delete register.RG;
            return register;
        } catch (error) {
            throw new InternalServerErrorException(
                'Erro ao salvar o registro no banco de dados',
            );
        }
        }

  }