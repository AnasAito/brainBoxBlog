// main.js
import get from "lodash/get";
var contentful = require("contentful");
var client = contentful.createClient({
  space: "tx4d768eb9z0",
  accessToken: "eNE5IMmI16IxkNeFXO5rbZtGZJ0a_XNIckWJdBl80-Q",
});
export const getEntries = (setState) => {
  client.getEntries({ content_type: "blogPost" }).then(function (entries) {
    // log the title for all the entries that have it
    console.log(entries);
    let cleanEntries = entries.items.map((item, index) => ({
      id: item.sys.id,
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      date: item.sys.createdAt.split("T")[0],
      category: item.fields.category,
      featured: index == 0,
      imageSrc: "https:" + item.fields.image.fields.file.url,
      text: item.fields.mainText,
    }));
    setState([...cleanEntries]);
  });
};
export const getTitles = (setState) => {
  client.getEntries({ content_type: "blogPost" }).then(function (entries) {
    //console.log(entries);
    let cleanEntries = entries.items.map((item) => item.sys.id);
    console.log(cleanEntries);
    setState([...cleanEntries]);
  });
};

export const getEntry = (id, setState) => {
  client
    .getEntries({ "sys.id": id, content_type: "blogPost" })
    .then(function (entries) {
      let cleanEntries = entries.items.map((item, index) => ({
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        date: item.sys.createdAt.split("T")[0],
        category: item.fields.category,
        featured: index == 0,
        imageSrc: "https:" + item.fields.image.fields.file.url,
        text: item.fields.mainText,
      }));
      setState(get(cleanEntries, "[0]", {}));
    });
};
