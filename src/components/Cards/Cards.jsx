import React from 'react';
import Card from '../Card/Card';
import style from "./Cards.module.css"
const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.Cards}>
        {
          characters.map(({ id, name, species, gender, image}) => { 
            return (
              <Card
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
            />
            );
          })}
      </div>
  );
}

export default Cards;

