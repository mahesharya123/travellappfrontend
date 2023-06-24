import axios from "axios";
import { useEffect, useState } from "react";


import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberofCategoryToshow,setNumberofCategoryToshow] = useState(0);
 

  const handleRightToshow = ()=>{
    setNumberofCategoryToshow((prev) => {
      const nextValue = prev + 10;
      return Math.min(nextValue, categories.length);
    });
  }
  const handleLeftToshow = ()=>{
    setNumberofCategoryToshow((prev) => {
      const nextValue = prev - 10;
      return Math.max(nextValue, 0);
    });}




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

   
  return (
    <section className="categories d-flex align-center gap-larger cursor-pointer">
        {
            numberofCategoryToshow >=10 && (  <button   className="button btn-filter d-flex align-center gap-small cursor-pointer" onClick={handleLeftToshow}>
                <span className="material-icons-outlined">chevron_left</span>
             </button>)
        }
   
     
     
      {categories  && categories.map(({ _id, category }) => (
        <span key={_id} >
          {category}
        </span>
      ))}
      
     
     {
        numberofCategoryToshow -10 < categories.length && (<button   className="button btn-filter d-flex align-center gap-small cursor-pointer" onClick={handleRightToshow}>
            <span className="material-icons-outlined">chevron_right</span>
         </button>)
     }
      

    </section>


  );
};