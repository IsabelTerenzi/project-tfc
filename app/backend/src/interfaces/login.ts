export default interface Login {
  email: string;
  password: string;
}

export interface User extends Login {
  id?: number;
  username: string;
  role: string;
}
