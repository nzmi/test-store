import React from 'react';

import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Nav = () => {
	return (
		<Sider width={200} style={{ background: '#fff' }}>
			<Menu
				mode="inline"
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
			>
					<Menu.Item key="1">
						<Icon type="close-circle" />
						Категория 1
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="close-circle" />
						Категория 2
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="close-circle" />
						Категория 3
					</Menu.Item>
					<Menu.Item key="4">
						Без категории
					</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Nav;