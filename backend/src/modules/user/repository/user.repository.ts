import { prisma } from "../../../config/database";
import { IUserCreateInput, IUserUpdateInput } from "../interface/IUser";

export class UserRepository {
  private prisma = prisma;

  constructor() {}

  public async getUserById(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  public async getUserByEmail(email: string, companyId: number) {
    return this.prisma.user.findFirst({
      where: {
        email,
        companyId,
      },
    });
  }

  public async getUsersByIds(ids: number[]) {
    return this.prisma.user.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  public async getAllUsers(companyId: number) {
    return this.prisma.user.findMany({
      where: {
        companyId,
      },
    });
  }

  public async getUsersCount(companyId: number) {
    return this.prisma.user.count({
      where: {
        companyId,
      },
    });
  }

  public async createUser(data: IUserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  public async updateUser(id: number, data: IUserUpdateInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  public async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
