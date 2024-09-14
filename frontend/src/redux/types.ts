import store from './store';

export type RootState = ReturnType<typeof store.getState>;

export interface ActionPayload<P = void> {
  type: string;
  payload?: P;
}
