import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroProfessores } from './cadastro_professores.entity';
import { CadastroProfessoresService } from './cadastro_professores.service';
import { CadastroProfessoresController } from './cadastro_professores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CadastroProfessores])],
  providers: [CadastroProfessoresService],
  controllers: [CadastroProfessoresController],
})
export class CadastroProfessoresModule {}