import React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = { padding: "10px", border: "1px solid black" };

const App = () => {
  return (
    <ArcherContainer strokeColor="red">
      <div style={rootStyle}>
        <ArcherElement
          id="root"
          relations={[
            {
              targetId: "element4",
              targetAnchor: "top",
              sourceAnchor: "bottom",
              label: (
                <div style={{ marginTop: "-20px" }}> lavel root to test</div>
              ),
            },
          ]}
        >
          <div style={boxStyle}>Root</div>
        </ArcherElement>
      </div>

      <div style={rowStyle}>
        <ArcherElement
          id="element2"
          relations={[
            {
              targetId: "element3",
              targetAnchor: "left",
              sourceAnchor: "right",
              style: { strokeColor: "blue", strokeWidth: 1 },
              label: <div style={{ marginTop: "-20px" }}>Arrow 2</div>,
            },
          ]}
        >
          <div style={boxStyle}>Element 2</div>
        </ArcherElement>

        <ArcherElement id="element3">
          <div style={boxStyle}>Element 3</div>
        </ArcherElement>

        <ArcherElement
          id="element4"
          relations={[
            {
              targetId: "root",
              targetAnchor: "right",
              sourceAnchor: "left",
              label: "Arrow 3",
            },
          ]}
        >
          <div style={boxStyle}>Element 4</div>
        </ArcherElement>
      </div>
    </ArcherContainer>
  );
};

export default App;
