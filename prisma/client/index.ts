import { PrismaClient } from "../prisma/generated";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
