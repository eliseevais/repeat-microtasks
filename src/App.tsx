import './App.css';
import {Button} from "./components/button";

export type TopCarsType = TopCarType[];

export type TopCarType = {
  manufacturer: string
  model: string
}

function App() {

  // const topCars: TopCarsType = [
  //   {manufacturer: 'BMW', model: 'm5cs'},
  //   {manufacturer: 'Mercedes', model: 'e63s'},
  //   {manufacturer: 'Audi', model: 'rs6'}
  // ]

  const foo1 = (subscriber: string, age: number) => {
    console.log("subscriber", subscriber, "age", age)
  }
  const foo2 = (subscriber: string) => {
    console.log("2", subscriber)
  }
  const foo3 = (subscriber: string) => {
    console.log("3", subscriber)
  }
  const foo4 = () => {
    console.log("I am stupid button")
  }

  return (
    <div className="App">
      <Button name={"MyYouTubeChanel-1"} callBack={() =>foo1("I am button-1", 21)}/>
      <Button name={"MyYouTubeChanel-2"} callBack={() => foo2("I am button-3")}/>
      <Button name={"Hello"} callBack={() => foo3("I am button-3")}/>
      <Button name={"Stupid button"} callBack={foo4}/>
    </div>
  );
}

export default App;
