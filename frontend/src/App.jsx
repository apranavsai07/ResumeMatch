import { useState } from "react";
import UploadForm from "./components/Uploadform";
import ResultsPage from "./components/ResultsPage";
import AnimatedBackground from "./components/Animatedbackground";
import LandingPage from "./components/Landingpage";
import "./App.css";

function App() {
  const [page, setPage] = useState("landing"); // "landing" | "upload" | "results"
  const [data, setData] = useState(null);

  const handleData = (d) => {
    setData(d);
    setPage("results");
  };

  return (
    <>
      <AnimatedBackground />

      {page === "landing" && (
        <LandingPage onStart={() => setPage("upload")} />
      )}

      {page === "upload" && (
        <UploadForm
          setData={handleData}
          onBack={() => setPage("landing")}
        />
      )}

      {page === "results" && (
        <ResultsPage
          data={data}
          onBack={() => setPage("upload")}
          onReset={() => { setData(null); setPage("upload"); }}
        />
      )}
    </>
  );
}

export default App;