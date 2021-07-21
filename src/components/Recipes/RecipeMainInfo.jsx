import React from "react";
import s from "./Recipes.module.css";
import RecipeInfo from "../CommonComponents/RecipeInfo";
import recipe_1 from "../../common/images/recipe-1.png";


const RecipeMainInfo = () => {
  return (
    <div className={s.recipe_card}>
      <div className={s.recipe_card_info}>
        <h1 className={s.recipe_title}>Цыпленок корнишона в духовке</h1>
        <div className={s.recipe_moreInfo}>
          <RecipeInfo
            time={"40-50 мин"}
            calorie={"137 ккал"}
            moreInfo={"на 100г."}
            color={"#2B2A29"}
          />
        </div>
        <span className={s.recipe_text}>Предлагаем простой рецепт приготовления Цыпленка корнишона в духовке, получается очень вкусно и сочно!</span>
        <div className={s.recipe_ingredients}>
          <h3 className={s.recipe_ingredients_title}>Ингредиенты:</h3>
          <ul className={s.recipe_ingredients_list}>
            <li className={s.recipe_ingredients_item}>- 2 весом около 400- 500гр цыпленка корнишона.</li>
            <li className={s.recipe_ingredients_item}>- 6 зубчиков чеснока</li>
            <li className={s.recipe_ingredients_item}>- 50 гр Сливочное масло</li>
            <li className={s.recipe_ingredients_item}>- розмарин по вкусу</li>
          </ul>
        </div>
      </div>
      <div className={s.recipe_card_image}>
        <img src={recipe_1} alt="image" className={s.recipe_card_img}/>
      </div>
    </div>
  );
}

export default RecipeMainInfo;