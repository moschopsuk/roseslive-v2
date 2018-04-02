import { GraphQLError } from 'graphql';

class NotFoundError extends GraphQLError {
  constructor(model, id) {
    super(`The ${model}:${id} was not found`);
  }
}

export default NotFoundError;
