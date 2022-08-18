import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'CP4WAIOps docs',
    href: 'https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops',
  },
  {
    title: 'NOI docs',
    href: 'https://www.ibm.com/docs/en/noi/',
  },
  {
    title: 'Instana docs',
    href: 'https://www.ibm.com/docs/en/obi/current',
  },
  {
    title: 'Turbonomic docs',
    href: 'https://docs.turbonomic.com',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
