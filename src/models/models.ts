//Factorial calculator interfaces
export interface State {
  input: number;
  result: number;
  history: number[];
}
export interface UpdateInput {
  type: "UPDATE_INPUT";
  payload: number;
}

export interface UpdateResult {
  type: "UPDATE_RESULT";
  payload: number;
}

export interface UpdateHistory {
  type: "UPDATE_HISTORY";
  payload: number[];
}
