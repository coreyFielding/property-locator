import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:5000").then(res => res.json()).then(data => console.log(data))
  }, [])
  return <div>test</div>;
};

export default App;
