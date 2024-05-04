import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtribuicaoAulas } from 'src/atribuicao_aulas/atribuicao_aulas.entity';
import { AtribuicaoAulasDto } from 'src/atribuicao_aulas/dto/atribuicao-aulas.dto';
import { ViewAtribuicaoAulas } from './atribuicao_aulas.view.entity';

@Injectable()
export class AtribuicaoAulasService{
  constructor(
    @InjectRepository(AtribuicaoAulas)
    private atribuicaoAulasRepository: Repository<AtribuicaoAulas>,

    @InjectRepository(ViewAtribuicaoAulas)
    private readonly viewAtribuicaoAulasRepository: Repository<ViewAtribuicaoAulas>,
  ) {}
  
    async createAtribuicaoAulas(atribuicaoAulasDto: AtribuicaoAulasDto ): Promise<AtribuicaoAulas> {

            const atribuicaoAulas = this.atribuicaoAulasRepository.create();
            atribuicaoAulas.idAtribuicaoAulas = atribuicaoAulasDto.idAtribuicaoAulas;
            atribuicaoAulas.idProfessor = atribuicaoAulasDto.idProfessor;
            atribuicaoAulas.idProfessorEventual = atribuicaoAulasDto.idProfessorEventual;
            atribuicaoAulas.nomeEscola = atribuicaoAulasDto.nomeEscola;
            atribuicaoAulas.UA = atribuicaoAulasDto.UA;
            atribuicaoAulas.CIE = atribuicaoAulasDto.CIE;
            atribuicaoAulas.ciclo = atribuicaoAulasDto.ciclo;
            atribuicaoAulas.Data = atribuicaoAulasDto.Data;
            atribuicaoAulas.HoraInicioAula = atribuicaoAulasDto.HoraInicioAula;
            atribuicaoAulas.HoraFimAula = atribuicaoAulasDto.HoraFimAula;
            atribuicaoAulas.turno = atribuicaoAulasDto.turno;
            atribuicaoAulas.turma = atribuicaoAulasDto.turma;

            try {
                await atribuicaoAulas.save();
                // delete atribuicaoAulas.RGProfessor;
                // delete atribuicaoAulas.RGProfessorEventual;
                return atribuicaoAulas;
            } catch (error) {
                    throw new InternalServerErrorException(
                    'Erro ao atribuir aula no banco de dados',
                    );
            }
    }

    async getAtribuicaoAulas(): Promise<AtribuicaoAulas[]> {
      return this.atribuicaoAulasRepository.find();
    }

    
    async getViewAtribuicaoAulas(): Promise<ViewAtribuicaoAulas[]> {
      return this.viewAtribuicaoAulasRepository.find();
    }
    
    async getAtribuicaoAulasById(id: number): Promise<AtribuicaoAulas> {
      return this.atribuicaoAulasRepository.findOne(
        { where:
            { idAtribuicaoAulas: id }
        });
    }

    async deleteAtribuicaoAulasById(id: string): Promise<void> {
        await this.atribuicaoAulasRepository.delete(id);
    }

    async updateAtribuicaoAulasById(id: number, updateDto: AtribuicaoAulasDto): Promise<AtribuicaoAulas> {
         
        try {
            const respostaAtribuicaoAula = await this.atribuicaoAulasRepository.findOne(
            { where:
                { idAtribuicaoAulas: id }
            });

            if(respostaAtribuicaoAula){
            respostaAtribuicaoAula.idAtribuicaoAulas = updateDto.idAtribuicaoAulas;
            respostaAtribuicaoAula.idProfessor = updateDto.idProfessor;
            respostaAtribuicaoAula.idProfessorEventual = updateDto.idProfessorEventual;
            respostaAtribuicaoAula.nomeEscola = updateDto.nomeEscola;
            respostaAtribuicaoAula.UA = updateDto.UA;
            respostaAtribuicaoAula.CIE = updateDto.CIE;
            respostaAtribuicaoAula.ciclo = updateDto.ciclo;
            respostaAtribuicaoAula.Data = updateDto.Data;
            respostaAtribuicaoAula.HoraInicioAula = updateDto.HoraInicioAula;
            respostaAtribuicaoAula.HoraFimAula = updateDto.HoraFimAula;
            respostaAtribuicaoAula.turno = updateDto.turno;
            respostaAtribuicaoAula.turma = updateDto.turma;

            respostaAtribuicaoAula.save();
            return respostaAtribuicaoAula;

            
            }
            else {
                throw new BadRequestException("Usuário não encontrado");
            }
    
        } catch (error) {

            throw new InternalServerErrorException(
            'Erro ao salvar o usuário no banco de dados' + error.message,
            );
        }      
      }
}