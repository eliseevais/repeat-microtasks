type ButtonForInputProps = {
  title: string;
  callback: () => void
}

export const ButtonForInput = (props: ButtonForInputProps) => {

  const onClickHandler = () => {
    props.callback()
  }

  return (
    <button onClick={onClickHandler}>{props.title}</button>
  )
}
