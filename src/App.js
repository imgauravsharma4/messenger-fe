import HomePage from "pages/Home";
import "./App.css";
import UserProvider from "providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <HomePage />
      </div>
    </UserProvider>
  );
}

export default App;
