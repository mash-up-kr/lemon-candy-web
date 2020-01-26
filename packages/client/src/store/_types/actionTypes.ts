export enum HttpStatusCode {
  LOADING = 0,
  OK = 200,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  LOCKED = 423,
  UNKNOWN = 500,
  NOT_FOUND = 404
}

export const ACTION_TYPES = {
  HISTORY: 'history',
  PING: 'ping',
};
