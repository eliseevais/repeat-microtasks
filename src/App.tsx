import './App.css';
import {useState} from "react";
import {Input} from "./components/sprint01_week02/Input";
import {ButtonForInput} from "./components/sprint01_week02/ButtonForInput";

function App() {
  const [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'},
      {message: 'message4'},
      {message: 'message5'}
    ]
  )

  let [title, setTitle] = useState('');

  // const addMessage = (title: string) => {
  //   const newMessage = {
  //     message: title
  //   }
  //   setMessage([newMessage, ...message])
  // }

  const callbackButtonForInputHandler = () => {
    const newMessage = {
      message: title
    }
    setMessage([newMessage, ...message]);
    setTitle('');
  }

  return (
    <div className="App">
      {/*<FullInput addMessage={addMessage}/>*/}

      <div>
        <Input title={title} setTitle={setTitle}/>
        <ButtonForInput title={"+"} callback={callbackButtonForInputHandler}/>
      </div>

      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  );
}

export default App;
