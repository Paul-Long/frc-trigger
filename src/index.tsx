import React from 'react';
import Trigger from './Trigger';
import ITriggerProps from './PropsType';

class TriggerWrap extends React.Component<ITriggerProps, any> {
  triggerRef: any;

  constructor(props: ITriggerProps) {
    super(props);
    let popupVisible;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    this.state = {
      popupVisible
    };
  }

  onTargetClick = () => {};

  onClose = () => {};

  saveRef = (el: any) => {
    this.triggerRef = el;
  };

  render() {
    return (
      <Trigger
        ref={this.saveRef}
        {...this.props}
        visible={this.state.popupVisible}
        onTargetClick={this.onTargetClick}
        onClose={this.onClose}
      />
    );
  }
}

export default TriggerWrap;
