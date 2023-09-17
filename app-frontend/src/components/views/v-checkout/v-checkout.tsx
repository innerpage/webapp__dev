import { Component, Event, EventEmitter, Prop, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

import { helper_Generate_Create_StripeSession_Payload, helper_ApiCall_Create_StripeSession } from './helpers';

import { loadStripe } from '@stripe/stripe-js';

@Component({
  tag: 'v-checkout',
  styleUrl: 'v-checkout.css',
  shadow: true,
})
export class VCheckout {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;
  @State() isFetched_ViewData: boolean = false;

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'goBack') {
      this.event_RouteTo.emit({
        type: 'goBack',
      });
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'action_Create_CheckoutSession') {
      this.create_Checkout_Session();
    }
  }

  @State() isActive_ConfirmAndPay_Button: boolean = false;
  @State() isDisabled_ConfirmAndPay_Button: boolean = true;

  private data_Checkout: any;
  // private title_Publication: string = '';
  // private edition_Publication: string = '';
  // private title_Document: string = '';
  private id_Product: string = '';
  private name_Product: string = '';
  private subscription_Type: string = '';
  private price_Currency: string = '';
  private price_Product: number = 0;
  private price_GatewayProcessing: number = 0;
  private price_Total: number = 0;
  private stripe_Key_Public: string = '';
  private stripe: any;

  componentWillLoad() {
    if (!this.match.params.id_Product) {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/home',
        data: {},
      });
    }

    this.id_Product = this.match.params.id_Product.trim();
  }

  componentDidLoad() {
    this.fetch_ViewData();
  }

  async fetch_ViewData() {
    // Get price
    let payload = {};

    this.data_Checkout = payload;
    this.init_ViewData();
    this.init_Stripe();

    this.isFetched_ViewData = true;
  }

  init_ViewData() {
    this.name_Product = this.data_Checkout.product.name;
    this.price_Currency = this.data_Checkout.price.currency;
    this.price_Product = this.data_Checkout.price.value;
    this.price_GatewayProcessing = this.data_Checkout.gateway.processing_fee;
    this.stripe_Key_Public = this.data_Checkout.gateway.stripe_Key_Public;
  }

  async init_Stripe() {
    this.stripe = await loadStripe(this.stripe_Key_Public!);
    this.isDisabled_ConfirmAndPay_Button = false;
  }

  async create_Checkout_Session() {
    let payload_Create_Stripe_CheckoutSession: any = helper_Generate_Create_StripeSession_Payload(this.id_Product);
    this.isActive_ConfirmAndPay_Button = true;
    let { success, message, payload } = await helper_ApiCall_Create_StripeSession(payload_Create_Stripe_CheckoutSession);
    this.isActive_ConfirmAndPay_Button = false;
    if (!success) {
      return alert(message);
    }

    const { error } = await this.stripe!.redirectToCheckout({
      sessionId: payload,
    });
    console.warn(error.message);
  }

  ui_Skel_Lines: FunctionalComponent = () => (
    <div>
      <l-spacer value={1}></l-spacer>
      <div class="skel__line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="skel__line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="skel__line"></div>
      <l-spacer value={1}></l-spacer>
    </div>
  );

  ui_Details: FunctionalComponent = () => (
    <div>
      <e-text variant="subHeading">{this.name_Product}</e-text>
      <e-text>{this.subscription_Type}</e-text>
      <l-spacer value={0.5}></l-spacer>
      <l-seperator></l-seperator>
    </div>
  );

  ui_Summary: FunctionalComponent = () => (
    <div>
      {' '}
      <table>
        <tr>
          <td>Item cost</td>
          <td>
            {this.price_Currency}
            {this.price_Product}
          </td>
        </tr>
        {/* <tr>
          <td>Processing fees</td>
          <td>
            {this.price_Currency}
            {this.price_GatewayProcessing}
          </td>
        </tr> */}
        <tr>
          <td>
            <strong>Grand total</strong>
          </td>
          <td>
            <strong>
              {this.price_Currency}
              {this.price_Total}
            </strong>
          </td>
        </tr>
      </table>
    </div>
  );

  render() {
    return (
      <Host>
        <c-card>
          {this.isFetched_ViewData ? (
            <div>
              <this.ui_Details></this.ui_Details>
              <l-spacer value={0.25}></l-spacer>
              <this.ui_Summary></this.ui_Summary>
              <l-spacer value={0.5}></l-spacer>
              <e-text variant="footnote">Item cost includes GST</e-text>
            </div>
          ) : (
            <div>
              <this.ui_Skel_Lines></this.ui_Skel_Lines>
              <l-spacer value={2}></l-spacer>
              <this.ui_Skel_Lines></this.ui_Skel_Lines>
            </div>
          )}

          <l-spacer value={2}></l-spacer>
          <l-row justifyContent="space-between">
            <e-text variant="footnote">
              <e-link action="goBack" event={true}>
                Back
              </e-link>
            </e-text>
            <e-button action="action_Create_CheckoutSession" disabled={this.isDisabled_ConfirmAndPay_Button} active={this.isActive_ConfirmAndPay_Button}>
              Confirm & pay
            </e-button>
          </l-row>
        </c-card>
      </Host>
    );
  }
}

injectHistory(VCheckout);
