import { AtribuicaoAulas } from "../atribuicao_aulas.entity";

export class AtribuicaoAulasDto {
    idAtribuicaoAulas: number;
    idProfessor: number;
    idProfessorEventual: number;
    UA: string;
    CIE: string;
    Data: Date;
    nt: number;
    quantidadeAulas: number;
  }

  
export class ReturnListAtribuicaoAulasDto {
  atribuicaoAulas: AtribuicaoAulas[];
  message: string;
}
