import React, {useState} from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InspoQuote from "./InspoQuote.js";
import axios from 'axios'

const URL_FOR_RANDOM_INSPO = "https://inspo-quotes-api.herokuapp.com/quotes/random";

/** Site application.
 *
 *  State
 *  - InspoQuote
 *
 * App -> TodoApp, Footer, InspoQuote
 **/

function App() {
  const [inspoQuote, setInspoQuote] = useState("");

  async function handleInspoBtn() {
    const newQuoteAPI = await axios({
      url: URL_FOR_RANDOM_INSPO,
      method: "GET",
    });
    console.log("test, newQuoteAPI is", newQuoteAPI);
    const newQuote = `${newQuoteAPI.data.quote.text} -${newQuoteAPI.data.quote.author}`;
    setInspoQuote(() => newQuote);
  }

  return (
      <main className="App">
        <header className="container-fluid pt-4 pb-1">
          <div className="container">
            <h1>Prøductïv</h1>
            <p className="lead">The best name in todo list management.</p>
            <InspoQuote message={inspoQuote} handleClick={handleInspoBtn} />
          </div>
        </header>

        <section className="container mt-4">
          <TodoApp initialTodos={[
            {
              id: 1,
              title: "Code!",
              description: "Write some code",
              priority: 2,
            },
            {
              id: 2,
              title: "Make dinner",
              description: "Cook something healthy",
              priority: 1,
            },
            {
              id: 3,
              title: "Go to bed",
              description: "In bed by 11:15",
              priority: 3,
            },
          ]} />

          <Footer />
        </section>
      </main>
  );
}

export default App;
