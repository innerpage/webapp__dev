import { Component, Host, h } from "@stencil/core";
import { Store } from "../../../../global/script";

@Component({
  tag: "v-billing",
  styleUrl: "v-billing.css",
  shadow: true,
})
export class VBilling {
  componentWillLoad() {
    Store.activeView = "billing";
  }

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <c-main>
            <e-text variant="heading">Billing</e-text>
            <l-spacer value={1}></l-spacer>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
