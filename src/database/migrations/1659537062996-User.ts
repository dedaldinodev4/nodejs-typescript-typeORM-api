import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1659537062996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: '_users',
                    columns: [
                            {
                                name: "id",
                                type: "uuid",
                                isPrimary: true
                            },
                            {
                                name: "email",
                                type: "varchar",
                                isUnique: true
                            },
                            {
                                name: "password",
                                type: "varchar"
                            },
                            {
                                name: "name",
                                type: "varchar"
                            },
                            {
                                name: "status",
                                type: "boolean",
                                default: true
                            },
                            {
                                name: "created_at",
                                type: "timestamp",
                                default: "now()"
                            }

                    ]
                }

            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("_users");
    }

}
