import React from 'react';

interface ITriggerProps {
  prefixCls: string;
}

class Trigger extends React.Component<ITriggerProps> {
  public static defaultProps = {
    prefixCls: 'frc-trigger'
  };

  render() {
    return <div />;
  }
}

export default Trigger;
