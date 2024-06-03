import { Component, Event, EventEmitter, State, Host, Prop, h, FunctionalComponent } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

import { generateCheckStripeSessionPayload, checkStripeSessionApi } from './helpers';

@Component({
  tag: 'v-payment-handle',
  styleUrl: 'v-payment-handle.css',
  shadow: true,
})
export class VPaymentHandle {
  @Event({
    eventName: 'routeToEvent',
    bubbles: true,
  })
  routeToEvent: EventEmitter;

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() isViewDataFetched: boolean = false;

  private sessionId: string;
  private titlePurchase: string;

  componentWillLoad() {
    if (!this.match.params.sessionId) {
      this.routeToEvent.emit({
        type: 'push',
        route: '/home',
        data: {},
      });
    }

    this.sessionId = this.match.params.sessionId.trim();
  }

  componentDidLoad() {
    setTimeout(() => {
      this.fetchViewData();
    }, 3000);
  }

  async fetchViewData() {
    let checkStripeSessionPayload: any = generateCheckStripeSessionPayload(this.sessionId);
    let { success, message, payload } = await checkStripeSessionApi(checkStripeSessionPayload);

    if (!success) {
      return alert(message);
    }

    this.titlePurchase = payload.titlePurchase;

    this.isViewDataFetched = true;
  }

  Skel: FunctionalComponent = () => (
    <c-card>
      <e-text>
        <strong>Confirming payment..</strong>
      </e-text>
      <div class="skel__line"></div>
      <div class="skel__line"></div>
      <div class="skel__line"></div>
    </c-card>
  );

  Default: FunctionalComponent = () => (
    <c-card>
      <e-text variant="display" theme="success">
        Payment Successful
      </e-text>
      <l-spacer value={1}></l-spacer>
      <e-text>
        You have upgraded to <strong>{this.titlePurchase} Plan</strong>
      </e-text>
      <l-spacer value={1}></l-spacer>
      <e-link url="/">Go to account</e-link>
    </c-card>
  );

  render() {
    return <Host>{this.isViewDataFetched ? <this.Default></this.Default> : <this.Skel></this.Skel>}</Host>;
  }
}

injectHistory(VPaymentHandle);
