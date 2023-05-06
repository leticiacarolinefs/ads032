import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Novo from "./pages/Novo"
import Erro404 from "./pages/Erro404"
import Layout from "./components/Layout"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<Novo />} />
        </Route>

        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}
