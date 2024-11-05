-- CreateTable
CREATE TABLE "BlockList" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "reason" TEXT,

    CONSTRAINT "BlockList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlockList_ip_key" ON "BlockList"("ip");
