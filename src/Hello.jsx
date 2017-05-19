import React, { PropTypes } from 'react';
import { BasicHeader, HeaderDetails, Page } from '@jenkins-cd/design-language';

// eslint-disable-next-line react/prefer-stateless-function
const Hello = function (props) {
  return (<Page>
    <BasicHeader className="ContentPageHeader">
      <HeaderDetails>
        <div className="ContentPageHeader-main u-flex-grow">
          <h1>hello</h1>
        </div>
      </HeaderDetails>
    </BasicHeader>
    <main>
      <article>
        { React.cloneElement(props.children)}
      </article>
    </main>
  </Page>
  );
};

Hello.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.element,
};

export default Hello;
