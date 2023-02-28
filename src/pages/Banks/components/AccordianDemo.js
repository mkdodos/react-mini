import React, { useState } from 'react';
import { Accordion, Icon,List } from 'semantic-ui-react';

import FamilyDetail from './FamilyDetail';

export default function AccordianDemo() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    // const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
    // this.setState({ activeIndex: newIndex })
  };

  return (
    
      <Accordion fluid styled>
        <Accordion.Title index={0} onClick={handleClick}>
          <Icon name="dropdown" />

          <List divided relaxed horizontal>
            <List.Item>              
              活期存款
            </List.Item>      
            <List.Item>              
              123456
            </List.Item>     
            {/* <List.Item>              
              <Icon name='plus circle' color='teal'/>
            </List.Item>            */}
           
            
          </List>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
         
           <FamilyDetail/>
         
        </Accordion.Content>
        
        {/* <Accordion.Title index={1} onClick={handleClick}>
          <Icon name="dropdown" />         
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content> */}
      </Accordion>
    
  );
}
