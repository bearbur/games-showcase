export const HTTP_REQUEST = 'HTTP_REQUEST';

export const httpAction = action => ({
  ...action,
  [HTTP_REQUEST]: HTTP_REQUEST,
});
