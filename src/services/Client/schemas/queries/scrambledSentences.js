import gql from "graphql-tag";

export const SCRAMBLED_SENTENCE_GET_MANY = gql`
  query scrambledsentences(
    $where: ScrambledSentenceWhereInput
    $withSelect: Boolean
    $orderBy: [ScrambledSentenceWhereInput]
  ) {
    scrambledsentences(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
    ) {
      data {
        id
        title
        correctSentences
        shuffledSentences
      }
      count
    }
  }
`;

export const SCRAMBLED_SENTENCE_GET_ONE = gql`
  query scrambledsentence(
    $where: ScrambledSentenceWhereInput
    $withSelect: Boolean
    $orderBy: [ScrambledSentenceWhereInput]
  ) {
    scrambledsentence(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
    ) {
      id
      title
      correctSentences
      shuffledSentences
    }
  }
`;
export default {
  "scrambled.sentence.get.one": SCRAMBLED_SENTENCE_GET_ONE,
  "scrambled.sentence.get.many": SCRAMBLED_SENTENCE_GET_MANY,
};
