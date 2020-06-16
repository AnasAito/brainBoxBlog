export const quiz = `
quiz {
    id
    title
    type
    questions {
      id
      label
      image{
        id
        path
      }
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
  cloudinaryId
}
`;

export const speech = `
fluencyTool {
  id
  title
  sentencesToScore
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
export const fillblank = `
fillBlank {
  id
  title
  sentence
  answers
}
`;

export const dnd = `
dnd {
  id
  dndElements {
    id
    label

    image {
      path
      cloudinaryId
    }
    side
  }
  answers
}
`;

export const scrambledSentence = `
scrambledSentence {
  id
  correctSentences
}
`;