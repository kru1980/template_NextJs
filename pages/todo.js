import React from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout/Layout";

const Todo = props => (
  <Layout title={props.router.query.title}>
    <div>
      single todo page
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  </Layout>
);

export default withRouter(Todo);
