import course from "./course";
import userGroup from "./userGroup";
import groupPlacementTest from "./groupPlacementTest";
import placementTest from "./placementTest";
import userPlacementTest from "./userPlacementTest";
import client from "./client";
import quiz from "./quiz";
import group from "./group";
import audio from "./audio";
import section from "./section";
import userActivity from "./userActivity";
import activity from "./activity";
import user from "./user";
import image from "./image";
import text from "./text";
import block from "./block";
import question from "./question";
import questionOption from "./questionOption";
import progression from "./progression";
import dnd from "./dnd";
import level from "./level";
import lesson from "./lesson";
import unit from "./unit";
export default {
  ...course,
  ...userGroup,
  ...groupPlacementTest,
  ...placementTest,
  ...userPlacementTest,
  ...client,
  ...section,
  ...quiz,
  ...group,
  ...userActivity,
  ...activity,
  ...block,
  ...question,
  ...questionOption,
  ...image,
  ...audio,
  ...text,
  ...user,
  ...progression,
  ...dnd,
  ...level,
  ...unit,
  ...lesson,
};
