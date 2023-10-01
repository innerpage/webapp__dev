import { Component, Prop, Host, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-catch-all',
  styleUrl: 'v-catch-all.css',
  shadow: true,
})
export class VCatchAll {
  @Prop() history: RouterHistory;

  componentDidLoad() {
    if (state.isActive_Session) {
      this.history.push('/home', {});
    } else {
      this.history.push('/login', {});
    }
  }

  render() {
    return <Host></Host>;
  }
}

injectHistory(VCatchAll);
