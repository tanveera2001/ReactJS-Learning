

const App = () => {
  let status = true;
  return (
    <div>
      {
        status?
        <button>Logout Button</button>
        :
        <button>Login Button</button>
      }
    </div>
  );
};

export default App;