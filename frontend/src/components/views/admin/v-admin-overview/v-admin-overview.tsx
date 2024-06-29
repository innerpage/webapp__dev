import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "v-admin-overview",
  styleUrl: "v-admin-overview.css",
  shadow: true,
})
export class VAdminOverview {
  private accountCreationData: any;
  private noteCreationData: any;

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <c-main>
            <l-spacer value={2}></l-spacer>
            <e-text variant="display">Overview</e-text>
            <l-spacer value={1}></l-spacer>
            <l-row justifyContent="flex-start">
              <c-card>
                <e-text variant="heading">Accounts</e-text>
                <l-row>
                  <e-text variant="heading" theme="success">
                    4
                  </e-text>
                  <e-text variant="heading" theme="danger">
                    10
                  </e-text>
                </l-row>
              </c-card>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <c-card>
                <e-text variant="heading">
                  Notes <br /> 15
                </e-text>
              </c-card>
            </l-row>
            <l-spacer value={4}></l-spacer>
            <e-text variant="display">Account Creation</e-text>
            <l-spacer value={1}></l-spacer>
            <l-spacer value={4}></l-spacer>
            <e-text variant="display">Notes Creation</e-text>
            <l-spacer value={1}></l-spacer>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
