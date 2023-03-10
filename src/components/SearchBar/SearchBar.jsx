import style from "./Searchbar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) { 
   const [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
   };
   return (
      <div>
         <input type="search"
            className={style.Input}
            onChange={handleChange}
         />
         <button className={style.Button} onClick={() => onSearch(id)}>Add</button>
      </div>
   );
}