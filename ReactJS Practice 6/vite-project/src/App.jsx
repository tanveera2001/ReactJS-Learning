const LoginStatusBtn = (status) => {
  if(status) {
    return <button>Logout Btn</button>
  }
  else {
    return <button>Login Btn</button>
  }
}

const App = () => {
  return (
    <div>
      <h1>Login status</h1>
      {LoginStatusBtn(true)}
    </div>
  );
};

export default App;