import { Component, Prop, Host, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'v-catch-all',
  styleUrl: 'v-catch-all.css',
  shadow: true,
})
export class VCatchAll {
  @Prop() history: RouterHistory;

  componentDidLoad() {
    this.history.push('/', {});
  }

  render() {
    return <Host></Host>;
  }
}

injectHistory(VCatchAll);
