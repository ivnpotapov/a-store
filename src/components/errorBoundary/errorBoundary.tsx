import { Component, ErrorInfo, ReactNode } from 'react';

import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';

import { ROUTES, TEXT } from 'constants/index';

import cl from './errorBoundary.module.css';

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handelHome() {
    window.location.href = ROUTES.index;
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={cl.wrap}>
          <Typography.TitleResponsive tag='div' color='primary' weight='bold' view='medium'>
            {TEXT.page404.mainText}
          </Typography.TitleResponsive>
          <Button size='l' view='primary' onClick={this.handelHome}>
            {TEXT.page404.buttonText}
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
