import "../scss/home.scss";
import AppHeader from "../components/Navbar";
import AppShowcase from "../components/Showcase";

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppShowcase />
      </main>
    </div>
  );
}

export default App;
