import { Task } from "./Task";

export interface User {
  fullName: string;
  email: string;
  password: string;
  isVerifies: boolean;
  tasks: [Task];
}