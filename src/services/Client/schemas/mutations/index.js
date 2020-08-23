import login from "./login";
import userActivity from "./userActivity";
import placementTest from "./placementTest";
import userPlacementTest from "./userPlacementTest";
import file from "./file";
import user from "./user";
import userGroup from "./userGroup";
import group from "./group";
import groupPlacementTest from "./groupPlacementTest";
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
import report from "./report";
import course from "./course";
import level from "./level";
import lesson from "./lesson";
import unit from "./unit";
import scrambledSentence from "./scrambledSentence";
export default {
  ...login,
  ...feedback,
  ...placementTest,
  ...userPlacementTest,
  ...user,
  ...userGroup,
  ...group,
  ...groupPlacementTest,
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
  ...report,
  ...level,
  ...course,
  ...lesson,
  ...unit,
  ...scrambledSentence,
};
