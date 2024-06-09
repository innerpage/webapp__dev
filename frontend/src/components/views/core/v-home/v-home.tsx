import { Component, Host, FunctionalComponent, h } from "@stencil/core";
import { Store } from "../../../../global/script";

@Component({
  tag: "v-home",
  styleUrl: "v-home.css",
  shadow: true,
})
export class VHome {
  componentWillLoad() {
    Store.activeView = "home";
  }

  LoggedInView: FunctionalComponent = () => (
    <c-main>
      {/* TEMPLATE CODE Starts */}
      <e-text variant="display">Overview</e-text>
      <div class="card card-full"></div>
      <l-spacer value={2}></l-spacer>
      <l-row justifyContent="space-between">
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
      </l-row>

      <l-spacer value={4}></l-spacer>

      <e-text variant="display">Insights</e-text>
      <l-row justifyContent="space-between">
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
      </l-row>
      <l-spacer value={2}></l-spacer>
      <l-row justifyContent="space-between">
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
      </l-row>

      <l-spacer value={4}></l-spacer>

      <e-text variant="display">Data Source</e-text>
      <l-row justifyContent="space-between">
        <div class="card card-half"></div>
        <div class="card card-half"></div>
      </l-row>
      <l-spacer value={2}></l-spacer>
      <l-row justifyContent="space-between">
        <div class="card card-half"></div>
        <div class="card card-half"></div>
      </l-row>

      <l-spacer value={4}></l-spacer>
      <e-text variant="display">Export</e-text>
      <l-row justifyContent="space-between">
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
      </l-row>
      <l-spacer value={2}></l-spacer>

      <l-row justifyContent="space-between">
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
      </l-row>

      {/* TEMPLATE CODE Ends */}
    </c-main>
  );

  LoggedOutView: FunctionalComponent = () => (
    <c-main>
      <e-text variant="display">Benefits</e-text>
      <div class="card card-full"></div>
      <l-spacer value={2}></l-spacer>
      <l-row justifyContent="space-between">
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
        <div class="card card-quarter"></div>
      </l-row>
    </c-main>
  );

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <p-sidebar></p-sidebar>
          {Store.isSessionActive ? (
            <this.LoggedInView></this.LoggedInView>
          ) : (
            <this.LoggedOutView></this.LoggedOutView>
          )}
        </c-content-area>
      </Host>
    );
  }
}
