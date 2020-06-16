import gql from "graphql-tag";

export const AUDIO_GET_MANY = gql`
  query audios(
    $where: AudioWhereInput
    $withSelect: Boolean
    $orderBy: [AudioWhereInput]
    $take: Int
    $skip: Int
  ) {
    audios(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      take: $take
      skip: $skip
    ) {
      count
      data {
        id
        title
        path
      }
    }
  }
`;

export default {
  "audio.get.many": AUDIO_GET_MANY,
};
