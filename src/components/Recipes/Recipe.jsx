import React from "react";
import s from "./Recipes.module.css";
import Container from "react-bootstrap/Container";
import BreadCrumbs from "../CommonComponents/BreadCrumbs";
import RecipeMainInfo from "./RecipeMainInfo";
import RecipeStages from "./RecipeStages";
import BannerWarning from "../CommonComponents/BannerWarning";
import NewProductsSlider from "../Sliders/NewProductsSlider";

class Recipe extends React.Component {
  render() {
    return (
      <div className={s.recipe}>
        <Container>
          <BreadCrumbs
            links={[{text: "Главная", path: "/"}, {text: "Рецепты", path: "/recipes"}]}
            title={"Цыпленок корнишона в духовке"}
          />
          <div className={s.recipe_block}>
            <RecipeMainInfo/>
            <RecipeStages/>
            <div style={{marginTop: "80px"}}>
              <BannerWarning
                title={"Приятного аппетита!"}
                text={""}
              />
            </div>
          </div>
          <div className={s.recipe_recommendation}>
              <h2 className="simple_title">Рекомендуем к рецепту:</h2>
                <NewProductsSlider />
          </div>
        </Container>
      </div>
    );
  }
}

export default Recipe;