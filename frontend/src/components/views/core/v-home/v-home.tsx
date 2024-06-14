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

  SessionView: FunctionalComponent = () => (
    <c-main>
      {/* Template */}
      <e-text variant="display">Overview</e-text>
      <l-spacer value={2}></l-spacer>
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
      <l-spacer value={2}></l-spacer>
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
      <l-spacer value={2}></l-spacer>
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
      <l-spacer value={2}></l-spacer>
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

      {/* Template */}
    </c-main>
  );

  NonSessionView: FunctionalComponent = () => (
    <c-main>
      <e-text variant="display">Benefits</e-text>
      <l-spacer value={2}></l-spacer>
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
            <this.SessionView></this.SessionView>
          ) : (
            <this.NonSessionView></this.NonSessionView>
          )}
        </c-content-area>
      </Host>
    );
  }
}
