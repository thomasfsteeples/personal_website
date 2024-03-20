import { Route, Switch } from "wouter";

import About from "./About.tsx";
import { Blog, BlogPost } from "./Blog.tsx";
import CV from "./CV.tsx";
import Contact from "./Contact.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Welcome from "./Welcome.tsx";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Welcome />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/curriculum-vitae">
        <CV />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/blog/:title">
        {(params) => <BlogPost id={params.title} />}
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route component={ErrorPage} />
    </Switch>
  );
}
