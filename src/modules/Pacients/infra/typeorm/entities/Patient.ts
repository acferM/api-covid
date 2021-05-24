import Application from "@modules/application/infra/typeorm/entities/Application";
import Group from "@modules/group/infra/typeorm/entities/Group";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity('patients')
class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('uuid')
  group_id: string

  @Column()
  name: string

  @Column()
  birthday: string

  @Column()
  individual_characteristics: string

  @ManyToOne(() => Group, { eager: true })
  @JoinColumn({ name: 'group_id' })
  group: Group

  @OneToMany(() => Application, application => application.patient, { eager: true })
  applications: Application[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Patient
