import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreatePatients1621797247214 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'patients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'group_id',
            type: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'birthday',
            type: 'varchar'
          },
          {
            name: 'individual_characteristics',
            type: 'text'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'PatientGroup',
            columnNames: ['group_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'groups',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patients')
  }
}
