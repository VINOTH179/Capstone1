import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const RecommendedMoviesCard = () => {
  const Collection = [
    {
      name: "Ayalaan",
      img: "https://assets.gadgets360cdn.com/pricee/assets/product/202302/Ayalaan_1675782610.jpg",
      language:"Tamil,Telungu,Malayalam"
    },
    {
      name: "Salaar:Part 1–Ceasefire",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg/220px-Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
      language:"Tamil,Telungu,Malayalam"
    },
    {
      name: "Lover",
      img: "https://static.toiimg.com/photo/107547727.cms?imgsize=10240",
      language:"Tamil,Telungu,Malayalam"
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      
    <div className="recommendedMovies">
      
      {Collection.map((col, i) => {
        return (
          <MovieCard
            name={col.name}
            img={col.img}
            language={col.language}
          />
        );
      })}
    </div>
    </div>
  );
};

export default RecommendedMoviesCard;