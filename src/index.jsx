import React from 'react';
import { injectGlobal, css } from 'emotion';

export default (setupFunction) => {
  const BackgroundProxy = (props) => {
    const { nextProxy, ...rest } = props;
    const { value: NextProxy, next } = nextProxy;

    if (setupFunction) setupFunction();

    if (rest.fixture.background) {
      // eslint-disable-next-line no-unused-expressions
      injectGlobal`
        body {
          ${css(rest.fixture.background)}
        }
      `;
    }
    return <NextProxy {...rest} nextProxy={next()} />;
  };

  return BackgroundProxy;
};
