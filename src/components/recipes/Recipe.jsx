// import React, { useState, useEffect } from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Home";
// import RecipeCom from "./RecipeCom";
// import Head from "./Head";

// export default function Recipe() {
//   return (
//     <>
//       <Router>
//         <Head />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipes" element={<RecipeCom query={"query"} />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// //  1f9f9e8a-d4d1-4b4c-b381-db186da04360
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home";
import RecipeCom from "./RecipeCom";
import Head from "./Head";

export default function Recipe() {
  const [query, setQuery] = useState("fish");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/recipes?query=${query}`);
    }
  };

  return (
    <div>
      <Head />
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search for recipes"
        />
        <button onClick={() => navigate(`/recipes?query=${query}`)}>Search</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeCom query={query} />} />
      </Routes>
    </div>
  );
}
