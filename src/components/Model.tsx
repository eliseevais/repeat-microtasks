import { adidasArr } from "./pages/Adidas";
import { useParams } from "react-router";
import s from "./Site.module.css";
import { pumaArr } from "./pages/Puma";
import { abibasArr } from "./pages/Abibas";

export const Model = () => {
  const params = useParams();

  let data;
  if (params.brand === "adidas") {
    data = adidasArr;
  } else if (params.brand === "puma") {
    data = pumaArr;
  } else if (params.brand === "abibas") {
    data = abibasArr;
  } else {
    return <div>Brand not found</div>;
  }

  const model = data.find((el) => el.id === Number(params.id));

  if (!model) {
    return <div>Model not found</div>;
  }

  return (
    <div className={s.pageForModel}>
      <h2>{model.model}</h2>
      <h4>{model.collection}</h4>
      <h3>{model.price}</h3>
      <div>
        <img src={model.picture} alt={model.model} />
      </div>
    </div>
  );
};
