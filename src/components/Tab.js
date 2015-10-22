import React, {PropTypes, Component} from 'react';
import {diffObject} from '../utils';

class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    showClose: PropTypes.bool,
    _onSelect: PropTypes.func,
    i: PropTypes.number,
    children: PropTypes.any,
    icon: PropTypes.string,
    fixed: PropTypes.any
  }
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let tabClassName = (this.props.active ? 'tab-item active' : 'tab-item');
    tabClassName += this.props.fixed ? ' tab-item-fixed' : '';
    const _onSelect =  this.props._onSelect || ()=>{};
    const realProps = diffObject(this.props, Object.keys(Tab.propTypes));


    return (
      <div {...realProps} className={tabClassName} onClick={_onSelect.bind('', this.props.i)}>
        {!this.props.showClose || <span className="icon icon-cancel icon-close-tab"/>}
        {!this.props.icon || <span className={`icon icon-${this.props.icon}`}/>}
        {this.props.title}
      </div>
    );
  }
}

export default Tab;
