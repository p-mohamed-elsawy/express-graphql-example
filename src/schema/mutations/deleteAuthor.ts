import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as authorType } from '../types/author';
import deleteAuthorInput from '../types/inputs/deleteAuthor';

const deleteAuthor = {
  type: authorType,
  args: {
    input: {
      type: GraphQLNonNull(deleteAuthorInput),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {
    return context.repositories.author.delete(input);
  },
};

export default deleteAuthor;
