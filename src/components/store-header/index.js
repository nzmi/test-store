import React from "react";
import { connect } from "react-redux";

import { Layout, Row, Col, Icon } from "antd";
import { CreateCategoryModal, CreateProductModal, LoginModal } from "../modals";
import LogoutButton from "../logout-button";

import "./index.scss";

const { Header } = Layout;

const StoreHeader = () => {
  return (
    <Header className="store-header">
      <Row gutter={16}>
        <Col span={4} className="store-header__logo">
          <Icon type="fire" theme="filled" /> SuperStore
        </Col>
        <Col span={20} style={{ textAlign: "right" }}>
          <CreateProductModal />
          <CreateCategoryModal />
          <LogoutButton />
        </Col>
      </Row>
    </Header>
  );
};

export default StoreHeader;
