import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroProfessores } from './cadastro_professores.entity';
import { CadastroProfessoresDto, updateCadastroProfessorDto } from './dto/cadastro-professores.dto';

@Injectable()
export class CadastroProfessoresService {
  constructor(
    @InjectRepository(CadastroProfessores)
    private cadastroProfessorRepository: Repository<CadastroProfessores>,
  ) {}
  
    async createCadastroProfessores(createDto: CadastroProfessoresDto ): Promise<CadastroProfessores> {

            const cadastroProf = this.cadastroProfessorRepository.create();
            cadastroProf.ID_ls = createDto.ID_ls;
            cadastroProf.RG = createDto.RG;
            cadastroProf.categoria = createDto.categoria;
            cadastroProf.codigoDisciplina = createDto.codigoDisciplina;
            cadastroProf.nomeCompleto = createDto.nomeCompleto;
            cadastroProf.DI = createDto.DI;

            try {
                await cadastroProf.save();
                delete cadastroProf.RG;
                return cadastroProf;
            } catch (error) {
                    throw new InternalServerErrorException(
                    'Erro ao cadastrar o professor no banco de dados',
                    );
            }
    }


    async getCadastroProfessor(): Promise<CadastroProfessores[]> {
      return this.cadastroProfessorRepository.find();
    }
    
    async getCadastroProfessorById(id: number): Promise<CadastroProfessores> {
      return this.cadastroProfessorRepository.findOne(
        { where:
            { ID_cp: id }
        });
    }

    async deleteCadastroProfessoresById(id: string): Promise<void> {
        await this.cadastroProfessorRepository.delete(id);
    }

    async updateCadastroProfessorById(id: number, updateCadastroProfessorDto: updateCadastroProfessorDto): Promise<CadastroProfessores> {
         
        try {
            const prof = await this.cadastroProfessorRepository.findOne(
            { where:
                { ID_cp: id }
            });

            if(prof){
              prof.nomeCompleto = updateCadastroProfessorDto.nomeCompleto;
              prof.RG = updateCadastroProfessorDto.RG;
              prof.categoria = updateCadastroProfessorDto.categoria;
              prof.DI = updateCadastroProfessorDto.DI;
              prof.codigoDisciplina = updateCadastroProfessorDto.codigoDisciplina;
              prof.save();
                return prof;
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