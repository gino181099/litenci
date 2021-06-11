import "./styles.css";
import Header from "./Component/headerComponent";
import Footer from "./Component/footerComponent";
import Home from "./Component/homeComponent";
import Contact from "./Component/contactComponent";
import About from "./Component/aboutComponent";
import Blog from "./Component/blogComponent";
import Privacy from "./Component/privacyComponent";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/privacy" component={Privacy} />
            <Redirect to="/home" />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
