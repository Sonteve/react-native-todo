export interface Todo {
  id: number;
  todo: string;
  checked: boolean;
  isEdit: boolean;
}

export interface ModifyTodo {
  id: number;
  todo: string;
}
