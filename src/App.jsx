import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  //using useState to connect API Button with P tag
  const [quote, setQuote] = useState("");

  // fetching API
  const getQuote = () => {
    axios.get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
        {/* calling the fetch function here inside the button thru onClick */}
        <button onClick={getQuote}>Get Quote</button>
        {/* calling the useState (quote) function here inside the Paragraph */}
        {quote ? <p>{quote}</p> : null} {/*OR THIS WAY--> { quote && <p>{quote}</p> } */}
    </div>
  );
}

export default App;
