import gql from "graphql-tag";

export const LESSON_CREATE = gql`
  mutation createLesson($data: LessonWhereInput) {
    createLesson(data: $data) {
      id
    }
  }
`;

export const LESSON_UPDATE = gql`
  mutation updateLesson($where: LessonWhereInput, $data: LessonWhereInput) {
    updateLesson(where: $where, data: $data) {
      id
    }
  }
`;

export const LESSON_DELETE = gql`
  mutation deleteLesson($where: LessonWhereInput) {
    deleteLesson(where: $where) {
      id
    }
  }
`;

export default {
  "lesson.create": LESSON_CREATE,
  "lesson.update": LESSON_UPDATE,
  "lesson.delete": LESSON_DELETE,
};
