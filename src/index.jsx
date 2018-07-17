import React from 'react';
import { css } from 'emotion';

export default (setupFunction) => {
  if (setupFunction) setupFunction();

  class BackgroundProxy extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        classname: css(props.fixture.background)
      };
    }

    componentDidMount() {
      document.body.classList.add(this.state.classname);
    }

    componentWillUnmount() {
      document.body.classList.remove(this.state.classname);
    }

    static getDerivedStateFromProps(props) {
      return {
        classname: css(props.fixture.background)
      };
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.classname !== this.state.classname) {
        const body = document.body;
        body.classList.remove(prevState.classname);
        body.classList.add(this.state.classname);
      }
    }

    render() {
      const { nextProxy, ...rest } = this.props;
      const { value: NextProxy, next } = nextProxy;

      return <NextProxy {...rest} nextProxy={next()} />;
    }
  }

  return BackgroundProxy;
};
