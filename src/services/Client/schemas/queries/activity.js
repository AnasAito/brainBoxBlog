import gql from "graphql-tag";
import { quiz, image, text, audio } from "./fragments";

export const ACTIVITY_GET_ONE = gql`
  query activity($where: ActivityWhereInput, $withSelect: Boolean) {
    activity(where: $where, withSelect: $withSelect) {
      id
      name
      template
      type
      order
      layout
      blocks {
        id
        name
        type
      }
    }
  }
`;

export const ACTIVITY_GET_MANY = gql`
  query activities(
    $where: ActivityWhereInput
    $withSelect: Boolean
    $orderBy: [ActivityWhereInput]
  ) {
    activities(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      count
      data {
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
  }
`;

export default {
  "activity.get.one": ACTIVITY_GET_ONE,
  "activity.get.many": ACTIVITY_GET_MANY
};
