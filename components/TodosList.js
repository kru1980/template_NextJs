import React from "react";
import TemplateContext from "../context/templateContext";
import { List, Card, Button, Icon } from "antd";
import PostLink from "./PostLink ";

const TodosList = props => {
  return (
    <TemplateContext.Consumer>
      {context => (
        <React.Fragment>
          {console.log("context", context)}
          {console.log("context-todos", context.todos[0])}
          {context.todos ? (
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3
              }}
              dataSource={context.todos}
              renderItem={item => (
                <List.Item>
                  <Card
                    title={item.title}
                    extra={<PostLink title={item.title} />}
                  >
                    Card content
                    <Button
                      type="danger"
                      onClick={context.removeTodoFromCart.bind(this, item.id)}
                    >
                      <Icon type="delete" />
                    </Button>
                    {/* <Button
                      type="primary"
                      onClick={context.addTodoToCart.bind(this, item)}
                    >
                      <Icon type="shopping-cart" />
                    </Button> */}
                  </Card>
                </List.Item>
              )}
            />
          ) : (
            <div>...Loading</div>
          )}
        </React.Fragment>
      )}
    </TemplateContext.Consumer>
  );
};

export default TodosList;
