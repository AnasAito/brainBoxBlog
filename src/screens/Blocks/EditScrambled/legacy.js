import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
// import Check from "@material-ui/icons/Check";
import withNotification from "services/Notification";

import { useQuery, useMutation } from "services/Client";

// import styles from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

// const useStyles = makeStyles(styles);

function Edit({ id, notification }) {
  // const [correctSentence, setCorrectSentence] = useState("");
  const [sentences, setSentences] = useState([]);
  const [addSentence, setAddSentence] = useState("");

  // const [shuffledSentence, setShuffledSentence] = useState("");
  const [title, setTitle] = useState("");
  // const [checked, setChecked] = useState(true);

  // const classes = useStyles();

  const change = (event, setStateCallback) => {
    setStateCallback(event.target.value);
  };

  // const handleChange = () => {
  //   setChecked(state => !state);
  // };
  const handleChange = (value, idx) => {
    setSentences((state) =>
      state.map((v, i) => {
        if (i === idx) {
          return value;
        } else {
          return v;
        }
      })
    );
  };

  const handleAddSentence = () => {
    setSentences((state) => [...state, addSentence]);
    setAddSentence("");
  };

  const updateFluency = async (mutate) => {
    const result = await mutate({
      variables: {
        where: { id },
        data: {
          title,
          correctSentences: sentences,
          // shuffledSentence
        },
      },
    });
    if (get(result, "data.updateScrambledSentence")) {
      notification.success("Scrambled sentences successfully saved");
    } else {
      notification.error("Error");
    }
  };

  const { data } = useQuery({
    event: "scrambledSentence.get.one",
    variables: {
      where: { id },
    },
  });

  useEffect(() => {
    const correct = get(data, "scrambledsentence.correctSentences") || [];
    // const shuffled = get(data, "scrambledsentence.shuffledSentence") || "";
    const ttl = get(data, "scrambledsentence.title", "");
    // if (shuffled) {
    //   setChecked(false);
    // }
    setSentences(correct);
    // setShuffledSentence(shuffled);
    setTitle(ttl);
  }, [data]);

  const { mutate } = useMutation({ event: "scrambledSentence.update" });

  return (
    <GridContainer alignItems="center">
      <GridItem xs={12}>
        <CustomInput
          labelText="Title"
          formControlProps={{
            fullWidth: true,
          }}
          id="title"
          inputProps={{
            onChange: (event) => change(event, setTitle),
            type: "text",
            value: title,
          }}
        />
      </GridItem>
      {sentences.map((v, i) => (
        <GridItem key={i} xs={12}>
          <CustomInput
            labelText={`Sentence ${i + 1}`}
            formControlProps={{
              fullWidth: true,
            }}
            id={`sentence${i}`}
            inputProps={{
              onChange: (event) => handleChange(event.target.value, i),
              type: "text",
              value: v,
            }}
          />
        </GridItem>
      ))}
      <GridItem style={{ flex: 1 }}>
        <CustomInput
          labelText="Add Sentence"
          formControlProps={{
            fullWidth: true,
          }}
          id="sentence"
          inputProps={{
            onChange: (event) => setAddSentence(event.target.value),
            type: "text",
            value: addSentence,
          }}
        />
      </GridItem>
      <GridItem>
        <Button type="button" color="info" onClick={handleAddSentence}>
          Add
        </Button>
      </GridItem>
      <GridItem>
        <Button
          type="button"
          color="danger"
          onClick={() => updateFluency(mutate)}
        >
          Save
        </Button>
      </GridItem>
    </GridContainer>
  );
}

Edit.propTypes = {
  id: PropTypes.string.isRequired,
  notification: PropTypes.object.isRequired,
};

export default withNotification(Edit);
