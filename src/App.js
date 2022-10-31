import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/NavBar"
import Navigation from "./components/Navlink"
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import User from "./pages/User"
import ErrorPage from "./pages/ErrorPage"
import "./style.css";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


// function Testy({take}) {
//   return <div>{take}</div>
// }

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        {/* <Testy /> */}
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<User />}/>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
