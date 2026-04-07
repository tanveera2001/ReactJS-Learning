import Hero from "./component/Hero";

const App = () => {

  const IteamObj = {
    name: 'Rabbil Hasan',
    age: 33,
    city: 'Dhaka'
  }

  return (
    <div>
      <Hero item={IteamObj}/>
    </div>
  );
};

export default App;