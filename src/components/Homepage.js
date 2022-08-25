import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p>Automation - AIOps</p>;

const FirstRightText = () => (
  <p>
    This site covers topics and tutorials related to Cloud Pak for Watson AIOps, Instana and Turbonomic.
    <a
      className={calloutLink}
      href="https://github.com/ibm/waiops-tech-jam/blob/main/src/components/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>Tech Jam 2022</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
