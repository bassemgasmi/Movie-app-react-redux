import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { handelSearch } from "../../action/index";

import "./serch.css";

const { Search } = Input;

class search extends Component {
  handledSearch = e => {
    this.props.handelSearch(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <Search
          className="searchInput"
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onChange={this.handledSearch}
        />
      </div>
    );
  }
}
const mapDispatchToProps = { handelSearch };
export default connect(null, mapDispatchToProps)(search);
