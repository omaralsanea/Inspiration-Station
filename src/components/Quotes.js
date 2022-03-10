import React from 'react';
// import CheeseCard from './CheeseCard';

import { getAllQuotes } from '../lib/api';

const QuotesIndex = () => {
  const [quotes, setQuotes] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllQuotes();
        setQuotes(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {quotes ? <p>{quotes[0].quote}</p> : <p>Loading....</p>}
        </div>
      </div>
    </section>
  );
};

export default QuotesIndex;
