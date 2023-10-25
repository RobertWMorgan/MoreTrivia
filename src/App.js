import './App.scss';
import { useState } from "react";
import { checkDarkBg, checkDark } from "./helpers/darkmode.js"

function App() {
  // Difficulties for button mapping
  const difficulties = ['easy', 'medium', 'hard']


  // Darkmode/Lightmode
  const [isDark, setIsDark] = useState("lightmode")

  const darkToggle = () => {
    if (isDark === "lightmode") {
      setIsDark("darkmode")
    } else setIsDark("lightmode")
  }

/*
For Dhaval - delete when you understand
I combined all the buttons into 1 difficulties.map by mapping over the array "difficulties". This is better because we can dynamically apply the styles together
also any change we do to one button affects all without having to do individually.

I also changed the darkmode class selector into a function. It's in the darkmode.js file. It basically does the ifstatement otuside and we can now place it on 
any elements that need darkmode/lightmode and we don't have to write the ternary all the time. Disc me if you have any questions
*/

  return (
    <main class={checkDarkBg(isDark)}>
      <div class="header">
        <h1 class={checkDark(isDark)}>More Trivia</h1>
        <div class="header-right">
          <button id="dark-mode-toggle" onClick={darkToggle}></button>
        </div>
      </div>
      <div class="container">
        <div class="difficulty-buttons">
            {difficulties.map((diff) => {
          console.log({ diff })
          return <button id={diff} class={checkDark(isDark)}>{diff}</button>
        })}
        </div>
        <div class="user-input">
          <input type="text" name="user-input" id="user-input" placeholder="What topic would you like?" class={checkDark(isDark)}/>
        </div>
      </div>
    </main>
  );
}

export default App;
