import './App.scss';
import { useState, useEffect } from "react";
import { checkDarkBg, checkDark } from "./helpers/darkmode.js"
import axios from 'axios';

function App() {

  // Difficulties for button mapping
  const difficulties = ['easy', 'medium', 'hard']

  // API Stuff WIP with test button  (don't use - only limited number of req)         <button onClick={(e) => testApi(e)}>test button</button>

const apiReq = async (e) => {
  console.log('button pressed')
  e.preventDefault()
  try {
    const { data } = await axios.post('https://api.openai.com/v1/chat/completions ', 
    {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": "What is the name of the only champion in League of Legends whose abilities all have a passive effect? is Kled the correct answer and if not what is?"}],
      "temperature": 0.7
    }, 
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
    )
    console.log({ data })
  } catch (err) {
    console.log(err.response.data)
  }
}





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
    <main className={checkDarkBg(isDark)}>
      <div className="header">
        <h1 className={checkDark(isDark)}>More Trivia</h1>
        <div className="header-right">
          <button id="dark-mode-toggle" onClick={darkToggle}></button>
        </div>
      </div>
      <div className="container">
        <div className="difficulty-buttons">
            {difficulties.map((diff) => {
          return <button key={diff} id={diff} className={checkDark(isDark)}>{diff}</button>
        })}
        </div>
        <div className="user-input">
          <input type="text" name="user-input" id="user-input" placeholder="What topic would you like?" className={checkDark(isDark)}/>
        </div>
      </div>
    </main>
  );
}

export default App;
