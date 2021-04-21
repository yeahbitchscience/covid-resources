import React from 'react';

const Breakline = (props) => {
  let ber = '<br />';
  let brek = ber.repeat(props.num);
  return (<div dangerouslySetInnerHTML={ { __html: brek }}>
  </div>
  );
}

export default Breakline;