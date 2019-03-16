import React from "react";
import { Form, Icon, Input, Button } from "antd";
const uuidv4 = require("uuid/v4");
import axios from "axios";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        // создаем данные для сервера и контекста
        const addTodo = {
          id: uuidv4(),
          completed: false,
          title: values.todoTitle
        };
        this.props.addTodoToStore(addTodo);
        // axios
        //   .post("/api/todos", { todo: addTodo })
        //   .then(function(response) {
        //     console.log(response);
        //   })
        //   .then(() => this.setState({ title: "" }))
        //   .catch(function(error) {
        //     console.log(error);
        //   });

        this.props.form.resetFields();
        this.props.form.validateFields();
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const todoError = isFieldTouched("todoTitle") && getFieldError("todoTitle");

    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("todoTitle", {})(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Введите задачу"
            />
          )}
        </Form.Item>
        {/* <Form.Item
          validateStatus={todoError ? "error" : ""}
          help={todoError || ""}
        >
          {getFieldDecorator("todoTitle", {
            rules: [{ required: true, message: "Please input your task!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Введите задачу"
            />
          )}
        </Form.Item> */}

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Добавить
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
  HorizontalLoginForm
);

export default WrappedHorizontalLoginForm;
