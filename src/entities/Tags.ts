import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { Expose } from "class-transformer"

import { v4 as uuid } from "uuid";

@Entity("tags")
class Tag {
  save(tag: Tag) {
    throw new Error("Method not implemented.");
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: "nameCustom" })
  nameCustom(): string {
    return `#${this.name}`;
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Tag };