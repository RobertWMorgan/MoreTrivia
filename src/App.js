import './App.scss';
import { useState } from "react";

function App() {

  const [isDark, setIsDark] = useState("lightmode");

  const darkToggle = () => {
    if (isDark === "lightmode") {
      setIsDark("darkmode")
    } else setIsDark("lightmode")
    console.log(isDark)
    
  }

  return (
    <main class={isDark === "lightmode" ? "background-lightmode" : "background-darkmode"}>
      <div class="header">
        <h1 class={isDark === "lightmode" ? "lightmode" : "darkmode"}>More Trivia</h1>
        <div class="header-right">
          <button id="dark-mode-toggle" onClick={darkToggle}></button>
        </div>
      </div>
      <div class="container">
        <div class="difficulty-buttons">
            <button class={isDark === "lightmode" ? "lightmode" : "darkmode"} id="easy">Easy</button>
            <button id="medium" class={isDark === "lightmode" ? "lightmode" : "darkmode"}>Medium</button>
            <button id="hard" class={isDark === "lightmode" ? "lightmode" : "darkmode"}>Hard</button>
        </div>
        <div class="user-input">
          <input type="text" name="user-input" id="user-input" placeholder="What topic would you like?" class={isDark === "lightmode" ? "lightmode" : "darkmode"}/>
        </div>
      </div>
    </main>
  );
}

export default App;
