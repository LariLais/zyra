import { prisma } from "../../../config/database";
import { AuthRepository } from "../repository/auth.repository";

export class AuthService {
  private repository = new AuthRepository();
  private prisma = prisma;

  constructor() {}

  public async login() {}
}
