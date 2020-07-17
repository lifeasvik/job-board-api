import React from 'react';
import './App.css';
import 'fontsource-roboto';

import Jobs from './components/Jobs';

const mockJobs = [
  {title: 'Software Engineer', company: 'Google'},
  {title: 'Junior Developer', company: 'Microsoft'},
  {title: 'Software Developer', company: 'Facebook'},
  {title: 'Senior Software Engineer', company: 'Google'},
  {title: 'Entry Level Full Stack Developer', company: 'Indeed'},
  {title: 'Software Engineer Level ', company: 'Specs Wine Delivery'},
  {title: 'Junior Engineer', company: 'Home Depot'},
  {title: 'Full Stack Software Developer', company: 'AirBnB'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs ={mockJobs}/>
    </div>
  );
}

export default App;
