import gql from "graphql-tag";

export const IMAGE_CREATE = gql`
  mutation createImage($file: Upload!, $data: ImageWhereInput) {
    createImage(file: $file, data: $data) {
      id
      cloudinaryId
    }
  }
`;

export const IMAGE_DELETE = gql`
  mutation deleteImage($where: ImageWhereInput) {
    deleteImage(where: $where) {
      id
      cloudinaryId
    }
  }
`;

export default {
  "image.create": IMAGE_CREATE,
  "image.delete": IMAGE_DELETE,
};
