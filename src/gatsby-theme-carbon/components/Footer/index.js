import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The site build time: {buildTime}
    </p>
    <p>
      Have questions? open
      <br /> an issue on{' '}
      <a
        style={{ textDecoration: 'underline' }}
        href="https://github.com/ibm/waiops-tech-jam/issues/new">
        GitHub.
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/', linkText: 'IBM' },
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of Use' },
  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
