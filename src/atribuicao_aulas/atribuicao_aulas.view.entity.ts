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
                p1.DI as DIProfessor,
                p2.DI as DIProfessorEventual,
                p1.codigoDisciplina as codigoDisciplinaProfessor ,
                p2.codigoDisciplina as codigoDisciplinaProfessorEventual,
                UA, 
                CIE,
                Data, 
                quantidadeAulas,
                nt
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
    quantidadeAulas: number

    @ViewColumn()
    nt: number

    @ViewColumn()
    RGProfessor: string

    @ViewColumn()
    RGProfessorEventual: string

    @ViewColumn()
    DIProfessor: string

    @ViewColumn()
    DIProfessorEventual: string

    @ViewColumn()
    codigoDisciplinaProfessor: number

    @ViewColumn()
    codigoDisciplinaProfessorEventual: number

    @ViewColumn()
    Data: Date
}