-- CreateTable
CREATE TABLE "Documents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "publicId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Documents_publicId_key" ON "Documents"("publicId");
