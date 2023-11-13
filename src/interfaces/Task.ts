export interface Task {
  _id: string,
  title: string;
  description: string;
  priority: number;
  dueDate: Date;
  state: string;
}