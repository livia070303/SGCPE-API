import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { ReturnCadastroProfessoresDto, ReturnListCadastroProfessoresDto } from './dto/return-cadastro_professores.dto';
import { CadastroProfessoresDto, updateCadastroProfessorDto } from './dto/cadastro-professores.dto';
import { CadastroProfessoresService } from './cadastro_professores.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cadastro_professores')
@Controller('cadastro_professores')
export class CadastroProfessoresController {
  constructor(private cadastroProfessorService: CadastroProfessoresService) {}

  @Post()
  async createCadastroProfessores(
    @Body() createCadastroProfessorDto: CadastroProfessoresDto,
  ): Promise<ReturnCadastroProfessoresDto> {
    const cadastro_professores = await this.cadastroProfessorService.createCadastroProfessores(createCadastroProfessorDto);
    return {
      cadastro_professores,
      message: 'Professor cadastrado com sucesso',
    };
  }

  @Get()
  async getCadastroProfessor(
  ): Promise<ReturnListCadastroProfessoresDto> {
    const resposta = await this.cadastroProfessorService.getCadastroProfessor();
    return {
      cadastro_professores: resposta,
      message: 'ok',
    };
  }

  @Get(':id')
  async getCadastroProfessorById(@Param('id') id: number
  ): Promise<ReturnCadastroProfessoresDto> {
    const resposta = await this.cadastroProfessorService.getCadastroProfessorById(id);
    return {
      cadastro_professores: resposta,
      message: 'ok',
    };
  }

  @Delete(':id')
  async deleteCadastroProfessores(@Param('id') id: string): Promise<any> {
    await this.cadastroProfessorService.deleteCadastroProfessoresById(id);
    return {
      message: 'Professor excluído com sucesso',
    };
  }


  @Put(':id')
  async atualizarCadastroProfessores(
    @Param('id') id: number,
    @Body() updateCadastroProfessorDto: updateCadastroProfessorDto,
  ): Promise<ReturnCadastroProfessoresDto> {

    const cadastroProfessor = await this.cadastroProfessorService.updateCadastroProfessorById(id, updateCadastroProfessorDto);

    return {
        cadastro_professores: cadastroProfessor,
        message: 'Cadastro do professor atualizado com sucesso',
      };
  }

}