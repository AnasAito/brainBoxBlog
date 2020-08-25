import Quiz from "screens/Blocks/Quiz";
import Questions from "screens/Blocks/QuizQuestions";
import Text from "screens/Blocks/Text";
import EditText from "screens/Blocks/EditText";
import Audio from "screens/Blocks/Audio";
import Image from "screens/Blocks/Image";
import Scrambled from "screens/Blocks/Scrambled";
import EditScrambled from "screens/Blocks/EditScrambled";
import FillBlank from "screens/Blocks/FillBlank";
import EditFillBlank from "screens/Blocks/EditFillBlank";
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
  {
    path: "/blocks/scramble",
    exact: true,
    name: "Scrambled sentences",
    component: Scrambled,
    layout: "/admin",
  },
  {
    path: "/blocks/scrambled/:id",
    invisible: true,
    exact: true,
    name: "Edit scrambled",
    component: EditScrambled,
    layout: "/admin",
  },
  {
    path: "/blocks/fillblank",
    exact: true,
    name: "Fill blanks",
    component: FillBlank,
    layout: "/admin",
  },
  {
    path: "/blocks/fillblank/:id",
    invisible: true,
    exact: true,
    name: "Edit fillBlank",
    component: EditFillBlank,
    layout: "/admin",
  },
];

export default indexRoutes;
