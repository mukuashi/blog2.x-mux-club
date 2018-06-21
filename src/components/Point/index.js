import React, { PureComponent } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import PropTypes from 'prop-types';

const { Link } = ScrollAnim;

export default class Point extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	};

	static defaultProps = {
		className: 'templates-list',
	};

	render() {
		const props = { ...this.props };
		const children = props.data.map((item) => {
			if (item.match('nav') || item.match('footer')) {
				return null;
			}
			return (<Link
  key={item}
  className={props.className}
  to={item}
  toHash={false}
			/>
			);
		}).filter(item => item);
		return (
  <div className={`${props.className}-wrapper`} style={props.style}>{children}</div>
		);
	}
}
