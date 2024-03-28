import { CadastroProfessores } from '../cadastro_professores.entity';

export class ReturnCadastroProfessoresDto {
    cadastro_professores: CadastroProfessores;
    message: string;
}

export class ReturnListCadastroProfessoresDto {
    cadastro_professores: CadastroProfessores[];
    message: string;
}