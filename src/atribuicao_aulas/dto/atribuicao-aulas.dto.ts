import { AtribuicaoAulas } from "../atribuicao_aulas.entity";

export class AtribuicaoAulasDto {
    ID_ls: number;
    nomeProfessor: string;
    RGProfessor: string;
    ID_ls_eventual: number;
    nomeProfessorEventual: string;
    RGProfessorEventual: string;
    nomeEscola: string;
    turma: string;
    serie: string;
    turno: string;
    UA: string;
    CIE: string;
    ciclo: string;
    dataAula: Date;
    qtdAula: number;
    horaAulaMinutos: number;
    horaAulaTotal: Date;
  }

  
export class ReturnListAtribuicaoAulasDto {
  atribuicaoAulas: AtribuicaoAulas[];
  message: string;
}
