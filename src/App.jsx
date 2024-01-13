import { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetail from "./Components/FoodDetail";
import InnerContainer2 from "./Components/InnerContainer2";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer2>
          <FoodDetail foodId={foodId} />
        </InnerContainer2>
      </Container>
    </>
  );
}

export default App;
