import React from "react";
import s from "./Recipes.module.css";

const RecipeStages = () => {
  return (
    <div className={s.recipe_stages}>
      <ul className={s.recipe_stages_list}>
        <li className={s.recipe_stages_item}>
          <div className={s.recipe_stages_item_oneOf}>
            <span className={s.recipe_stages_item_current}>01</span>
            <span className={s.recipe_stages_item_quantity}> /06</span>
          </div>
          <span className={s.recipe_stages_item_text}>
            Первое, что мы сделаем с цыплятами — приготовим рассол, смешав воду, соль и сахар до растворения последних, и
            поместим в него наших корнишонов на полчаса так, чтобы цыплята полностью находились под водой. Благодаря этому
            несложному трюку их мясо станет более сочным.
          </span>
        </li>
        <li className={s.recipe_stages_item}>
          <div className={s.recipe_stages_item_oneOf}>
            <span className={s.recipe_stages_item_current}>02</span>
            <span className={s.recipe_stages_item_quantity}> /06</span>
          </div>
          <span className={s.recipe_stages_item_text}>
            Достав цыплят из рассола, промойте их под проточной водой и обсушите бумажными полотенцами, а затем натрите
            солью и черным перцем снаружи и изнутри. Не перестарайтесь с солью — цыплята выйдут из рассола уже достаточно солеными.
          </span>
        </li>
        <li className={s.recipe_stages_item}>
          <div className={s.recipe_stages_item_oneOf}>
            <span className={s.recipe_stages_item_current}>03</span>
            <span className={s.recipe_stages_item_quantity}> /06</span>
          </div>
          <span className={s.recipe_stages_item_text}>
            На среднем огне растопите сливочное масло в небольшой кастрюльке, добавьте два раздавленных зубчика чеснока и
            обжарьте до потемнения. Если есть 5-6 веточек розмарина
          </span>
        </li>
        <li className={s.recipe_stages_item}>
          <div className={s.recipe_stages_item_oneOf}>
            <span className={s.recipe_stages_item_current}>04</span>
            <span className={s.recipe_stages_item_quantity}> /06</span>
          </div>
          <span className={s.recipe_stages_item_text}>
            Процедите масло и смажьте им поверхность цыплят
          </span>
        </li>
        <li className={s.recipe_stages_item}>
          <div className={s.recipe_stages_item_oneOf}>
            <span className={s.recipe_stages_item_current}>05</span>
            <span className={s.recipe_stages_item_quantity}> /06</span>
          </div>
          <span className={s.recipe_stages_item_text}>
            Уложите цыплят в форму для запекания и готовьте в духовке, разогретой до 200 градусов, в районе 30 минут,
            периодически поливая выделившимися соками. Цыплята будут готовы, когда температура в самой мясистой части достигнет
            74 градусов (если у вас нет термометра для мяса — ориентируйтесь на прозрачный сок).
          </span>
        </li>
        <li className={s.recipe_stages_item}>
          <div className={s.recipe_stages_item_oneOf}>
            <span className={s.recipe_stages_item_current}>06</span>
            <span className={s.recipe_stages_item_quantity}> /06</span>
          </div>
          <span className={s.recipe_stages_item_text}>
            Если к этому моменту кожа цыплят еще не станет золотистой и хрустящей, включите на максимум гриль с обдувом,
            и не отлучайтесь от духовки — лишняя минута, и аппетитный корнишон превратится в уголек. Оставьте цыплят в
            теплом месте минут на 5, а затем подавайте, по одному на порцию.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default RecipeStages;