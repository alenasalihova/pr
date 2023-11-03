export interface User {
  id: number;
  username: string;
  password: string;
}

export interface CreateUserInput {
  username: string;
  password: string;
}