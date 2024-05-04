import { AtribuicaoAulas } from "../atribuicao_aulas.entity";

export class AtribuicaoAulasDto {
    idAtribuicaoAulas: number;
    idProfessor: number;
    idProfessorEventual: number;
    nomeEscola: string;
    UA: string;
    CIE: string;
    ciclo: string;
    Data: Date;
    HoraInicioAula: number;
    HoraFimAula: number;
    turno: string;
    turma: string;
  }

  
export class ReturnListAtribuicaoAulasDto {
  atribuicaoAulas: AtribuicaoAulas[];
  message: string;
}
