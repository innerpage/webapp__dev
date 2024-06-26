import { Component, Host, h } from "@stencil/core";
import { Var, Store } from "../../../../global/script";

@Component({
  tag: "v-contact",
  styleUrl: "v-contact.css",
  shadow: true,
})
export class VContact {
  componentWillLoad() {
    Store.activeView = "contact";
  }

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <c-main>
            <l-spacer value={2}></l-spacer>
            <e-text variant="heading">Contact</e-text>
            <l-spacer value={1}></l-spacer>
            <c-card>
              <e-text>
                To report bugs or request new features, kindly write to us
                at:&nbsp;
              </e-text>
              <strong>
                <e-link variant="email" url={`mailto:${Var.app.contact.email}`}>
                  {Var.app.contact.email}
                </e-link>
              </strong>
            </c-card>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
