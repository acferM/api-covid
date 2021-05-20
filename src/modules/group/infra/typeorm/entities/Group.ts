import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('groups')
class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  denomination: string

  @Column('int')
  min_age: number

  @Column('int')
  max_age: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Group
