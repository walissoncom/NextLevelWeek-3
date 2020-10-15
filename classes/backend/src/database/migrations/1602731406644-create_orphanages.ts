import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { query } from "express";

export class createOrphanages1602731406644 implements MigrationInterface {
  // The Up method will make the alterations in the database
  // Create tabl, create feld, delete field
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true, // Means that the number will never be negative (-1, -50, etc)
            isPrimary: true, // Primary key
            isGenerated: true, // The value for this column will be generated automatically
            generationStrategy: "increment" // Auto increment
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2
          },
          {
            name: "about",
            type: "text"
          },
          {
            name: "instructions",
            type: "text"
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false
          }
        ]
      })
    );
  }

  // The Down method is used to UNDO an alteration made by the Up method
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orphanages");
  }
}
