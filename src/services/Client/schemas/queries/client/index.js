import gql from "graphql-tag";

export const DISPLAY_ALERT = gql`
  {
    displayAlert @client
    alertMessage @client
    variant @client
  }
`;

export const CURRENT_LEVEL = gql`
  {
    currentLevel @client
  }
`;

export const CURRENT_PLACEMENT_TEST = gql`
  {
    currentPlacementTest @client
  }
`;

export const CURRENT_UNIT = gql`
  {
    currentUnit @client
  }
`;

export const CURRENT_LESSON = gql`
  {
    currentLesson @client
  }
`;

export const CURRENT_USER_GROUP = gql`
  {
    currentUserGroup @client
  }
`;

export const CURRENT_ACTIVITY = gql`
  {
    currentActivity @client
  }
`;

export const CURRENT_SECTION = gql`
  {
    currentSection @client
  }
`;

export const CURRENT_ANSWERS = gql`
  {
    currentAnswers @client {
      id
      answers {
        id
      }
    }
  }
`;

export const VISITED_ACTIVITIES = gql`
  {
    visitedActivities @client {
      id
    }
  }
`;

export const NOTIFICATION = gql`
  {
    notification @client {
      type
      message
      opened
    }
  }
`;

export const ALERT = gql`
  {
    alert @client {
      type
      message
      opened
    }
  }
`;

export const LOADING = gql`
  {
    loading @client {
      opened
    }
  }
`;

export const UPLOADING = gql`
  {
    uploading @client
  }
`;

export const USER_ENABLED = gql`
  {
    userEnabled @client
  }
`;

export const SCREEWRAPPER_TITLE = gql`
  {
    screenWrapperTitle @client
  }
`;
export const COURSE_ID = gql`
  {
    courseId @client
  }
`;

export const UNIT_ID = gql`
  {
    unitId @client
  }
`;

export const CURRENT_ACTIVITY_NAME = gql`
  {
    currentActivityName @client
  }
`;

export const BLOCKS_LOADING = gql`
  {
    blocksLoading @client
  }
`;

export const INITIAL_TIME = gql`
  {
    initialTime @client
  }
`;
export const TIMEOUT = gql`
  {
    timeout @client
  }
`;

export const PAGE_SIZE = gql`
  {
    pageSize @client
  }
`;

export const PAGE_INDEX = gql`
  {
    pageIndex @client
  }
`;

export const SEARCH_LIKE = gql`
  {
    searchLike @client
  }
`;

export const PAGINATED_VIEWS = gql`
  {
    paginatedViews @client {
      view
      page
    }
  }
`;

export default {
  paginatedViews: PAGINATED_VIEWS,
  searchLike: SEARCH_LIKE,
  pageSize: PAGE_SIZE,
  pageIndex: PAGE_INDEX,
  timeout: TIMEOUT,
  initialTime: INITIAL_TIME,
  currentPlacementTest:CURRENT_PLACEMENT_TEST,
  currentLevel: CURRENT_LEVEL,
  currentUnit: CURRENT_UNIT,
  currentActivityName: CURRENT_ACTIVITY_NAME,
  currentLesson: CURRENT_LESSON,
  currentSection: CURRENT_SECTION,
  currentActivity: CURRENT_ACTIVITY,
  currentAnswers: CURRENT_ANSWERS,
  currentUserGroup: CURRENT_USER_GROUP,
  visitedActivities: VISITED_ACTIVITIES,
  notification: NOTIFICATION,
  screenWrapperTitle: SCREEWRAPPER_TITLE,
  uploading: UPLOADING,
  alert: ALERT,
  userEnabled: USER_ENABLED,
  loading: LOADING,
  blocksLoading:BLOCKS_LOADING,
  courseId: COURSE_ID,
  unitId: UNIT_ID
};
