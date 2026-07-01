import { useState } from "react";
import Background from "./components/common/Background";
import Home from "./pages/Home";
import Preloader from "./components/common/Preloader";
import useLenis from "./hooks/useLenis";


function App() {
  const [loading, setLoading] = useState(true);

  useLenis();

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      <Background />
      <Home />
    </>
  );
}

export default App;