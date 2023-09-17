import { Component, FunctionalComponent, State, Prop, Host, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'v-post-oauth',
  styleUrl: 'v-post-oauth.css',
  shadow: true,
})
export class VPostOauth {
  @Prop() history: RouterHistory;

  @State() compState: string = 'init';

  componentWillLoad() {
    if (this.history.location.state.type === 'google') {
      this.fetchDataForGoogleOAuth(this.history.location.state.token);
    }
  }

  Loader: FunctionalComponent = () => <div></div>;

  Error: FunctionalComponent = () => <div></div>;

  async fetchDataForGoogleOAuth(token: string) {}

  render() {
    return <Host></Host>;
  }
}

injectHistory(VPostOauth);
