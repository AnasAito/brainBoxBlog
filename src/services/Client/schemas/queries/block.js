import gql from "graphql-tag";
import {
  quiz,
  image,
  text,
  audio,
  speech,
  fillblank,
  dnd,
  scrambledSentence
} from "./fragments";

export const BLOCK_GET_MANY = gql`
  query blocks(
    $where: BlockWhereInput
    $withSelect: Boolean
    $orderBy: [BlockWhereInput]
  ) {
    blocks(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      data {
        id
      name
      type
      ${quiz}
      ${image}
      ${text}
      ${audio}
      }
      count
    }
  }
`;

export const BLOCK_GET_ONE = gql`
  query block(
    $where: BlockWhereInput
    $withSelect: Boolean
    $orderBy: [BlockWhereInput]
  ) {
    block(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      id
      name
      type
      ${quiz}
      ${image}
      ${text}
      ${audio}
    }
  }
`;
export default {
  "block.get.one": BLOCK_GET_ONE,
  "block.get.many": BLOCK_GET_MANY
};
