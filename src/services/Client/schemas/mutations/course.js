import gql from "graphql-tag";

export const COURSE_CREATE = gql`
  mutation createCourse($data: CourseWhereInput) {
    createCourse(data: $data) {
      id
    }
  }
`;

export const COURSE_UPDATE = gql`
  mutation updateCourse($where: CourseWhereInput, $data: CourseWhereInput) {
    updateCourse(where: $where, data: $data) {
      id
    }
  }
`;

export const COURSE_DELETE = gql`
  mutation deleteCourse($where: CourseWhereInput) {
    deleteCourse(where: $where) {
      id
    }
  }
`;

export default {
  "course.create": COURSE_CREATE,
  "course.update": COURSE_UPDATE,
  "course.delete": COURSE_DELETE,
};
