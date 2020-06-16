import gql from "graphql-tag";

export const AUDIO_CREATE = gql`
  mutation createAudio($data: AudioWhereInput) {
    createAudio(data: $data) {
      id
      title
      path
    }
  }
`;

export const AUDIO_DELETE = gql`
  mutation deleteAudio($where: AudioWhereInput) {
    deleteAudio(where: $where) {
      id
      title
      path
    }
  }
`;

export default {
  "audio.create": AUDIO_CREATE,
  "audio.delete": AUDIO_DELETE
};
