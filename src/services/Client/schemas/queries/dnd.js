import gql from "graphql-tag";

export const DND_GET_ONE = gql`
  query dnd($where: DndWhereInput, $withSelect: Boolean) {
    dnd(where: $where, withSelect: $withSelect) {
      id
      dndElements {
        id
        label

        image {
          path

          cloudinaryId
        }
        side
      }
      answers
    }
  }
`;
export default {
  "dnd.get.one": DND_GET_ONE
};
