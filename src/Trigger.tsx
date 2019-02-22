import React from 'react';
import ITriggerProps from './PropsType';

export interface IPropTypes {
  visible: boolean;
  onTargetClick: () => void;
  onClose: () => void;
}

class Trigger extends React.Component<ITriggerProps & IPropTypes> {
  public static defaultProps = {
    prefixCls: 'frc-trigger'
  };

  render() {
    const child: any = React.Children.only(this.props.children);
    const newChildProps = {
      onClick: this.props.onTargetClick,
      key: 'trigger'
    };
    return React.cloneElement(child, newChildProps);
  }
}

export default Trigger;
