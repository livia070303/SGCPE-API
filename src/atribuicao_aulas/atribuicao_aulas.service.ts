import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtribuicaoAulas } from 'src/atribuicao_aulas/atribuicao_aulas.entity';
import { AtribuicaoAulasDto } from 'src/atribuicao_aulas/dto/atribuicao-aulas.dto';

@Injectable()
export class AtribuicaoAulasService{
  constructor(
    @InjectRepository(AtribuicaoAulas)
    private atribuicaoAulasRepository: Repository<AtribuicaoAulas>,
  ) {}
  
    async createAtribuicaoAulas(atribuicaoAulasDto: AtribuicaoAulasDto ): Promise<AtribuicaoAulas> {

            const atribuicaoAulas = this.atribuicaoAulasRepository.create();
            atribuicaoAulas.ID_ls = atribuicaoAulasDto.ID_ls;
            atribuicaoAulas.nomeProfessor = atribuicaoAulasDto.nomeProfessor;
            atribuicaoAulas.RGProfessor = atribuicaoAulasDto.RGProfessor;
            atribuicaoAulas.ID_ls_eventual = atribuicaoAulasDto.ID_ls_eventual;
            atribuicaoAulas.nomeProfessorEventual = atribuicaoAulasDto.nomeProfessorEventual;
            atribuicaoAulas.RGProfessorEventual = atribuicaoAulasDto.RGProfessorEventual;
            atribuicaoAulas.nomeEscola = atribuicaoAulasDto.nomeEscola;
            atribuicaoAulas.turma = atribuicaoAulasDto.turma;
            atribuicaoAulas.serie = atribuicaoAulasDto.serie;
            atribuicaoAulas.turno = atribuicaoAulasDto.turno;
            atribuicaoAulas.UA = atribuicaoAulasDto.UA;
            atribuicaoAulas.CIE = atribuicaoAulasDto.CIE;
            atribuicaoAulas.ciclo = atribuicaoAulasDto.ciclo;
            atribuicaoAulas.dataAula = atribuicaoAulasDto.dataAula;
            atribuicaoAulas.qtdAula = atribuicaoAulasDto.qtdAula;
            atribuicaoAulas.horaAulaMinutos = atribuicaoAulasDto.horaAulaMinutos;
            atribuicaoAulas.horaAulaTotal = atribuicaoAulasDto.horaAulaTotal;

            try {
                await atribuicaoAulas.save();
                delete atribuicaoAulas.RGProfessor;
                delete atribuicaoAulas.RGProfessorEventual;
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
    
    async getAtribuicaoAulasById(id: number): Promise<AtribuicaoAulas> {
      return this.atribuicaoAulasRepository.findOne(
        { where:
            { ID_aa: id }
        });
    }

    async deleteAtribuicaoAulasById(id: string): Promise<void> {
        await this.atribuicaoAulasRepository.delete(id);
    }

    async updateAtribuicaoAulasById(id: number, updateDto: AtribuicaoAulasDto): Promise<AtribuicaoAulas> {
         
        try {
            const respostaAtribuicaoAula = await this.atribuicaoAulasRepository.findOne(
            { where:
                { ID_aa: id }
            });

            if(respostaAtribuicaoAula){
            respostaAtribuicaoAula.ID_ls = updateDto.ID_ls;
            respostaAtribuicaoAula.nomeProfessor = updateDto.nomeProfessor;
            respostaAtribuicaoAula.RGProfessor = updateDto.RGProfessor;
            respostaAtribuicaoAula.ID_ls_eventual = updateDto.ID_ls_eventual;
            respostaAtribuicaoAula.nomeProfessorEventual = updateDto.nomeProfessorEventual;
            respostaAtribuicaoAula.RGProfessorEventual = updateDto.RGProfessorEventual;
            respostaAtribuicaoAula.nomeEscola = updateDto.nomeEscola;
            respostaAtribuicaoAula.turma = updateDto.turma;
            respostaAtribuicaoAula.serie = updateDto.serie;
            respostaAtribuicaoAula.turno = updateDto.turno;
            respostaAtribuicaoAula.UA = updateDto.UA;
            respostaAtribuicaoAula.CIE = updateDto.CIE;
            respostaAtribuicaoAula.ciclo = updateDto.ciclo;
            respostaAtribuicaoAula.dataAula = updateDto.dataAula;
            respostaAtribuicaoAula.qtdAula = updateDto.qtdAula;
            respostaAtribuicaoAula.horaAulaMinutos = updateDto.horaAulaMinutos;
            respostaAtribuicaoAula.horaAulaTotal = updateDto.horaAulaTotal;

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