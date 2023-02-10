import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function SectionDropdown({filter,handleSectionChange}) {
  const friendOptions = [
    {
      key: '11201',
      text: '11201',
      value: '11201',
      
    },
   
    {
      key: '11112',
      text: '11112',
      value: '11112',
      
    },
    
  ];

  return (
    <div>
      <Dropdown
      onChange={handleSectionChange}
      value={filter.section}
        // placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
      />
    </div>
  );
}
