export interface Todo {
  readonly id: number;
  readonly text: string;
  readonly completed: boolean;
}

export interface LandingState {
  readonly todos: Todo[];
}
