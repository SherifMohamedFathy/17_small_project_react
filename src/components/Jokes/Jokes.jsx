// import React, { useEffect, useState } from "react";

// export default function Jokes() {
//   const [jokes, setJokes] = useState([]);
//   const [currentJoke, setCurrentJoke] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   async function fetchData() {
//     setLoading(true);
//     try {
//       let response = await fetch("https://api.api-ninjas.com/v1/jokes?limit=20", {
//         headers: { "X-Api-Key": "UIVcRJWn5tUm9mq0PnMxzQ==8j4XrlDItNqEz2Ku" },
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       let data = await response.json();

//       setJokes(data);
//     } catch (error) {
//       setErrorMessage("Failed to fetch jokes. Please try again later.");
//       console.error("error message", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   function handleJoke() {
//     if (jokes.length > 0) {
//       const randomIndex = Math.floor(Math.random() * jokes.length);
//       setCurrentJoke(jokes[randomIndex].joke);
//     }
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div className="wrapper text-center">
//       <h1>Joke Generator Using React And Joke Api </h1>
//       {loading ? (
//         <h2>waiting please data is loading</h2>
//       ) : (
//         <button onClick={handleJoke}>Click to generate a joke</button>
//       )}

//       {currentJoke && <p>{currentJoke}</p>}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
// import './Jokes.css';  // Import a CSS file for styling

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData() {
    setLoading(true);
    setErrorMessage("");
    try {
      let response = await fetch("https://api.api-ninjas.com/v1/jokes?limit=20", {
        headers: { "X-Api-Key": "UIVcRJWn5tUm9mq0PnMxzQ==8j4XrlDItNqEz2Ku" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setJokes(data);
    } catch (error) {
      setErrorMessage("Failed to fetch jokes. Please try again later.");
      console.error("Error fetching jokes:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleJoke() {
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setCurrentJoke(jokes[randomIndex].joke);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper text-center">
      <h1>Joke Generator Using React And Joke API</h1>
      {loading ? (
        <div>please wait data is loading</div>
      ) : errorMessage ? (
        <div>
          <h2>{errorMessage}</h2>
          <button onClick={fetchData}>Retry</button>
        </div>
      ) : (
        <>
          <button onClick={handleJoke}>Click to generate a joke</button>
          {currentJoke && <p>{currentJoke}</p>}
        </>
      )}
    </div>
  );
}
