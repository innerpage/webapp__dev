import { Component, Host, h } from "@stencil/core";
import { Store, Var } from "../../../global/script";

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
            <e-img src={Var.app.logo.rectangle.colour} width="8em"></e-img>
          </e-link>
          {Store.isSessionActive ? (
            <p-user-control></p-user-control>
          ) : (
            <l-row align="centre">
              <e-button variant="ghost" action="openLoginModal" size="small">
                Log in
              </e-button>
              &nbsp; &nbsp;
              <e-button action="openSignupModal" size="small">
                Sign up
              </e-button>
            </l-row>
          )}
        </l-row>
      </Host>
    );
  }
}
