import React, { Component, ErrorInfo, ReactNode } from 'react';

import ErrorView from '@/presentation/views/Error';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error;
  errorInfo: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    error: null as Error,
    errorInfo: null as ErrorInfo,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState(
      { error, errorInfo },
      () => { console.log(error); },
    );
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.errorInfo) {
      return <ErrorView />;
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

export default ErrorBoundary;
