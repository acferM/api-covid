import Nurse from "@modules/nurse/infra/typeorm/entities/Nurse";
import Patient from "@modules/Pacients/infra/typeorm/entities/Patient";
import Vacine from "@modules/vacines/infra/typeorm/entities/Vacine";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity('applications')
class Application {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('uuid')
  applicator_id: string

  @Column('uuid')
  vacine_id: string

  @Column('uuid')
  patient_id: string

  @Column()
  date: string

  @Column()
  hour: string

  @Column()
  description: string

  @ManyToOne(() => Nurse, { eager: true })
  @JoinColumn({ name: 'applicator_id'})
  applicator: Nurse

  @ManyToOne(() => Vacine, { eager: true })
  @JoinColumn({ name: 'vacine_id'})
  vacine: Vacine

  @ManyToOne(() => Patient, patient => patient.applications)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Application
