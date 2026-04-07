const App = () => {
  const loginStatus = false;

  if(loginStatus == true) {
    return (
      <div>
        <h1>Status</h1>
        <button>Logout</button>
      </div>
    );
  }
  else{
    return (
      <div>
        <h1>Status</h1>
        <button>Login</button>
      </div>
    );


  }
  
};

export default App;