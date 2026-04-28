export enum role {
  MEMBER = "MEMBER",
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export interface IUserCreateInput {
  name: string;
  email: string;
  password: string;
  role: role;
  companyId: number;
}

export interface IUserUpdateInput {
  name?: string;
  email?: string;
  password?: string;
  role?: role;
}
