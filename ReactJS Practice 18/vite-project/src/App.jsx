const App = () => {
  function Demo() {
    alert('Click');
  }
  return (
    <div>
      <button onClick={Demo}>Submit</button>
    </div>
  );
};

export default App;