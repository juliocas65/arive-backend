enum ResponseTypes {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export function successResponse(data: any) {
  return {
    status: ResponseTypes.SUCCESS,
    data: data
  };
};

export function errorResponse(message: any) {
  return {
    status: ResponseTypes.ERROR,
    message: message
  };
};