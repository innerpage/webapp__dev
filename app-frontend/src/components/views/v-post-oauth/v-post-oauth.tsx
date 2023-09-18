import { Component, Event, EventEmitter, FunctionalComponent, State, Prop, Host, h } from '@stencil/core';
import { getGoogleProfilePayloadGenerator, getGoogleProfileApi } from './helpers';
import { getGoogleProfilePayloadInterface } from './interfaces';
import { RouterHistory, injectHistory } from '@stencil/router';
import { helper_Set_State } from '../../app-root/helpers';

@Component({
  tag: 'v-post-oauth',
  styleUrl: 'v-post-oauth.css',
  shadow: true,
})
export class VPostOauth {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

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
    let { success, payload } = await getGoogleProfileApi(getGoogleProfilePayload);

    if (!success) {
      this.compState = 'error';
      return;
    }

    helper_Set_State(payload);
    this.event_RouteTo.emit({
      type: 'push',
      route: '/home',
      data: {},
    });
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
        <e-link action="login" event={true}>
          Login{' '}
        </e-link>{' '}
        /{' '}
        <e-link action="signup" event={true}>
          Sign up
        </e-link>
      </e-text>
    </div>
  );

  render() {
    return (
      <Host>
        {this.compState === 'fetching' && <this.Loader></this.Loader>}
        {this.compState === 'error' && <this.Error></this.Error>}
      </Host>
    );
  }
}

injectHistory(VPostOauth);
