import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/index";
import ToolBar from "../ToolBar/ToolBar";
import Link from "next/link";
import { Row, Col, Layout, Icon } from "antd";
import { PandaSvg } from "./Panda";

const { Header, Footer, Content } = Layout;

export default ({ children, title = "Ты забыл передать заголовок" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <nav style={{ backgroundColor: "white", lineHeight: "48px" }}>
          <Row>
            <Col offset={1} span={3}>
              <Link href="/">
                <a>
                  <Icon component={PandaSvg} style={{ fontSize: "32px" }} />
                </a>
              </Link>
            </Col>
            <Col offset={1} span={19}>
              <ToolBar />
            </Col>
          </Row>
        </nav>
        <Content style={{ background: "#f0f2f5" }}>
          <Row>
            <Col offset={1} span={22}>
              <div>{children}</div>
            </Col>
          </Row>
        </Content>

        <Footer
          style={{
            textAlign: "center",
            borderTop: "1px solid rgb(170, 163, 163)"
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};
