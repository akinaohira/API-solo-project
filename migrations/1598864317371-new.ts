import {MigrationInterface, QueryRunner} from "typeorm";

export class new1598864317371 implements MigrationInterface {
    name = 'new1598864317371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inu" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_0ea62facfa3d00efd2770adaa15" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "inu"`);
    }

}
