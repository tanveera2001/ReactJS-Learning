

const App = () => {
  let IsLoginStatus = true;
  return (
    <div>
      <h1>Login Status</h1>
      {IsLoginStatus && <button>Logout Button</button>}
    </div>
  );
};

export default App;