import Quiz from "screens/Blocks/Quiz";
import Questions from "screens/Blocks/QuizQuestions";
import Text from "screens/Blocks/Text";
import EditText from "screens/Blocks/EditText";
import Audio from "screens/Blocks/Audio";
import Image from "screens/Blocks/Image";

var indexRoutes = [
  {
    path: "/blocks/quiz",
    exact: true,
    name: "Quiz",
    component: Quiz,
    layout: "/admin",
  },
  {
    path: "/blocks/quiz/:id",
    name: "Questions",
    invisible: true,
    component: Questions,
    layout: "/admin",
  },
  {
    path: "/blocks/text",
    exact: true,
    name: "Text",
    component: Text,
    layout: "/admin",
  },
  {
    path: "/blocks/text/:id",
    invisible: true,
    exact: true,
    name: "Edit Test",
    component: EditText,
    layout: "/admin",
  },
  {
    path: "/blocks/audio",
    exact: true,
    name: "Audio",
    component: Audio,
    layout: "/admin",
  },
  {
    path: "/blocks/image",
    exact: true,
    name: "Image",
    component: Image,
    layout: "/admin",
  },
];

export default indexRoutes;
