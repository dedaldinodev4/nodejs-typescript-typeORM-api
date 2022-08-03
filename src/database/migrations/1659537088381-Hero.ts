import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class Hero1659537088381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "_heroes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "age",
                        type: "integer"
                    },
                    {
                        name: "power",
                        type: "varchar"
                    },
                    {
                        name: "team",
                        type: "varchar"
                    },
                    {
                        name: "userId",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "heroes_users_fkey",
                        columnNames: ["userId"],
                        referencedTableName: "_users",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("_heroes");
    }

}
