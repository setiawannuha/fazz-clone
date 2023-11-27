export interface IState {
  data: {
    email: string;
    token: string;
  };
}

export interface IPayload {
  email: string;
  password: string;
}
