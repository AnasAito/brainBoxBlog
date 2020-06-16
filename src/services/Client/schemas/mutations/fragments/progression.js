export const body = `
id
infos
exam
status
level {
  id
  name
  exam {
    id
  }
}
unit {
  id
  exam {
    id
  }
}
lesson {
  id
}
section {
  id
}
activity {
  id
  name
}
course {
  id
  name
}
user {
  id
  email
}
`;
