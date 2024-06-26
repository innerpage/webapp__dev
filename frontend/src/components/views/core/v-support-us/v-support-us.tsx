import { Component, State, Host, h } from "@stencil/core";

@Component({
  tag: "v-support-us",
  styleUrl: "v-support-us.css",
  shadow: true,
})
export class VSupportUs {
  @State() isFrameLoaded: boolean = false;
  handleIframeLoad() {
    this.isFrameLoaded = true;
  }

  render() {
    return (
      <Host>
        <l-spacer value={1}></l-spacer>
        <c-main>
          <l-row>
            <e-link url="/">
              <l-row>
                <ph-arrow-left></ph-arrow-left>
                &nbsp;&nbsp;
                <e-text>Back</e-text>
              </l-row>
            </e-link>
          </l-row>
          <l-spacer value={1}></l-spacer>
          <div class="wrapper">
            <div>
              {!this.isFrameLoaded && (
                <e-text variant="heading">
                  <strong>Loading payment..</strong>
                </e-text>
              )}
              <iframe
                id="kofiframe"
                src="https://ko-fi.com/innerpage/?hidefeed=true&widget=true&embed=true&preview=true"
                height="712"
                style={{
                  border: "none",
                  width: "320px",
                  padding: "1em",
                  borderRadius: "1em",
                  height: "600px",
                }}
                title="innerpage"
                onLoad={() => this.handleIframeLoad()}
              ></iframe>
            </div>
          </div>
        </c-main>
      </Host>
    );
  }
}
