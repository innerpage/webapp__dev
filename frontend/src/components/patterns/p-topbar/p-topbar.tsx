import { Component, Host, h } from "@stencil/core";
import { Store } from "../../../global/script";

@Component({
  tag: "p-topbar",
  styleUrl: "p-topbar.css",
  shadow: true,
})
export class PTopbar {
  render() {
    return (
      <Host>
        <l-row justifyContent="space-between" align="center">
          <div class="logo"></div>
          {Store.isSessionActive ? (
            <p-user-control></p-user-control>
          ) : (
            <l-row align="centre">
              <e-button variant="ghost" action="openLoginModal">
                Log in
              </e-button>
              &nbsp;&nbsp;
              <e-button action="openSignupModal">Sign up</e-button>
            </l-row>
          )}
        </l-row>
      </Host>
    );
  }
}
