
import './App.css';
import Posts from "./users/Posts";
import {useEffect, useState} from "react";



function App() {

    let [postsList, setPostsList] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(respons => {
                setPostsList(respons);
            });
    }, []);

  return (
    <div >
        <Posts items={postsList}/>
    </div>
  );
}

export default App;
