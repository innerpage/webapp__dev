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
          <e-link url="/">
            <div class="show-on-mobile">
              <e-img
                src="../../assets/logomark_white_on_black.png"
                width="2em"
              ></e-img>
            </div>
            <div class="show-on-desktop">
              <e-img
                src="../../assets/logotype_white_transparent.png"
                width="8em"
              ></e-img>
            </div>
          </e-link>
          <e-link url="/support-us">Support Us</e-link>
          {Store.isSessionActive ? (
            <p-user-control></p-user-control>
          ) : (
            <l-row align="centre">
              <e-button variant="ghost" action="goToLogin" size="small">
                Log in
              </e-button>
              &nbsp; &nbsp;
              <e-button action="goToSignup" size="small">
                Sign up
              </e-button>
            </l-row>
          )}
        </l-row>
      </Host>
    );
  }
}
