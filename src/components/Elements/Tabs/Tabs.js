import React, {PropTypes, Component} from 'react';
import { diffProps } from '../../../utils';

class Tabs extends Component {
  static propTypes = {
    active: PropTypes.number,
    children: PropTypes.any,
    onChange: PropTypes.func
  }
  constructor(props) {
    super(props);

    this.state = {
      active: props.active
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active
    });
  }

  _onSelect(i) {
    if (this.props.onChange) {
      this.props.onChange(i);
    }
    this.setState({
      active: i
    });
  }

  render() {
    return (
      <div {...diffProps(this, Tabs)} style={{width: '100%'}}>
        <div className="tab-group" style={{width: '100%', height: '25px'}}>
          {this.props.children.map((tab, i)=> {
            return React.cloneElement(tab, {
              i: i,
              key: i,
              active: (i === this.state.active),
              _onSelect: this._onSelect.bind(this)
            });
          })}
        </div>
        <div>
          {this.props.children.map((tab, i)=> {
            return (i === this.state.active) ? tab.props.children : '';
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
