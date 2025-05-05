/*
  Warnings:

  - The primary key for the `CarUnit` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_carUnitId_fkey";

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "carUnitId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "CarUnit" DROP CONSTRAINT "CarUnit_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CarUnit_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CarUnit_id_seq";

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carUnitId_fkey" FOREIGN KEY ("carUnitId") REFERENCES "CarUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
