import { User } from "./User";

export interface UserState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

export interface AppState {
  user: UserState;
}