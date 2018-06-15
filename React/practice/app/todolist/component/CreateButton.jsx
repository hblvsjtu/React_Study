import React from 'react';

// const propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

function CreateButton(props) {
  return (
    <div className="createButtonComponent">
      <button onClick={() => { props.onClick(); }}>创建新的Todo</button>
    </div>
  );
}

// CreateButton.propTypes = propTypes;

export default CreateButton;

