// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import style from "./style.module.css";
// export default function RecipeCom({ query }) {
//   const [recipes, setRecipes] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [error, setError] = useState(null);

//   async function fetchData() {
//     try {
//       let response = await axios.get(`
// https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=1f9f9e8a-d4d1-4b4c-b381-db186da04360 `);
//       let RecipeData = response.data.data.recipes;

//       console.log(RecipeData);
//       setRecipes(RecipeData);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       setError(error.response ? error.response.data.message : error.message);
//     }
//   }
//   function search(e) {
//     let x = e.target.value.toLowerCase();
//     let filtered = recipes.filter((recipe) => recipe.title.toLowerCase().includes(x));
//     setFiltered(filtered);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div className={`${style.recipes}`}>
//       <div className={`${style.body}`}>
//         <h2 className={`${style.title}`}>
//           Search Recipes With <span>Food2Fork</span>
//         </h2>
//         <p>Type Recipes Separated By Comma</p>
//       </div>
//       <div className={`${style.search} text-center`}>
//         <input
//           onChange={(i) => search(i)}
//           type="text"
//           placeholder="chicken,onion,carrot"
//           className=" mt-3 outline-none w-50 outline-none"
//         />
//         <i className="fa fa-search" aria-hidden="true"></i>
//       </div>
//       <h3>RECIPE LIST</h3>

//       <div className="container mt-5">
//         <div className="row">
//           {/* {recipes.map((item, index) => (
//             <div className=" col-lg-3 col-md-6 col-12 mb-4" key={item.id}>
//               <div className="card h-100">
//                 <img src={item.image_url} className={`${style.img_url} card-img-top`} alt="img" />
//                 <div className={`${style.card_} card-body`}>
//                   <h4 className="card-title">{item.title}</h4>
//                   <h5 className="card-subtitle mb-2 ">{item.publisher}</h5>
//                   <div className="btns">
//                     <button className="btn btn-primary me-2">Details</button>
//                     <button className="btn btn-success">Recipe Url</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))} */}
//           {filtered.map((item) => (
//             <div className="col-lg-3 col-md-6 col-12 mb-4" key={item.id}>
//               <div className="card h-100">
//                 <img src={item.image_url} className={`${style.img_url} card-img-top`} alt="img" />
//                 <div className={`${style.card_} card-body`}>
//                   <h4 className="card-title">{item.title}</h4>
//                   <h5 className="card-subtitle mb-2 ">{item.publisher}</h5>
//                   <div className="btns">
//                     <button className="btn btn-primary me-2">Details</button>
//                     <button className="btn btn-success">Recipe Url</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// }
// //////////////////
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";

export default function RecipeCom({ query }) {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData(query) {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=1f9f9e8a-d4d1-4b4c-b381-db186da04360`
      );
      const RecipeData = response.data.data.recipes;
      setRecipes(RecipeData);
      setFiltered(RecipeData);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.response ? error.response.data.message : error.message);
    }
  }

  function search(e) {
    const searchQuery = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchQuery));
    setFiltered(filteredRecipes);
  }

  useEffect(() => {
    if (query) {
      fetchData(query);
    }
  }, [query]);

  return (
    <div className={style.recipes}>
      <div className={style.body}>
        <h2 className={style.title}>
          Search Recipes With <span>Food2Fork</span>
        </h2>
        <p>Type Recipes Separated By Comma</p>
      </div>
      <div className={`${style.search} text-center`}>
        <input onChange={search} type="text" placeholder="chicken,onion,carrot" className="mt-3 outline-none w-50" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <h3>RECIPE LIST</h3>

      <div className="container mt-5">
        <div className="row">
          {filtered.map((item) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4" key={item.id}>
              <div className="card h-100">
                <img src={item.image_url} className={`${style.img_url} card-img-top`} alt="img" />
                <div className={`${style.card_} card-body`}>
                  <h4 className="card-title">{item.title}</h4>
                  <h5 className="card-subtitle mb-2">{item.publisher}</h5>
                  <div className="btns">
                    <button className="btn btn-primary me-2">Details</button>
                    <button className="btn btn-success">Recipe Url</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
