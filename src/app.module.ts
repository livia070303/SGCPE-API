import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { LoginModule } from './login_senha/login_senha.module';
import { CadastroProfessoresModule } from './cadastro_professores/cadastro_professores.module';
import { AtribuicaoAulasModule } from './atribuicao_aulas/atribuicao_aulas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env.prod'}), TypeOrmModule.forRoot(typeOrmConfig), LoginModule, CadastroProfessoresModule, AtribuicaoAulasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
