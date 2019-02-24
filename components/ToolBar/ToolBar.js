import { Menu, Icon, Row, Col } from "antd";
import { withRouter } from "next/router";
import Link from "next/link";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ToolBar extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="main" title="Main Page">
          <a onClick={() => this.props.router.push("/")}>
            <Icon type="home" />
            Home
          </a>
        </Menu.Item>

        <Menu.Item key="profile">
          <Link href="/profile">
            <a title="Profile">
              <Icon type="profile" />
              Profile
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(ToolBar);
