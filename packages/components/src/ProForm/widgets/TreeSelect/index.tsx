import React from 'react';
import { Dropdown, Input } from 'uiw';

const TreeSelect = (
  {
    // inputProps= {}
  },
) => {
  return (
    <div>
      <Dropdown trigger="focus" style={{ marginTop: 5 }} menu={null}>
        <Input
          // readOnly={!showSearch}
          size="default"
          onChange={() => {}}
          // {...inputProps}
        />
      </Dropdown>
    </div>
  );
};

export default TreeSelect;
