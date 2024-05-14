import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('login_senha')
  export class LoginSenha extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID_ls: number;

    @Column({ nullable: false, type: 'varchar', length: 10 })
    RG: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    cargoEscolar: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200})
    nomeEscola: string;

    @Column({ nullable: false, type: 'varchar', length: 200})
    nomeCompleto: string;

    @Column({ nullable: false, type: 'varchar', length: 100})
    email: string;

    @Column({ nullable: false, type: 'varchar', length: 10 })
    senha: string;

    @Column({ nullable: false, type: 'varchar', length: 14})
    telefone: string;
  }