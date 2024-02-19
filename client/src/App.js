import "./App.css";
import AppRouting from "./routes/AppRouting";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRouting />
      <Toaster />
    </>
  );
}

export default App;
