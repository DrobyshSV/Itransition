import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import {Button, CardText} from 'react-bootstrap';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
  > {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }
  private reloadPage() {
    location.reload();
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="OOPS">
          <CardText >SomethingWasWrong</CardText>
          <Button type="button">
            Update page
          </Button>
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
