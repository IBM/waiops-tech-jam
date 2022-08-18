import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import { SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher';
import { SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher';

const CustomSwitcher = (props) => (
  <Switcher {...props}>
    <SwitcherLink  href="https://somelinks.id">
      Test Link 1
    </SwitcherLink>
    <SwitcherLink  href="https://somelinks.id">
      Test Link 2
    </SwitcherLink>
    <SwitcherLink  href="https://somelinks.id">
      Test Link 3
    </SwitcherLink>
    <SwitcherDivider>Technology Stack</SwitcherDivider>
  </Switcher>
);

export default CustomSwitcher;