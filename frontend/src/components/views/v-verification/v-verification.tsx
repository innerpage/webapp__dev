import { Component, Event, EventEmitter, FunctionalComponent, State, Prop, Host, h } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'v-verification',
  styleUrl: 'v-verification.css',
  shadow: true,
})
export class VVerification {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() isDataFetched: boolean = false;

  private type: string;
  private code: string;

  componentWillLoad() {
    if (!this.match.params.type || !this.match.params.code) {
      return this.event_RouteTo.emit({
        type: 'push',
        route: '/',
        data: {},
      });
    }
    this.type = this.match.params.type.trim();
    this.code = this.match.params.code.trim();
  }

  DataFetchedView: FunctionalComponent = () => (
    <div>
      {this.type === 'email' && <e-text>Email Verification</e-text>}
      {this.type === 'reset-password' && <e-text>Reset Password</e-text>}
    </div>
  );

  DataNotFetchedView: FunctionalComponent = () => (
    <l-row align="center">
      <p-spinner theme="dark"></p-spinner>
      <e-text>Verifying..</e-text>
    </l-row>
  );

  render() {
    return <Host>{this.isDataFetched ? <this.DataFetchedView></this.DataFetchedView> : <this.DataNotFetchedView></this.DataNotFetchedView>}</Host>;
  }
}

injectHistory(VVerification);
