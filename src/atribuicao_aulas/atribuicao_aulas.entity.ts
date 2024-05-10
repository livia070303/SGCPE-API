import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('atribuicao_aulas')
  export class AtribuicaoAulas extends BaseEntity {
    @PrimaryGeneratedColumn()
    idAtribuicaoAulas: number;
  
    @Column({ nullable: false, type: 'int' })
    idProfessor: number;
  
    @Column({ nullable: false, type: 'int'})
    idProfessorEventual: number;

    @Column({ nullable: false, type: 'varchar', length: 50 })
    UA: string;

    @Column({ nullable: false, type: 'varchar', length: 50 })
    CIE: string;

    @Column({ nullable: false, type: 'date'})
    Data: Date;
    
    @Column({ nullable: false, type: 'int' })
    quantidadeAulas: number;

    @Column({ nullable: false, type: 'int' })
    nt: number;

  }