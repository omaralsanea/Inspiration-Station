import React from 'react';

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

  function refreshPage() {
    window.location.reload();
  }

  return (
    <section className="quotesSection">
      <div className="quotesContainer is-half">
        <div className="columns is-multiline">
          {quotes ? (
            <p>
              Quote: "{quotes[0].quote}" <br />
              Author: {quotes[0].author} <br />
              Category: {quotes[0].category}
            </p>
          ) : (
            <p>Loading....</p>
          )}
        </div>
        <div className="button">
          <button
            className="button is-white is-medium is-size-6 is-fullwidth"
            onClick={refreshPage}
          >
            Click here for a new QUOTE 💬 !
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuotesIndex;
