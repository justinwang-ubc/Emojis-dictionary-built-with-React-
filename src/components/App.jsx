import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(eachEmoji) {
  return (
    <Entry
      key={eachEmoji.id}
      emoji={eachEmoji.emoji}
      name={eachEmoji.name}
      meaning={eachEmoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
