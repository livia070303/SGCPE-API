import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { AtribuicaoAulasDto, ReturnListAtribuicaoAulasDto } from './dto/atribuicao-aulas.dto';
import { ReturnAtribuicaoAulasDto } from './dto/return-atribuicao-aulas.dto';
import { AtribuicaoAulasService } from './atribuicao_aulas.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('atribuicao_aulas')
@Controller('atribuicao_aulas')
export class AtribuicaoAulasController {
  constructor(private atribuicaoAulasService: AtribuicaoAulasService) {}

  @Post()
  async AtribuicaoAulas(
    @Body() atribuicaoAulasDtoDto: AtribuicaoAulasDto,
  ): Promise<ReturnAtribuicaoAulasDto> {
    const respostaAtribuicaoAulas = await this.atribuicaoAulasService.createAtribuicaoAulas(atribuicaoAulasDtoDto);
    return {
      atribuicaoAulas : respostaAtribuicaoAulas,
      message: 'Aula cadastrada com sucesso!',
    };
  }

  @Get()
  async getAtribuicaoAulas(
  ): Promise<ReturnListAtribuicaoAulasDto> {
    const atribuicaoAulas = await this.atribuicaoAulasService.getAtribuicaoAulas();
    return {
      atribuicaoAulas,
      message: 'ok',
    };
  }

  @Get('view')
  async getViewAtribuicaoAulas(
  ): Promise<any> {
    const atribuicaoAulas = await this.atribuicaoAulasService.getViewAtribuicaoAulas();
    return {
      data: atribuicaoAulas,
      message: 'ok',
    };
  }

  @Delete(':id')
  async deleteAtribuicaoAulas(@Param('id') id: string): Promise<any> {
    await this.atribuicaoAulasService.deleteAtribuicaoAulasById(id);
    return {
      message: 'Atribuição de aulas excluída com sucesso',
    };
  }


  @Put(':id')
  async atualizarAtribuicaoAulas(
    @Param('id') id: number,
    @Body() updateDto: AtribuicaoAulasDto,
  ): Promise<ReturnAtribuicaoAulasDto> {

    const resposta = await this.atribuicaoAulasService.updateAtribuicaoAulasById(id, updateDto);

    return {
        atribuicaoAulas : resposta,
        message: 'Atribuição de aulas atualizada com sucesso!',
      };
  }

}