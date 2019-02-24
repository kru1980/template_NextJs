import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout/Layout";
import "../css/style.css";
import { List, Card, Row, Col } from "antd";
import PostLink from "../components/PostLink ";

const Index = ({ todos }) => (
  <Layout title="Main page">
    <Row>
      <Col sm={24} md={18}>
        <h3>Home page for listing todos</h3>

        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3
            // lg: 3,
            // xl: 6,
            // xxl: 3
          }}
          dataSource={todos}
          renderItem={item => (
            <List.Item>
              <Card title={item.title} extra={<PostLink title={item.title} />}>
                Card content
              </Card>
            </List.Item>
          )}
        />
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
    </Row>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/todos");
  const json = await res.json();

  return { todos: json.todos };
};

export default Index;
