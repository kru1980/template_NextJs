import React from "react";
import TemplateContext from "../context/templateContext";
import { List, Card } from "antd";
import PostLink from "./PostLink ";

const TodosList = props => {
  return (
    <TemplateContext.Consumer>
      {context => (
        <React.Fragment>
          {context.todos.todos ? (
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3
              }}
              dataSource={context.todos.todos}
              renderItem={item => (
                <List.Item>
                  <Card
                    title={item.title}
                    extra={<PostLink title={item.title} />}
                  >
                    Card content
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
