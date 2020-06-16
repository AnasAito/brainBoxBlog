import gql from "graphql-tag";
import { quiz, image, text, audio } from "./fragments";

export const BLOCK_CREATE = gql`
  mutation createBlock($data: BlockWhereInput) {
    createBlock(data: $data) {
      id
      name
      type
    }
  }
`;

export const BLOCK_DELETE = gql`
  mutation deleteBlock($where: BlockWhereInput) {
    deleteBlock(where: $where) {
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
  "block.create": BLOCK_CREATE,
  "block.delete": BLOCK_DELETE
};
