export const HTTP_REQUEST = 'HTTP_REQUEST';

export const httpAction = action => ({
  ...action,
  [HTTP_REQUEST]: HTTP_REQUEST,
});

export const httpRequest = subType => `${subType}_REQUEST`;
export const httpProcessing = subType => `${subType}_PROCESSING`;
export const httpSuccess = subType => `${subType}_SUCCESS`;
export const httpError = subType => `${subType}_ERROR`;
