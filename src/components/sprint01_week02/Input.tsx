import {ChangeEvent} from "react";

type InputProps = {
  title: string;
  setTitle: (title: string) => void
}

export const Input = (props: InputProps) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.currentTarget.value);
  }

  return (
    <input onChange={onChangeInputHandler} value={props.title}/>
  )
}
