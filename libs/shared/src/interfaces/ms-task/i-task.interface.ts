import { TaskState } from "./task-state.enum";

export interface ITask {
  id: number;
  userId: number;
  description: string;
  state: TaskState;
}
