export const quiz = `
quiz {
    id
    title
    type
    questions {
      id
      label
      order
      questionOptions {
        id
        label
        order
        rightAnswer
      }
    }
  }
`;

export const image = `
image {
  id
  name
  path
}
`;

export const text = `
text {
  id
  title
  content
}
`;

export const audio = `
audio {
  id
  title
  path
}
`;
