import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('atribuicaoaulas')
  export class AtribuicaoAulas extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID_aa: number;
  
    @Column({ nullable: false, type: 'int' })
    ID_ls: number;
  
    @Column({ nullable: false, type: 'varchar', length: 255 })
    nomeProfessor: string;
  
    @Column({ nullable: false, type: 'varchar', length: 10 })
    RGProfessor: string;
  
    @Column({ nullable: false})
    ID_ls_eventual: number;
  
    @Column({ nullable: false, type: 'varchar', length: 255 })
    nomeProfessorEventual: string;
  
    @Column({ nullable: false, type: 'varchar', length: 10 })
    RGProfessorEventual: string;
  
    @Column({ nullable: false, type: 'varchar', length: 255 })
    nomeEscola: string;
  
    @Column({ nullable: false, type: 'varchar', length: 255 })
    turma: string;
  
    @Column({ nullable: false, type: 'varchar', length: 255 })
    serie: string;
  
    @Column({ nullable: false, type: 'varchar', length: 255 })
    turno: string;

    @Column({ nullable: false, type: 'varchar', length: 255 })
    UA: string;

    @Column({ nullable: false, type: 'varchar', length: 255 })
    CIE: string;

    @Column({ nullable: false, type: 'varchar', length: 255 })
    ciclo: string;

    @Column({ nullable: false, type: 'date'})
    dataAula: Date;

    @Column({ nullable: false, type: 'int' })
    qtdAula: number;
    
    @Column({ nullable: false, type: 'int' })
    horaAulaMinutos: number;

    @Column({ nullable: false, type: 'time' })
    horaAulaTotal: Date;
  }