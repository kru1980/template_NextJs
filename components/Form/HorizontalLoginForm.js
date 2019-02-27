import React from "react";
import { Form, Icon, Input, Button } from "antd";
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
        console.log("Received values of form: ", values);
        axios
          .post("/api/todos", { title: values })
          .then(function(response) {
            console.log(response);
          })
          .then(() => this.setState({ title: "" }))
          .catch(function(error) {
            console.log(error);
          });

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
