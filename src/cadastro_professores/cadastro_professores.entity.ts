import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('cadastroprofessores')
  export class CadastroProfessores extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID_cp: number;
  
    @Column({ nullable: false, type: 'varchar', length: 200})
    nomeCompleto: string;
  
    @Column({ nullable: false, type: 'varchar', length: 10 })
    RG: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    categoria: string;
  
    @Column({ nullable: false, type: 'varchar', length: 2})
    DI: string;
  
    @Column({ nullable: false, type: 'varchar', length: 10 })
    codigoDisciplina: string;
  }