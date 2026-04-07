

const App = () => {
  let status = true;
  return (
    <div>
      <h1>Login Status</h1>
      {(() => {
        if(status) {
          return <button>Logout Button</button>
        }
        else {
          return <button>Login Button</button>
        }
      })()}
    </div>
  );
};

export default App;