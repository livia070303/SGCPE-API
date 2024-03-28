import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    nomeUsuario: string;

    RG: string;

    senha: string;
  }