import { PrismaClient } from "@prisma/client";

// Used to perform CRUD operations on the database
export const db = new PrismaClient();
