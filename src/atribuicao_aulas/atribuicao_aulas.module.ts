import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtribuicaoAulasService } from './atribuicao_aulas.service';
import { AtribuicaoAulasController } from './atribuicao_aulas.controller';
import { AtribuicaoAulas } from './atribuicao_aulas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AtribuicaoAulas])],
  providers: [AtribuicaoAulasService],
  controllers: [AtribuicaoAulasController],
})
export class AtribuicaoAulasModule {}