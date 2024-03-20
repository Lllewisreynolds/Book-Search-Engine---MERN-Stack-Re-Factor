// Importing gql template function from Apollo Client Library
import { gql } from '@apollo/client';
// 'me' Query definition within tags - comprehensive details about logged-in user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;