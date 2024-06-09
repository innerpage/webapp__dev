import {
  Component,
  Event,
  EventEmitter,
  Prop,
  FunctionalComponent,
  Listen,
  State,
  Host,
  h,
} from "@stencil/core";
import { MatchResults, RouterHistory, injectHistory } from "@stencil/router";

import {
  generateCreateStripeSessionPayload,
  createStripeSessionApi,
} from "./helpers";

import { loadStripe } from "@stripe/stripe-js";

@Component({
  tag: "v-checkout",
  styleUrl: "v-checkout.css",
  shadow: true,
})
export class VCheckout {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() isViewDataFetched: boolean = false;
  @State() isConfirmAndPayButtonActive: boolean = false;
  @State() isConfirmAndPayButtonDisabled: boolean = true;

  @Event({
    eventName: "routeToEvent",
    bubbles: true,
  })
  routeToEvent: EventEmitter;

  @Listen("buttonClick") handleButtonClickEvent(e) {
    if (e.detail.action === "createCheckoutSession") {
      this.createStripeCheckoutSession();
    } else if (e.detail.action === "goBack") {
      this.routeToEvent.emit({
        type: "goBack",
        data: {},
      });
    }
  }

  private payload: any;
  private productId: string = "";
  private productName: string = "";
  private subscriptionType: string = "";
  private currency: string = "";
  private price: number = 0;
  private total: number = 0;
  private stripePublicKey: string = "";
  private stripe: any;

  componentWillLoad() {
    if (!this.match.params.productId) {
      this.routeToEvent.emit({
        type: "push",
        route: "/home",
        data: {},
      });
    }

    this.productId = this.match.params.productId.trim();
  }

  componentDidLoad() {
    this.fetchViewData();
  }

  async fetchViewData() {
    // Get price
    let payload = {};

    this.payload = payload;
    this.initViewData();
    this.initStripe();

    this.isViewDataFetched = true;
  }

  initViewData() {
    this.productName = this.payload.product.name;
    this.currency = this.payload.price.currency;
    this.price = this.payload.price.value;
    this.stripePublicKey = this.payload.gateway.stripePublicKey;
  }

  async initStripe() {
    this.stripe = await loadStripe(this.stripePublicKey!);
    this.isConfirmAndPayButtonDisabled = false;
  }

  async createStripeCheckoutSession() {
    let createStripeCheckoutSessionPayload: any =
      generateCreateStripeSessionPayload(this.productId);
    this.isConfirmAndPayButtonActive = true;
    let { success, message, payload } = await createStripeSessionApi(
      createStripeCheckoutSessionPayload
    );
    this.isConfirmAndPayButtonActive = false;
    if (!success) {
      return alert(message);
    }

    const { error } = await this.stripe!.redirectToCheckout({
      sessionId: payload,
    });
    console.warn(error.message);
  }

  SkelLines: FunctionalComponent = () => (
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

  Details: FunctionalComponent = () => (
    <div>
      <e-text variant="subHeading">{this.productName}</e-text>
      <e-text>{this.subscriptionType}</e-text>
      <l-spacer value={0.5}></l-spacer>
      <l-seperator></l-seperator>
    </div>
  );

  Summary: FunctionalComponent = () => (
    <div>
      {" "}
      <table>
        <tr>
          <td>Item cost</td>
          <td>
            {this.currency}
            {this.price}
          </td>
        </tr>
        <tr>
          <td>
            <strong>Grand total</strong>
          </td>
          <td>
            <strong>
              {this.currency}
              {this.total}
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
          {this.isViewDataFetched ? (
            <div>
              <this.Details></this.Details>
              <l-spacer value={0.25}></l-spacer>
              <this.Summary></this.Summary>
              <l-spacer value={0.5}></l-spacer>
              <e-text variant="footnote">Item cost includes GST</e-text>
            </div>
          ) : (
            <div>
              <this.SkelLines></this.SkelLines>
              <l-spacer value={2}></l-spacer>
              <this.SkelLines></this.SkelLines>
            </div>
          )}

          <l-spacer value={2}></l-spacer>
          <l-row justifyContent="space-between">
            <e-button action="goBack">Back</e-button>
            <e-button
              action="createCheckoutSession"
              disabled={this.isConfirmAndPayButtonDisabled}
              active={this.isConfirmAndPayButtonActive}
            >
              Confirm & pay
            </e-button>
          </l-row>
        </c-card>
      </Host>
    );
  }
}

injectHistory(VCheckout);
