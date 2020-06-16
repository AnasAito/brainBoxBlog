import gql from "graphql-tag";
import { quiz, image, text, audio } from "./fragments";

export const ACTIVITY_CREATE = gql`
  mutation createActivity($data: ActivityWhereInput) {
    createActivity(data: $data) {
      id
        name
        template
        type
        order
        blocks {
       name
       type
       ${quiz}
       ${image}
       ${text}
       ${audio}
      }
    }
  }
`;

export const ACTIVITY_UPDATE = gql`
  mutation updateActivity($data: ActivityWhereInput,$where: ActivityWhereInput) {
    updateActivity(data: $data, where:$where) {
      id
        name
        template
        type
        order
        blocks {
       name
       type
       ${quiz}
       ${image}
       ${text}
       ${audio}
      }
    }
  }
`;

export const ACTIVITY_DELETE = gql`
  mutation deleteActivity($where: ActivityWhereInput) {
    deleteActivity(where: $where) {
      id
      name
      template
      type
      order
      blocks {
       name
       type
       ${quiz}
       ${image}
       ${text}
       ${audio}
      }
    }
  }
`;

export default {
  "activity.create": ACTIVITY_CREATE,
  "activity.update": ACTIVITY_UPDATE,
  "activity.delete": ACTIVITY_DELETE,
};
