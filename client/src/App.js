import Dashboard from "./components/Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");

  return id ? <Dashboard id={id} /> : <login onIdSumit={setId} />;
}

export default App;
