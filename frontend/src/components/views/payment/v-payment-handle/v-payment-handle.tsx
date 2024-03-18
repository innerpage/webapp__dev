import { Component, Event, EventEmitter, State, Host, Prop, h, FunctionalComponent } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

import { helper_Generate_Stripe_SessionCheck_Payload, helper_ApiCall_Stripe_SessionCheck } from './helpers';

@Component({
  tag: 'v-payment-handle',
  styleUrl: 'v-payment-handle.css',
  shadow: true,
})
export class VPaymentHandle {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() isFetched_ViewData: boolean = false;

  private id_Session: string;
  private title_Purchase: string;

  componentWillLoad() {
    if (!this.match.params.id_Session) {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/home',
        data: {},
      });
    }

    this.id_Session = this.match.params.id_Session.trim();
  }

  componentDidLoad() {
    setTimeout(() => {
      this.fetch_ViewData();
    }, 3000);
  }

  async fetch_ViewData() {
    let payload_Stripe_SessionCheck: any = helper_Generate_Stripe_SessionCheck_Payload(this.id_Session);
    let { success, message, payload } = await helper_ApiCall_Stripe_SessionCheck(payload_Stripe_SessionCheck);

    if (!success) {
      return alert(message);
    }

    this.title_Purchase = payload.title_Purchase;

    this.isFetched_ViewData = true;
  }

  UI_Skel: FunctionalComponent = () => (
    <c-card>
      <e-text>
        <strong>Confirming payment..</strong>
      </e-text>
      <div class="skel__line"></div>
      <div class="skel__line"></div>
      <div class="skel__line"></div>
    </c-card>
  );

  UI_Default: FunctionalComponent = () => (
    <c-card>
      <e-text variant="display" theme="success">
        Payment Successful
      </e-text>
      {/* <h1 class="text--success">Payment Successful</h1> */}
      <l-spacer value={1}></l-spacer>
      <e-text>
        You have upgraded to <strong>{this.title_Purchase} Plan</strong>
      </e-text>
      <l-spacer value={1}></l-spacer>
      <e-link url="/">Go to account</e-link>
    </c-card>
  );

  render() {
    return <Host>{this.isFetched_ViewData ? <this.UI_Default></this.UI_Default> : <this.UI_Skel></this.UI_Skel>}</Host>;
  }
}

injectHistory(VPaymentHandle);
