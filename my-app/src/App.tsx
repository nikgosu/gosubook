import React, {useState} from 'react';
import './App.css';
import MyAppBar from "./components/MyAppBar";
import MyFormContainer from "./components/MyFormContainer";

function App() {

  const [title, setTitle] = useState('Awesome TODO app')
  const [sort, setSort] = useState(0)


  return (
    <>
      <MyAppBar children={title} />
      <MyFormContainer />
    </>
  );
}

export default App;
