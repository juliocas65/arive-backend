import { validate } from 'class-validator';
import { errorResponse } from './response';

export async function validatePayload(body: any) {
  await validate(body).then(result => {
    if (result.length > 0) {
      throw errorResponse(result);
    }
  });
};