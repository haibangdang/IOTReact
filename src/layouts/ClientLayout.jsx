import withLayout from '../hocs/withLayout';
import React from 'react';

function ClientLayout(props) {
  return (
    <>
      {props.children}
    </>
  );
}

export default withLayout(ClientLayout);
