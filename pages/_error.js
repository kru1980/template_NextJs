import React from "react";
import Router from "next/router";
import { Button } from "antd";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <p>
          {this.props.statusCode
            ? `На сервере произошла ошибка ${this.props.statusCode}.`
            : "НА клиенте произошла ошибка"}
        </p>
        <p>
          Click{" "}
          <Button type="primary" onClick={() => Router.push("/")}>
            here
          </Button>{" "}
          to go home page
        </p>
      </div>
    );
  }
}

export default Error;
