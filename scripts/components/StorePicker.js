// StorePicker

import React from 'react';
import { Navigation } from 'react-router';
import h from '../helpers';


var StorePicker = React.createClass({
  mixins : [Navigation],
  goToStore : function(event) {
    event.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    // transition from StorePicker to App
    this.history.pushState(null, '/store/' + storeId);
  },
  render : function() {
    // normal comments go here. inside the return is JSX syntax and will render html
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        {/*creating the store*/}
        <h2>Please Enter a Store</h2>
        <input type='text' ref='storeId' defaultValue={h.getFunName()} />
        <input type="Submit" />
      </form>
    )
  }
});

export default StorePicker;
