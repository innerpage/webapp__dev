import { Component, State, Host, Listen, h } from "@stencil/core";
import { Chart as ChartJS } from "chart.js/auto";
import {
  activeAccountsCountApi,
  deletedAccountsCountApi,
  notesAccountApi,
  activityApi,
} from "./helpers";
import { IO, Store } from "../../../../global/script";

@Component({
  tag: "v-admin-overview",
  styleUrl: "v-admin-overview.css",
  shadow: true,
})
export class VAdminOverview {
  activityChartCanvasEl!: HTMLCanvasElement;

  @Listen("textInput") handleTextInput(e) {
    if (e.detail.name === "rangeStartDate") {
      console.log(e.detail.value);
    } else if (e.detail.name === "rangeEndDate") {
      console.log(e.detail.value);
    }
  }

  @Listen("selectChangeEvent") selectChangeListener(e) {
    if (e.detail.name === "activityRangeSelector") {
      this.activityRange = e.detail.value;
      if (this.activityRange === "custom") {
        this.isCustomDate = true;
      } else {
        this.isCustomDate = false;
        this.getActivity2();
      }
    }
  }

  @State() activeAccountsCount: number = 0;
  @State() deletedAccountsCount: number = 0;
  @State() notesCount: number = 0;
  @State() activeUsers: number = 0;
  @State() activityData: any;
  @State() activityRange: string = "";
  @State() isCustomDate: boolean = false;

  private activityChartCtx: any;

  componentDidLoad() {
    ChartJS.defaults.color = "rgba(255, 255, 255, 0.8)";
    ChartJS.defaults.font.size = 14;
    ChartJS.defaults.plugins.legend.display = false;
    this.activityChartCtx = this.activityChartCanvasEl.getContext("2d");

    this.getActiveAccountsCount();
    this.getDeletedAccountsCount();
    this.getNotesCount();
    this.getActivity();

    setInterval(() => {
      IO.emit("getActiveUserCount", Store.userName);
    }, 1000);

    IO.on("activeUserCount", (activeUsers) => {
      this.activeUsers = activeUsers;
    });
  }

  async getActiveAccountsCount() {
    let { success, message, payload } = await activeAccountsCountApi();
    if (!success) {
      return alert(message);
    }
    this.activeAccountsCount = payload;
  }

  async getDeletedAccountsCount() {
    let { success, message, payload } = await deletedAccountsCountApi();
    if (!success) {
      return alert(message);
    }
    this.deletedAccountsCount = payload;
  }

  async getNotesCount() {
    let { success, message, payload } = await notesAccountApi();
    if (!success) {
      return alert(message);
    }
    this.notesCount = payload;
  }

  async getActivity() {
    let { success, message, payload } = await activityApi();
    if (!success) {
      return alert(message);
    }
    this.activityData = payload;
    this.renderActivityChart();
  }

  async getActivity2() {}

  renderActivityChart() {
    new ChartJS(this.activityChartCtx, {
      type: "line",
      data: {
        labels: this.activityData.label,
        datasets: [
          {
            label: "Notes",
            data: this.activityData.notesCount,
            borderColor: "#9FA8DA",
            borderWidth: 1,
            fill: false,
          },
          {
            label: "Accounts",
            data: this.activityData.accountCount,
            borderColor: "#F48FB1",
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color: "rgba(255,255,255,0.1)",
            },
            title: {
              display: true,
              text: "DAYS",
              font: {
                weight: "bold",
              },
            },
          },
          y: {
            grid: {
              color: "rgba(255,255,255,0.1)",
            },
            title: {
              display: true,
              text: "COUNT",
              font: {
                weight: "bold",
              },
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }

  private rangeOptions = [
    { value: "1day", label: "1 day" },
    { value: "1week", label: "1 week" },
    { value: "1month", label: "1 month" },
    { value: "3months", label: "3 months" },
    { value: "6months", label: "6 months" },
    { value: "1year", label: "1 year" },
    { value: "custom", label: "Custom" },
  ];

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <c-main>
            <l-spacer value={4}></l-spacer>
            <l-row justifyContent="flex-start">
              <c-card>
                <e-text variant="display">Accounts</e-text>
                <l-spacer value={1}></l-spacer>
                <l-row>
                  <e-text variant="display" theme="success">
                    <strong>{this.activeAccountsCount}</strong>
                  </e-text>
                  <e-text variant="display" theme="danger">
                    <strong>{this.deletedAccountsCount}</strong>
                  </e-text>
                </l-row>
              </c-card>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <c-card>
                <e-text variant="display">Notes</e-text>
                <l-spacer value={1}></l-spacer>
                <e-text variant="display">
                  <strong>{this.notesCount}</strong>
                </e-text>
              </c-card>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <c-card>
                <e-text variant="display">Active Users</e-text>
                <l-spacer value={1}></l-spacer>
                <e-text variant="display">
                  <strong>{this.activeUsers}</strong>
                </e-text>
              </c-card>
            </l-row>
            <l-spacer value={8}></l-spacer>
            <l-row>
              <e-text variant="display">Activity</e-text>
              <l-row>
                {this.isCustomDate && (
                  <l-row>
                    <e-text>From</e-text>
                    &nbsp;&nbsp;
                    <e-input type="date" name="rangeStartDate"></e-input>
                    &nbsp;&nbsp;
                    <e-text>To</e-text>
                    &nbsp;&nbsp;
                    <e-input type="date" name="rangeEndDate"></e-input>
                    &nbsp;&nbsp;
                  </l-row>
                )}
                <e-select
                  options={JSON.stringify(this.rangeOptions)}
                  name="activityRangeSelector"
                  index={1}
                ></e-select>
              </l-row>
            </l-row>
            <br />
            <br />{" "}
            <div class="chart__container">
              <canvas
                ref={(el) =>
                  (this.activityChartCanvasEl = el as HTMLCanvasElement)
                }
              ></canvas>
            </div>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
