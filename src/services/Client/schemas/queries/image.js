import gql from "graphql-tag";

export const IMAGE_GET_ONE = gql`
  query image($where: ImageWhereInput, $withSelect: Boolean) {
    image(where: $where, withSelect: $withSelect) {
      id
      name
      path
      cloudinaryId
      createdAt
    }
  }
`;

export const IMAGE_GET_MANY = gql`
  query images(
    $where: ImageWhereInput
    $withSelect: Boolean
    $take: Int
    $skip: Int
    $orderBy: [ImageWhereInput]
  ) {
    images(
      where: $where
      withSelect: $withSelect
      take: $take
      skip: $skip
      orderBy: $orderBy
    ) {
      data {
        id
        name
        path
        cloudinaryId
        createdAt
      }
      count
    }
  }
`;

export default {
  "image.get.one": IMAGE_GET_ONE,
  "image.get.many": IMAGE_GET_MANY,
};
