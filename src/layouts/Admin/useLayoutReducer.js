import { useReducer, useEffect } from "react";
import useWindowSize from "shared/helpers/useSizeHook";

function reducer(state, action) {
  switch (action.type) {
    case "show": {
      return {
        ...state,
        [action.payload.location]: true,
      };
    }
    case "hide": {
      return {
        ...state,
        [action.payload.location]: false,
      };
    }
    case "mobileDropdown": {
      return {
        ...state,
        mobileNav: !state.mobileNav,
      };
    }
    case "loadRoutes": {
      return {
        ...state,
        routes: action.payload.routes,
      };
    }

    default:
      return state;
  }
}
export default function useReducerFeedback(routes) {
  const [state, dispatch] = useReducer(reducer, {
    mobile: false,
    dropdown: false,
    mobileNav: false,
    mobileMenuButton: false,
    routes: [],
  });
  const { width } = useWindowSize();

  useEffect(() => {
    dispatch({ type: "loadRoutes", payload: { routes } });
  }, [routes]);

  useEffect(() => {
    if (width <= 640) {
      dispatch({ type: "show", payload: { location: "mobileMenuButton" } });
    } else {
      dispatch({ type: "hide", payload: { location: "mobileMenuButton" } });
      dispatch({ type: "hide", payload: { location: "mobileNav" } });
    }
  }, [width]);
  return { state, dispatch };
}
