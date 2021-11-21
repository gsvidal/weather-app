import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';
import Loader from './components/Loader';

function App() {

  // Form state
  const [ search, setSearch ] = useState({
    city: "",
    country: ""
  });

  const [ query, setQuery ] = useState(false);
  const [ data, setData ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  // Extract city and country
  const { city, country } = search;

  useEffect(() => {
    const fetchAPI = async () => {
      if(query) {
        const appId = "81c719f6931898cacc8634f83bf11151";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();

        setData(result);
        setQuery(false);

        // If was correct results in the query:
        if(result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
        setLoading(false);
      }
    }
    fetchAPI();
  },[query, city, country]);

  return (
    <Fragment>
      <Header
        title="Weather App"
      />
      <div className="container-form">
        <div className="row">
          <div className="col m6 s12">
            <Form
              search={search}
              setSearch={setSearch}
              setQuery={setQuery}
              setLoading={setLoading}
            />
          </div>
          <div className="col m6 s12">
            { loading && 
              <Loader />}
            {
            error 
            ?
            !loading &&
            <Error 
              message="No results" 
              component="App"
            />
            :
            !loading &&
            <Weather 
              data={data}
            />
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
