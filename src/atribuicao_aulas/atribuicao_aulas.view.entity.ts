import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name: 'atribuicao_aulas_view',
    expression: `
                SELECT 
                idAtribuicaoAulas, 
                idProfessor, 
                idProfessorEventual, 
                p1.nomeCompleto AS nomeProfessor,
                p1.RG as RGProfessor, 
                p2.nomeCompleto AS nomeProfessorEventual,
                p2.RG as RGProfessorEventual,
                nomeEscola, 
                UA, 
                CIE, 
                ciclo, 
                Data, 
                HoraInicioAula, 
                HoraFimAula, 
                turno, 
                turma,
                TIMEDIFF(aa.HoraFimAula, aa.HoraInicioAula) AS quantidade_horas_aulas,
                TIME_TO_SEC(TIMEDIFF(aa.HoraFimAula, aa.HoraInicioAula)) / 60 AS quantidade_minutos_aulas,
                (TIME_TO_SEC(TIMEDIFF(aa.HoraFimAula, aa.HoraInicioAula)) / 60) /50 AS quantidade_aulas
                FROM atribuicao_aulas aa
                INNER JOIN cadastroprofessores AS p1 ON aa.idProfessor  = p1.ID_cp
                INNER JOIN cadastroprofessores AS p2 ON aa.idProfessorEventual  = p2.ID_cp
    
    `,
})
export class ViewAtribuicaoAulas {
    @ViewColumn()
    idAtribuicaoAulas: number

    @ViewColumn()
    idProfessor: number

    @ViewColumn()
    idProfessorEventual: number

    @ViewColumn()
    nomeProfessor: string

    @ViewColumn()
    nomeProfessorEventual: string

    @ViewColumn()
    UA: string

    @ViewColumn()
    CIE: string

    @ViewColumn()
    ciclo: string

    @ViewColumn()
    Data: Date

    @ViewColumn()
    HoraInicioAula: number

    @ViewColumn()
    HoraFimAula: number

    @ViewColumn()
    turno: string

    @ViewColumn()
    turma: string

    @ViewColumn()
    RGProfessor: string

    @ViewColumn()
    RGProfessorEventual: string
}