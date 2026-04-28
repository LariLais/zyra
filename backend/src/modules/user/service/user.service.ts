import { Errors } from "../../../shared/errors/errors";
import { IUserCreateInput, IUserUpdateInput } from "../interface/IUser";
import { UserRepository } from "../repository/user.repository";

export class UserService {
  private repository = new UserRepository();
  constructor() {}

  public async getUserById(id: number) {
    if (!id) {
      throw new Errors(400, "Parâmetro ID é obrigatório");
    }
    const response = await this.repository.getUserById(id);
    if (!response) {
      throw new Errors(404, "Nenhum usuário encontrado");
    }
    return response;
  }

  public async getUserByEmail(email: string, companyId: number) {
    if (!email || !companyId) {
      throw new Errors(400, "Obrigatório email e companyId");
    }
    const response = await this.repository.getUserByEmail(email, companyId);
    if (!response) {
      throw new Errors(404, "Nenhum usuário encontrado");
    }
    return response;
  }

  public async getUsersByIds(ids: number[]) {
    if (!ids || ids.length === 0) {
      throw new Errors(400, "Obrigatório o envio de array de números");
    }
    const response = await this.repository.getUsersByIds(ids);
    if (!response) {
      throw new Errors(404, "Nenhum usuário encontrado");
    }
    return response;
  }

  public async getAllUsers(companyId: number) {
    if (!companyId) {
      throw new Errors(400, "Obrigatório uso de companyId");
    }
    const response = await this.repository.getAllUsers(companyId);
    if (response.length === 0) {
      throw new Errors(404, "Nenhum usuário encontrado");
    }
    return response;
  }

  public async getUsersCount(companyId: number) {
    if (!companyId) {
      throw new Errors(400, "Obrigatório uso de companyId");
    }
    const response = await this.repository.getUsersCount(companyId);
    if (response === 0) {
      return 0;
    }
    return response;
  }

  public async createUser(data: IUserCreateInput) {
    if (!data) {
      throw new Errors(400, "Corpo de requisição obrigatório");
    }
    const response = await this.repository.createUser(data);
    if (!response) {
      throw new Errors(500, "Erro ao criar usuário");
    }
    return response;
  }

  public async updateUser(id: number, data: IUserUpdateInput) {
    if (!id || !data) {
      throw new Errors(400, "Parâmetro obrigatório e conteúdo no body");
    }
    const response = await this.repository.updateUser(id, data);
    if (!response) {
      throw new Errors(500, "Erro ao atualizar usuário");
    }
    return response;
  }

  public async deleteUser(id: number) {
    if (!id) {
      throw new Errors(400, "Parâmetro ID é obrigatório");
    }
    const response = await this.repository.deleteUser(id);
    if (!response) {
      throw new Errors(500, "Erro ao deletar usuário");
    }
    return response;
  }
}
