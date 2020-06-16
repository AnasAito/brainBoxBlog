import gql from "graphql-tag";

export const FILE_UPLOAD_ONE = gql`
  mutation singleUpload($file: Upload!, $folder: String) {
    singleUpload(file: $file, folder: $folder)
  }
`;

export default {
  "file.upload.one": FILE_UPLOAD_ONE
};
