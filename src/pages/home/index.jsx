import styles from './index.less';

import React from 'react';
import { Link } from 'umi';
import Test from '@/components/Test';

const req = require.context('@/pages', true, /index\.jsx?$/);
const list = req
	.keys()
	.filter(item => item.match(/\.\/[^/]+\/[^/]+\.jsx?$/))
	.map(item => item.replace(/^\.\//, '').replace(/\/[^/]+\.jsx?$/, ''));

export default function() {
	return (
		<div className={styles.home}>
			<h2>Pages【{list.length}】</h2>
			<div>
				{list &&
					list.map((item, index) => {
						return (
							<p style={{ fontSize: 16 }} key={index}>
								<Link to={`/${item}`}>
									{index + 1}. {item}
								</Link>
							</p>
						);
					})}
			</div>
			<hr />
			<Test />
		</div>
	);
}
