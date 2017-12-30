import React, { Component } from 'react';
import styled from 'styled-components';
import { Router } from '../../routes';
import { colors, sizes, transitions } from '../../theme/constants';

const TIME_OUT = 500;
const delay = fn => setTimeout(fn, TIME_OUT);

export default class LoadingBar extends Component {
  state = {
    progress: 0,
    done: false,
  };

  componentDidMount() {
    this.mounted = true;
    Router.onRouteChangeStart = () => {
      this.startAutoIncrement();
    };
    Router.onRouteChangeComplete = () => this.done();
    Router.onRouteChangeError = () => this.done();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  setStateMounted(state) {
    if (this.mounted) {
      this.setState(state);
    }
  }

  done() {
    this.setState({progress: 100}, this.hide);
  }

  startAutoIncrement() {
    const increment = setInterval(() => {
      const { progress } = this.state;
      if (progress < 100) {
        const value = progress + Math.ceil(Math.random() * 10);
        this.setStateMounted({ progress: value >= 100 ? 100 : value });
      } else {
        clearInterval(increment);
      }
    }, Math.ceil(Math.random() * 1000));
  }

  hide = () => {
    delay(() => this.setStateMounted({done: true}, this.reset));
  }

  reset = () => {
    delay(() => this.setStateMounted({progress: 0}, () => {
      delay(() => this.setStateMounted({done: false}));
    }));
  }

  render() {
    const { progress, done } = this.state;
    return (
      <StyledLoadingBar
        style={{width: `${progress}%`, opacity: `${done ? 0 : 1}`}}
      />
    );
  }
}

const StyledLoadingBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.loading_bar};
  height: ${sizes.loading_bar};
  transition: ${transitions.loading_bar};
`;
