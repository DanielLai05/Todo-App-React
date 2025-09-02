import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Home from './pages/home'
import { BrowserRouter, HashRouter, Outlet, Route, Routes } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import AddTodo from "./pages/AddTodo"
import useLocalStorage from "use-local-storage"
import { TodoContext } from "./context/TodoContext"

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand >Todos</Navbar.Brand>
          <Nav>
            <Nav.Link href="/add">Add Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </TodoContext.Provider>
  )
}

export default App