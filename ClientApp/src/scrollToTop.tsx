import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  pathname: string;
}

type AllProps = RouteComponentProps<RouteParams>;

class ScrollToTop extends React.Component<AllProps> {
  componentDidUpdate(prevProps: Readonly<AllProps>) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
