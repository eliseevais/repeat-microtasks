type ButtonPropsType = {
  name: string
  callBack: () => void;
}

export const Button = ({name, callBack}: ButtonPropsType) => {
  const onClickHandler = () => {
    callBack();
  }

  return (
    <button onClick={onClickHandler}>{name}</button>
  )
}
