import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory } from "../../context";

import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberofCategoryToshow,setNumberofCategoryToshow] = useState(0);
  const {hotelCategory,setHotelCategory} = useCategory();
 

  const handleRightToshow = ()=>{
    setNumberofCategoryToshow((prev) => prev+10);
      
  }
  const handleLeftToshow = ()=>{
    setNumberofCategoryToshow((prev) => prev -10);}




  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://exuberant-gold-fashion.cyclic.app/api/category"
        );
        const categoriesToShow = data.slice(numberofCategoryToshow+10>data.length?
          data.length - 10
          :numberofCategoryToshow , numberofCategoryToshow > data.length ? data.length : numberofCategoryToshow + 10);
        setCategories(categoriesToShow);
        
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberofCategoryToshow]);


  const handleCategoryClick = (category) => {
  
    setHotelCategory(category);
  };
  console.log({"Hotel Category" : hotelCategory});
   
  return (
    <section className="categories d-flex align-center gap-larger cursor-pointer">
        {
            numberofCategoryToshow >=10 && (  <button   className="button btn-filter d-flex align-center gap-small cursor-pointer" onClick={handleLeftToshow}>
                <span className="material-icons-outlined">chevron_left</span>
             </button>)
        }
   
     
     
      {categories  && categories.map(({ _id, category }) => (
        <span key={_id} className={`${category === hotelCategory ? "category-color" : ""} `} onClick={()=>{handleCategoryClick(category)}} >
          {category}
        </span>
      ))}
      
     
     {
        numberofCategoryToshow - 10 <= categories.length && (<button   className="button btn-filter d-flex align-center gap-small cursor-pointer" onClick={handleRightToshow}>
            <span className="material-icons-outlined">chevron_right</span>
         </button>)
     }
      

    </section>


  );
};