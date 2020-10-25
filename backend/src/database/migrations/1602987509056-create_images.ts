import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602987509056 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "path",
            type: "varchar"
          },
          {
            name: "orphanage_id",
            type: "integer"
          }
        ],
        foreignKeys: [
          {
            name: "ImageOrphanage", // Name of the foreign key - can be any name. Giving a name makes it easier to find the foreign key later on if needed to delete it
            columnNames: ["orphanage_id"], // Name of the column in the current table that will store the data relationship
            referencedTableName: "orphanages", // Relationship table
            referencedColumnNames: ["id"], // Column name from relationship table that will get the data from
            onUpdate: "CASCADE", // In case that the Id of the primary item changes, this columns is also updated, cascade format
            onDelete: "CASCADE" // In case the primary item is deleted, this foreign item gets deleted as well
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
