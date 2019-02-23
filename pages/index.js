import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout/Layout";
import "../scss/style.scss";
// const axios = require("axios");

const Index = ({ todos }) => (
  <Layout title="Main page">
    <main>
      <h3>Home page for listing todos</h3>
      {console.log(todos, "fetch props on main page")}
      <ul>
        <h4>todos</h4>
        {todos.length &&
          todos.map(todo => {
            return (
              <li ley={todo.id}>
                <div>
                  <h3>{todo.title}</h3>
                </div>
              </li>
            );
          })}
      </ul>
    </main>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/todos");
  const json = await res.json();

  return { todos: json.todos };
};

export default Index;
