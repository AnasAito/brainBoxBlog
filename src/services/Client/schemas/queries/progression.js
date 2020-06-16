import gql from "graphql-tag";

export const PROGRESSION_GET_ONE = gql`
  query progression($where: ProgressionWhereInput, $withSelect: Boolean) {
    progression(where: $where, withSelect: $withSelect) {
      id
      infos
      exam
      status
      user {
        id
      }
      level {
        id
        name
        exam {
          id
        }
      }
      unit {
        id
      }
      lesson {
        id
      }
      section {
        id
      }
      activity {
        id
        name
      }
    }
  }
`;

export const PROGRESSION_GET_MANY = gql`
  query progressions(
    $where: ProgressionWhereInput
    $withSelect: Boolean
    $orderBy: [ProgressionWhereInput]
  ) {
    progressions(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      data {
        id
        course {
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
        level {
          id
          name
          overview
          imgOverview {
            cloudinaryId
          }
        }
        unit {
          id
        }
        lesson {
          id
        }
        section {
          id
        }
        activity {
          id
        }
      }
    }
  }
`;

export default {
  "progression.get.one": PROGRESSION_GET_ONE,
  "progression.get.many": PROGRESSION_GET_MANY
};
// level => units
// unit => lessons
// lesson => higlighted lesson
