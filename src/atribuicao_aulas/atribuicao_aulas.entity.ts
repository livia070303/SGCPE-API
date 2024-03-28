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
  
    @Column({ nullable: true, type: 'int' })
    ID_ls: number;
  
    @Column({ nullable: true, type: 'varchar', length: 255 })
    nomeProfessor: string;
  
    @Column({ nullable: true, type: 'varchar', length: 10 })
    RGProfessor: string;
  
    @Column({ nullable: true})
    ID_ls_eventual: number;
  
    @Column({ nullable: true, type: 'varchar', length: 255 })
    nomeProfessorEventual: string;
  
    @Column({ nullable: true, type: 'varchar', length: 10 })
    RGProfessorEventual: string;
  
    @Column({ nullable: true, type: 'varchar', length: 255 })
    nomeEscola: string;
  
    @Column({ nullable: true, type: 'varchar', length: 255 })
    turma: string;
  
    @Column({ nullable: true, type: 'varchar', length: 255 })
    serie: string;
  
    @Column({ nullable: true, type: 'varchar', length: 255 })
    turno: string;

    @Column({ nullable: true, type: 'varchar', length: 255 })
    UA: string;

    @Column({ nullable: true, type: 'varchar', length: 255 })
    CIE: string;

    @Column({ nullable: true, type: 'varchar', length: 255 })
    ciclo: string;

    @Column({ nullable: true, type: 'date'})
    dataAula: Date;

    @Column({ nullable: true, type: 'int' })
    qtdAula: number;
    
    @Column({ nullable: true, type: 'int' })
    horaAulaMinutos: number;

    @Column({ nullable: true, type: 'time' })
    horaAulaTotal: Date;
  }