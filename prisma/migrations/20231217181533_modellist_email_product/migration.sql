-- CreateTable
CREATE TABLE "ListEmail" (
    "id" SERIAL NOT NULL,
    "formName" TEXT NOT NULL,
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "tel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "description" TEXT,
    "trademark" TEXT DEFAULT 'bkd',
    "model" TEXT,
    "img" TEXT,
    "warehouse" INTEGER NOT NULL DEFAULT 0,
    "price_sell" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "price_base" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "divisa" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "unity" TEXT NOT NULL,
    "serial" TEXT,
    "barcode" TEXT,
    "sku" TEXT,
    "weigth" TEXT,
    "dimension" TEXT,
    "nota" TEXT,
    "tags" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListEmail_email_key" ON "ListEmail"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_serial_key" ON "Product"("serial");

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");
