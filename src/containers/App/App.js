import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { Charts } from '../../components/Charts/Charts';
import { loadData } from '../../services/store';


function App() {
  const [city, setCity] = React.useState('');
  const state = useSelector(rootState => rootState);
  const dispatch = useDispatch();

  const fetchWeatherData = () => {
    if (!city) {
      return;
    }
    dispatch(loadData(city));
  }

  return (
    <div className="App">
      <div>
        <SearchInput placeholder="Type the city name" onChange={(e) => setCity(e.target.value)} />
        <SearchButton onClick={() => fetchWeatherData()} />
        {state.loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {state.error && <p style={{ color: 'red', textAlign: 'center' }}>{state.error}</p>}
      </div>
      {state.data.list && (
        <div>
          <Charts data={state.data} />
        </div>
      )}
    </div>
  );
}

export default App;
