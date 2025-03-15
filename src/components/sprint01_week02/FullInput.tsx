import {ChangeEvent, useState} from "react";

type FullInputProps = {
  addMessage: (title:string) => void;
}

export const FullInput = (props: FullInputProps) => {{
  let [title, setTitle] = useState('');

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  }

  const onClickButtonHandler = () => {
    props.addMessage(title);
    setTitle('');
  }

  return (
    <div>
      <input onChange={onChangeInputHandler} value={title}/>
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  )
}}
