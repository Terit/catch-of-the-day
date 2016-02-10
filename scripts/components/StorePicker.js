// StorePicker
import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

class StorePicker extends React.Component {
  @autobind
  goToStore(event) {
    event.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    // transition from StorePicker to App
    this.history.pushState(null, '/store/' + storeId);
  }

  render() {
    // normal comments go here. inside the return is JSX syntax and will render html
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        {/*creating the store this is how you comment */}
        <h2>Please Enter a Store</h2>
        <input type='text' ref='storeId' defaultValue={h.getFunName()} />
        <input type="Submit" />
      </form>
    )
  }

}

reactMixin.onClass(StorePicker, History);

export default StorePicker;
