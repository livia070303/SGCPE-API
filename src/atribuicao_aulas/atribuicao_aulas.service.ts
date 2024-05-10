import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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
            atribuicaoAulas.UA = atribuicaoAulasDto.UA;
            atribuicaoAulas.CIE = atribuicaoAulasDto.CIE;
            atribuicaoAulas.Data = atribuicaoAulasDto.Data;
            atribuicaoAulas.quantidadeAulas = atribuicaoAulasDto.quantidadeAulas;
            atribuicaoAulas.nt = atribuicaoAulasDto.nt;

            try {
                await atribuicaoAulas.save();
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
            respostaAtribuicaoAula.UA = updateDto.UA;
            respostaAtribuicaoAula.CIE = updateDto.CIE;
            respostaAtribuicaoAula.Data = updateDto.Data;
            respostaAtribuicaoAula.quantidadeAulas = updateDto.quantidadeAulas;
            respostaAtribuicaoAula.nt = updateDto.nt;

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