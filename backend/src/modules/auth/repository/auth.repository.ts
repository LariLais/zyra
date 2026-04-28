import { prisma } from "../../../config/database";

export class AuthRepository {
  private prisma = prisma;

  constructor(email?: string) {
    email = email;
  }

  public async findUserByEmail(email: string) {
    return this.prisma.
  }
}
