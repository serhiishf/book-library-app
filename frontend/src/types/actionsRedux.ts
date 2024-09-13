export interface ActionType<P = void> {
  type: string;
  payload?: P;
}
