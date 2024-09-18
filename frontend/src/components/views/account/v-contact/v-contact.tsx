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
        <l-spacer value={3}></l-spacer>
        <e-text variant="display">Contact</e-text>
        <l-spacer value={1.5}></l-spacer>
        <c-card>
          <e-text>
            To report bugs or request features, kindly reach out to us
          </e-text>
          <l-spacer value={1}></l-spacer>
          <e-text>
            Email:{" "}
            <strong>
              <e-link variant="email" url={`mailto:${Var.app.contact.email}`}>
                {Var.app.contact.email}
              </e-link>
            </strong>
          </e-text>
          <strong></strong>
          <l-spacer value={1.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1.5}></l-spacer>
          <e-text>
            Twitter:{" "}
            <strong>
              <e-link
                variant="externalLink"
                url={Var.app.contact.social.twitter}
              >
                {Var.app.contact.social.twitter}
              </e-link>
            </strong>
          </e-text>
        </c-card>
      </Host>
    );
  }
}
