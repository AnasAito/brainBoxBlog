import React from "react";
import Popover from "./popover";
export default function Highlighter({ chunks }) {
  return (
    <div className="  mr-2">
      {chunks.map(chunk => (
        <>
          {chunk.isHigh ? (
            <>
              <div className="inline-block">
                <Popover
                  text={chunk.text}
                  hint={chunk.hint}
                  sugs={chunk.suggestions}
                  rapName={chunk.rapName}
                />
              </div>
            </>
          ) : (
            <span className="text-black">{chunk.text}</span>
          )}
        </>
      ))}
    </div>
  );
}
