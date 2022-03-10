import React from 'react';
import { createCheese } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function CheeseNew() {
  const navigate = useNavigate();

  const [cheese, setCheese] = React.useState({
    name: '',
    origin: '',
    image: '',
    tastingNotes: '',
  });

  function handleChange(event) {
    setCheese({ ...cheese, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createCheese(cheese);
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={cheese.name}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Origin</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Origin"
                  name="origin"
                  onChange={handleChange}
                  value={cheese.origin}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Image URL"
                  name="image"
                  onChange={handleChange}
                  value={cheese.image}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tasting Notes</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Tasting Notes...."
                  name="tastingNotes"
                  onChange={handleChange}
                  value={cheese.tastingNotes}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-warning is-fullwidth">
                Make my Cheese!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CheeseNew;
