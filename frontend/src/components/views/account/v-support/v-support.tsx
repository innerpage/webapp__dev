import { Component, Host, h } from "@stencil/core";
import { Vars, Store } from "../../../../global/script";

@Component({
  tag: "v-support",
  styleUrl: "v-support.css",
  shadow: true,
})
export class VSupport {
  componentWillLoad() {
    Store.activeView = "support";
  }

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <p-sidebar></p-sidebar>
          <c-main>
            <e-text variant="heading">Support</e-text>
            <l-spacer value={1}></l-spacer>
            <c-card>
              <e-text>
                To report bugs or request new features, kindly write to us
                at:&nbsp;
              </e-text>
              <e-link variant="email" url={`mailto:${Vars.app.contact.email}`}>
                {Vars.app.contact.email}
              </e-link>
            </c-card>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
