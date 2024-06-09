import { Component, Event, EventEmitter, Host, h } from "@stencil/core";
import { Var } from "../../../../global/script";

@Component({
  tag: "v-payment-cancel",
  styleUrl: "v-payment-cancel.css",
  shadow: true,
})
export class VPaymentCancel {
  @Event({
    eventName: "routeToEvent",
    bubbles: true,
  })
  routeToEvent: EventEmitter;

  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display" theme="danger">
            Payment Failed
          </e-text>
          {/* <h1 class="text--danger">Payment Failed</h1> */}
          <l-spacer value={1}></l-spacer>
          <e-text>
            Please try purchasing again. If money was deducted <br />
            from your account/card, kindly write a mail to us at:
          </e-text>
          <e-link url={`mailto:${Var.app.contact.email}`}>
            {Var.app.contact.email}
          </e-link>
          <l-spacer value={1}></l-spacer>
          <e-link url="/">Go to account</e-link>
        </c-card>
      </Host>
    );
  }
}
