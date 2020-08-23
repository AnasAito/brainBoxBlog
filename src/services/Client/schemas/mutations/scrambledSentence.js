import gql from "graphql-tag";

export const SCRAMBLED_SENTENCE_CREATE = gql`
  mutation createScrambledSentence($data: ScrambledSentenceWhereInput) {
    createScrambledSentence(data: $data) {
      id
      title
      correctSentences
      shuffledSentences
    }
  }
`;

export const SCRAMBLED_SENTENCE_DELETE = gql`
  mutation deleteScrambledSentence($where: ScrambledSentenceWhereInput) {
    deleteScrambledSentence(where: $where) {
      id
      title
      correctSentences
      shuffledSentences
    }
  }
`;

export const SCRAMBLED_SENTENCE_UPDATE = gql`
  mutation updateScrambledSentence(
    $where: ScrambledSentenceWhereInput
    $data: ScrambledSentenceWhereInput
  ) {
    updateScrambledSentence(where: $where, data: $data) {
      id
      title
      correctSentences
      shuffledSentences
    }
  }
`;

export default {
  "scrambled.sentence.create": SCRAMBLED_SENTENCE_CREATE,
  "scrambled.sentence.delete": SCRAMBLED_SENTENCE_DELETE,
  "scrambled.sentence.update": SCRAMBLED_SENTENCE_UPDATE,
};
