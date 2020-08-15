export const transformer = (answers, wordList, dndElements) => {
  if (Object.keys(answers).length === 0) {
    const obj = wordList.reduce(
      (o, key) => Object.assign(o, { [key]: [] }),
      {}
    );
    return obj;
  } else {
    console.log("not empty");
    let obj = {};

    for (const [question, answer] of Object.entries(answers)) {
      const word = dndElements.filter((element) => element.id === question)[0]
        .label;

      const image = dndElements.filter((element) => element.id === answer)[0]
        .image;
      //console.log(image);
      let reimage = { name: image.cloudinaryId, data: image.path };

      //console.log(word);

      obj = { ...obj, [word]: [reimage] };
      //   get path related to answer
    }

    wordList.map((word) => {
      if (!(word in obj)) {
        obj = { ...obj, [word]: [] };
      }
      return null
    });
    return obj;
  }
};
