import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid"


@Entity("users")//referenciando a tabela de usuários
class User {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Exclude()
  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_At: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { User };
