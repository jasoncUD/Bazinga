import React, { FC, useState } from "react";
import "./Settings.css";

interface SettingsProps {}

function Settings(props: SettingsProps) {
  const voiceActors = [
    "Mr. Beast",
    "Taylor Swift",
    "Dwight Schrute",
    "Lebron James",
    "Joe Biden",
    
  ];
  const [voiceActor, setVoiceActor] = useState("Mr. Beast");

  return (
    <div>
      <div className="header1">
        <h1>Settings</h1>
        <p>Choose Which Voice Actor You Want</p>
        <ul>
          {voiceActors.map((actor) => (
            <li
              key={actor}
              onClick={() => setVoiceActor(actor)}
              style={{
                backgroundColor: actor === voiceActor ? "green" : "#ff914d",
              }}
            >
              {actor}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Settings;
