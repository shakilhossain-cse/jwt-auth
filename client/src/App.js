import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/Login"));
const Forget = lazy(() => import("./pages/Forget"));
const NewPassword = lazy(() => import("./pages/NewPassword"));
const Register = lazy(() => import("./pages/Register"));


function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <h3 style={{ textAlign: "center", marginTop: "10rem" }}>
            Loading....
          </h3>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<Forget />} />
            <Route path="/NewPassword" element={<NewPassword />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
