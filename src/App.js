import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Courses from './components/Courses';

function App() {
  let [categories, setCategories] = useState([]);
  let [courses, setCourses] = useState([]);
  let fetchDetails = () => {
    // eslint-disable-next-line
    fetch('https://cors-anywhere.herokuapp.com/'+'https://frontend-hiring.appspot.com/all_categories?secret=HelloMars')
    .then(response=>response.json())
    .then(response=>{
      setCategories(JSON.parse(response.payload));
    })
    .catch(e=>console.log(e));
    // eslint-disable-next-line
    fetch('https://cors-anywhere.herokuapp.com/'+'https://frontend-hiring.appspot.com/all_courses?secret=HelloMars')
    .then(response=>response.json())
    .then(response=>{
      setCourses(JSON.parse(response.payload));
      console.log(JSON.parse(response.payload));
    })
    .catch(e=>console.log(e));
  };
  useEffect(()=>fetchDetails(), []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar categories={categories} />
        </div>
        <div className="col-10">
          <Courses courses={courses}/>
        </div>
      </div>
    </div>
  );
}

export default App;
