const App = () => {

  const PostFormData = (event) => {
    event.preventDefault();
    alert('Form Submit');
  }
  return (
    <div>
      <form onSubmit={PostFormData}>
        <input placeholder="name"/>
        <button>Submit</button> 
      </form>
      
    </div>
  );
};

export default App;
