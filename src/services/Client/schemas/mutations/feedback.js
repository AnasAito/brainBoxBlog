import gql from "graphql-tag";

export const SAVE_FEEDBACK = gql`
  mutation createFeedback($data: FeedbackWhereInput) {
    createFeedback(data: $data) {
      id
    }
  }
`;

export default {
  "feedback.save": SAVE_FEEDBACK,
};
