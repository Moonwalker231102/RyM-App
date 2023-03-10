import style from "./Card.module.css";

const Card = ({ id, name, species, gender, image, onClose }) => {
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.button}>Kill</button>
         <h2>{name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img src={image} alt="" className={style.img} />
      </div>
   );
};


export default Card;

