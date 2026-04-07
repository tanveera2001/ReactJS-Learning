import Hero from "./component/Hero";

const App = () => {
  
  const BtnClick = () => {
    alert("Say Hello!");
  }

 
  return (
    <div>
      <Hero ChildBtnClick={BtnClick}/>
    </div>
  );
};

export default App;