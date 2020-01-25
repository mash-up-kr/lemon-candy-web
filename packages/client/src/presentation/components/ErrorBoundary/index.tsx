import React, { Component, ErrorInfo, ReactNode } from 'react';

import ErrorView from '@/presentation/views/Error';

interface Props {
  children: ReactNode;
}

interface State {
  readonly error?: Error | null | undefined;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  readonly state: State = {
    error: undefined,
  };

  componentDidCatch(error: Error | null, errorInfo: ErrorInfo): void {
    this.setState(
      { error },
      () => { console.log(errorInfo); },
    );
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <ErrorView />;
    }

    return children;
  }
}

export default ErrorBoundary;
