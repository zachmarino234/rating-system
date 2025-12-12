import { useState } from "react";
import Glyph from "./Glyph";
import Acting from "./svg/icons/Acting";
import Impact from "./svg/icons/Impact";
import Music from "./svg/icons/Music";
import Script from "./svg/icons/Script";
import Set from "./svg/icons/Set";

function App() {
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div className="flex flex-col gap-5 bg-[#005c9f] p-10 rounded-xl">
      <p>Here is my rating of...</p>

      <input
        type="text"
        id="simple-textbox"
        value={title} // The input value is controlled by the state
        onChange={handleChange} // The state is updated on each change
        placeholder="Enter show title..."
        className="text-3xl font-bold text-white"
      />

      <div className="flex flex-row gap-24">
        <Glyph>
          <Acting />
        </Glyph>
        <Glyph>
          <Script />
        </Glyph>
        <Glyph>
          <Music />
        </Glyph>
        <Glyph>
          <Set />
        </Glyph>
        <Glyph>
          <Impact />
        </Glyph>
      </div>
      
      <p className="self-end">Rating system created by Zach Marino</p>
    </div>
  );
}

export default App;
