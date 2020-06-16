import gql from "graphql-tag";

export const IMAGE_CREATE = gql`
  mutation createImage($file: Upload!, $data: ImageWhereInput) {
    createImage(file: $file, data: $data){
      id
      cloudinaryId
    }
  }
`;

export default {
  "image.create": IMAGE_CREATE
};
