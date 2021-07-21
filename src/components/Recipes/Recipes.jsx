import React from "react";
import s from "./Recipes.module.css";
import BreadCrumbs from "../CommonComponents/BreadCrumbs";
import Container from "react-bootstrap/Container";
import RecipeCard from "../CommonComponents/RecipeCard";


class Recipes extends React.Component {
  render () {
    return (
      <div className={s.recipes}>
        <Container>
          <div style={{marginTop: "30px"}}>
            <BreadCrumbs
              links={[{text: "Главная", path: "/"}]}
              title={"Рецепты"}
            />
          </div>
          <h1 className={s.recipes_title}>Рецепты</h1>
          <div className={s.recipes_cards}>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
            <RecipeCard title={"Цыпленок корнишона в духовке"}/>
          </div>
        </Container>



      </div>
    );
  }
}

export default Recipes;