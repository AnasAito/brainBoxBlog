import React, { useEffect } from "react";
import Autosuggest from "react-autosuggest";
import withStore from "services/Store";
// Imagine you have a list of languages that you'd like to autosuggest.

// Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = (value, data) => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0
//     ? []
//     : data.filter(
//         (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
//       );
// };

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion, getOptionLabel) => {
  return getOptionLabel(suggestion);
};

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion, getOptionLabel) => (
  <div>{getOptionLabel(suggestion)}</div>
);

function MyAutosuggest({
  store,
  data,
  onSuggestionSelected,
  getOptionLabel,
  ...rest
}) {
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  //   const onSuggestionsFetchRequested = ({ value }) => {
  //     setState((state) => ({
  //       ...state,
  //       suggestions: getSuggestions(value, data),
  //     }));
  //   };

  // Autosuggest will call this function every time you need to clear suggestions.
  //   const onSuggestionsClearRequested = () => {
  //     setState((state) => ({ ...state, suggestions: [] }));
  //   };
  // const inputProps = {
  //   placeholder,
  //   value: state.value,
  //   onChange,
  // };

  useEffect(() => {
    store.set("searchLike", rest.value);
  }, [store, rest.value]);

  return (
    <Autosuggest
      suggestions={data}
      {...rest}
      onSuggestionsFetchRequested={(e) => {
        // console.log(e);
      }}
      onSuggestionsClearRequested={() => {
        store.set("searchLike", "");
      }}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) =>
        getSuggestionValue(suggestion, getOptionLabel)
      }
      renderSuggestion={(suggestion) =>
        renderSuggestion(suggestion, getOptionLabel)
      }
      inputProps={{ ...rest }}
      theme={{
        suggestionsContainer: "mt-1 -mx-5",
        suggestionsList: "rounded-md bg-white shadow-xs max-h-40 overflow-auto",
        suggestion:
          "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer focus:outline-none focus:bg-gray-100 focus:text-gray-900",
        input:
          "form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5",
      }}
    />
  );
}

export default withStore(MyAutosuggest);
