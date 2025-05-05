-- CreateTable
CREATE TABLE "CarUnit" (
    "id" SERIAL NOT NULL,
    "make" TEXT NOT NULL,
    "unitModel" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "engine" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "carUnitId" INTEGER NOT NULL,
    "no_police" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Available',
    "vin" TEXT,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CarUnit_make_unitModel_year_idx" ON "CarUnit"("make", "unitModel", "year");

-- CreateIndex
CREATE UNIQUE INDEX "Car_no_police_key" ON "Car"("no_police");

-- CreateIndex
CREATE UNIQUE INDEX "Car_vin_key" ON "Car"("vin");

-- CreateIndex
CREATE INDEX "Car_status_idx" ON "Car"("status");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carUnitId_fkey" FOREIGN KEY ("carUnitId") REFERENCES "CarUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
