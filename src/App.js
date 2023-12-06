import './App.scss';
import { useState, useEffect } from "react";
import { checkDarkBg, checkDark } from "./helpers/darkmode.js"
import axios from 'axios';

function App() {

  // Difficulties for button mapping
  const difficulties = ['easy', 'medium', 'hard']

  const changeDifficulty = (diff) => {
    return console.log(diff)
  }

  // API Stuff WIP with test button  (don't use - only limited number of req)         <button onClick={(e) => apiReq(e)}>test button</button>

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

  // State change
  const [qStage, setQStage] = useState(1)


  // Topic input state change
  const [topicInput, setTopicInput] = useState("") 
 
  const chosenTopic = (e) => {
    setTopicInput(e.target.value)
    console.log(topicInput)
  }
 
  const submitChosenTopic = (e) => {
    e.preventDefault()
    setQStage(2)
    console.log("submitted")
  } 

  return (
    <>
      
      <main className={checkDarkBg(isDark)}>
        <div className="header">
          <h1 className={checkDark(isDark)}>More Trivia</h1>
          <div className="header-right">
            <button id="dark-mode-toggle" onClick={darkToggle}></button>
          </div>
        </div>

        {qStage === 1 ?
        <div className="container1">
          <div className="difficulty-buttons">
              {difficulties.map((diff) => {
            return <button key={diff} onClick={() => changeDifficulty(diff)} id={diff} className={checkDark(isDark)}>{diff}</button>
          })}
          </div>
          <form className="user-input" onSubmit={submitChosenTopic}>
            <input type="text" name="user-input" id="user-input" placeholder="What topic would you like?" onChange={chosenTopic} className={checkDark(isDark)}/> 
          </form>
        </div>
        :
        <div className="container2">
          <p className="chosenTopic" className={checkDark(isDark)}>Your topic is: {topicInput}</p>
          <p className="question" className={checkDark(isDark)}>Question</p>
          <form className="user-answer">
            <input type="text" name="user-answer" id="user-answer" placeholder="Enter your answer" className={checkDark(isDark)}/>
          </form>
        </div>
          }
    </main>
    </>
    
  );
}


export default App;
