import gql from "graphql-tag";

export const LESSON_GET_ONE = gql`
  query lesson($where: LessonWhereInput, $withSelect: Boolean) {
    lesson(where: $where, withSelect: $withSelect) {
      id
      name
      order
    }
  }
`;

export const LESSON_GET_MANY = gql`
  query lessons(
    $where: LessonWhereInput
    $withSelect: Boolean
    $orderBy: [LessonWhereInput]
    $take: Int
    $skip: Int
    $like: LessonWhereInput
  ) {
    lessons(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      like: $like
      skip: $skip
      take: $take
    ) {
      count
      data {
        id
        name
        order
      }
    }
  }
`;

export default {
  "lesson.get.one": LESSON_GET_ONE,
  "lesson.get.many": LESSON_GET_MANY,
};
