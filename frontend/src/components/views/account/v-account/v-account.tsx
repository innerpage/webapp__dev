import { Component, Host, h } from "@stencil/core";
import { Store } from "../../../../global/script";

@Component({
  tag: "v-account",
  styleUrl: "v-account.css",
  shadow: true,
})
export class VAccount {
  componentWillLoad() {
    Store.activeView = "account";
  }

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <c-main>
            <e-text variant="heading">Account</e-text>
            <l-spacer value={1}></l-spacer>
            <c-card>
              <e-text variant="footnote">USERNAME</e-text>
              <p-editable-text
                type="text"
                value={Store.userName}
                name="userName"
              ></p-editable-text>
              <l-spacer value={1.25}></l-spacer>
              <l-seperator></l-seperator>
              <l-spacer value={1.25}></l-spacer>
              <e-text variant="footnote">PASSWORD</e-text>
              <p-editable-text
                type="password"
                value="********"
                name="password"
              ></p-editable-text>
            </c-card>
            <l-spacer value={1.5}></l-spacer>
            <e-link url="/delete-account" theme="danger">
              <l-row>
                <ph-trash
                  color="var(--color__red--200)"
                  weight={Store.activeView === "page1" ? "fill" : "regular"}
                ></ph-trash>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Delete account and data</e-text>
              </l-row>
            </e-link>
          </c-main>{" "}
        </c-content-area>
      </Host>
    );
  }
}
