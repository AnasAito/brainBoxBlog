import login from "./login";
import userActivity from "./userActivity";
import placementTest from "./placementTest";
import userPlacementTest from "./userPlacementTest";
import file from "./file";
import user from "./user";
import feedback from "./feedback";
import section from "./section";
import activity from "./activity";
import quiz from "./quiz";
import question from "./question";
import questionOption from "./questionOption";
import text from "./text";
import audio from "./audio";
import image from "./image";
import block from "./block";
export default {
  ...login,
  ...feedback,
  ...placementTest,
  ...userPlacementTest,
  ...user,
  ...userActivity,
  ...file,
  ...section,
  ...activity,
  ...quiz,
  ...question,
  ...questionOption,
  ...text,
  ...audio,
  ...image,
  ...block,
};
