import { Component, Event, EventEmitter, FunctionalComponent, State, Prop, Host, h } from '@stencil/core';
import { getGoogleProfilePayloadGenerator, getGoogleProfileApi } from './helpers';
import { getGoogleProfilePayloadInterface } from './interfaces';
import { RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'v-post-oauth',
  styleUrl: 'v-post-oauth.css',
  shadow: true,
})
export class VPostOauth {
  @Event({
    eventName: 'authSuccessful',
    bubbles: true,
  })
  authSuccessfulEventEmitter: EventEmitter;

  @Event({
    eventName: 'routeToEvent',
    bubbles: true,
  })
  routeToEvent: EventEmitter;

  @Prop() history: RouterHistory;

  @State() compState: string = 'fetching';

  componentDidLoad() {
    if (this.history.location.state.type) {
      if (this.history.location.state.type === 'google') {
        this.getGoogleProfile(this.history.location.state.token);
      }
    }
  }

  async getGoogleProfile(token: string) {
    let getGoogleProfilePayload: getGoogleProfilePayloadInterface = getGoogleProfilePayloadGenerator(token);
    let { success } = await getGoogleProfileApi(getGoogleProfilePayload);

    if (!success) {
      this.compState = 'error';
      return;
    }

    this.authSuccessfulEventEmitter.emit();

    setTimeout(() => {
      this.routeToEvent.emit({
        type: 'push',
        route: '/',
        data: {},
      });
    }, 1000);
  }

  Loader: FunctionalComponent = () => (
    <l-row align="center">
      <p-spinner></p-spinner>&nbsp;&nbsp;<e-text>Fetching profile info..</e-text>
    </l-row>
  );

  Error: FunctionalComponent = () => (
    <div>
      <e-text theme="danger">
        <strong>Oops..</strong>
      </e-text>
      <e-text>We could not fetch your google account details. Please try again</e-text>
      <e-text>
        <e-link url="/login">Login </e-link> / <e-link url="/signup">Sign up</e-link>
      </e-text>
    </div>
  );

  render() {
    return (
      <Host>
        <div id="post-oauth-container">
          {this.compState === 'fetching' && <this.Loader></this.Loader>}
          {this.compState === 'error' && <this.Error></this.Error>}
        </div>
      </Host>
    );
  }
}

injectHistory(VPostOauth);
