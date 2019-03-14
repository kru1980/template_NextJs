import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout/Layout";
import "../css/style.css";
import { Row, Col } from "antd";
import TodosList from "../components/TodosList";
import HorizontalLoginForm from "../components/Form/HorizontalLoginForm";
import TemplateContext from "../context/templateContext";

const Index = ({ todos }, props) => (
  <Layout title="Main page">
    <Row>
      <Col sm={24} md={18}>
        <h3>Home page for listing todos</h3>
        <TodosList />
      </Col>
      <Col offset={1} sm={23} md={5}>
        sider
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img
              src="/static/images/Image1.png"
              alt="cat1"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </Col>
      <Col offset={1} sm={23} md={5}>
        {/* <div> */}

        <TemplateContext.Consumer>
          {context => (
            <HorizontalLoginForm addTodoToStore={context.addTodoToStore} />
          )}
        </TemplateContext.Consumer>
        {/* </div> */}
      </Col>
    </Row>
  </Layout>
);

// Index.getInitialProps = async ({ req }) => {
//   const res = await fetch("http://localhost:3000/api/todos");
//   const json = await res.json();

//   return { todos: json.todos };
// };

export default Index;
