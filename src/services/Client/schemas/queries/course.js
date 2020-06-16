import gql from "graphql-tag";

export const COURSE_GET_ONE = gql`
  query course($where: CourseWhereInput, $withSelect: Boolean) {
    course(where: $where, withSelect: $withSelect) {
      id
      name
      overview
      imgSidebar {
        cloudinaryId
      }
      imgOverview {
        cloudinaryId
      }
    }
  }
`;

export const COURSE_GET_MANY = gql`
  query courses(
    $where: CourseWhereInput
    $withSelect: Boolean
    $orderBy: [CourseWhereInput]
  ) {
    courses(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      count
      data {
        id
        name
        overview
        imgSidebar {
          cloudinaryId
        }
        imgOverview {
          cloudinaryId
        }
      }
    }
  }
`;

export default {
  "course.get.one": COURSE_GET_ONE,
  "course.get.many": COURSE_GET_MANY
};
