import { Component, Host, h } from "@stencil/core";
import { Store } from "../../../../global/script";

@Component({
  tag: "v-page-1",
  styleUrl: "v-page-1.css",
  shadow: true,
})
export class VPage1 {
  componentWillLoad() {
    Store.activeView = "page1";
  }

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <p-sidebar></p-sidebar>
          <c-main>
            {/* TEMPLATE CODE Starts */}
            <e-text variant="display">Page 1</e-text>
            <div class="card card-full"></div>
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
            <l-spacer value={2}></l-spacer>
            <l-row justifyContent="space-between">
              <div class="card card-quarter"></div>
              <div class="card card-quarter"></div>
              <div class="card card-quarter"></div>
              <div class="card card-quarter"></div>
            </l-row>

            <l-spacer value={4}></l-spacer>

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
        </c-content-area>
      </Host>
    );
  }
}
