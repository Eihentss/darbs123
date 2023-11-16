import React, { useEffect, useState } from "react";
import Quote from "./Quote.js";

function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getQuotes() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        console.log(data);
        setQuotes(data.quotes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    getQuotes();
  }, []);

  const quotesJSX = quotes.map((quote, index) => (
    <Quote key={index} name={quote.author} quote={quote.quote} />
  ));

  return (
    <>
      <h1>Quotes</h1>
      {loading ? "LOADING..." : quotesJSX}
    </>
  );
}

export default QuoteList;
