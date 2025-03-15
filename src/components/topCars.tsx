import {TopCarType} from "../App";

type TopCarsPropsType = {
  cars: TopCarType[]
}

export const TopCars = ({cars}: TopCarsPropsType) => {
  return (
    <div>
      <ol>
        {cars.map(car => {
          return (
            <li>
              <span>{car.manufacturer}</span>
              <span>{car.model}</span>
            </li>
          )
        })}
      </ol>

    </div>
  )
}
