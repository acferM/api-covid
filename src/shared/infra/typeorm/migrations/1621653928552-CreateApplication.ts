import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateApplication1621653928552 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'applications',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'applicator_id',
            type: 'uuid',
          },
          {
            name: 'vacine_id',
            type: 'uuid',
          },
          {
            name: 'date',
            type: 'varchar'
          },
          {
            name: 'hour',
            type: 'varchar'
          },
          {
            name: 'description',
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
          },
        ],
        foreignKeys: [
          {
            name: 'Applicator',
            columnNames: ['applicator_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'nurses',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          },
          {
            name: 'ApplicationVacine',
            columnNames: ['vacine_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'vacines',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('applications')
  }

}
