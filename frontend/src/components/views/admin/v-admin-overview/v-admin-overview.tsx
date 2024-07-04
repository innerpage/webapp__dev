import { Component, State, Host, h } from "@stencil/core";
import { Chart as ChartJS } from "chart.js/auto";
import {
  activeAccountsCountApi,
  deletedAccountsCountApi,
  notesAccountApi,
  noteCreationCountApi,
  accountCreationCountApi,
} from "./helpers";
import { IO, Store } from "../../../../global/script";

@Component({
  tag: "v-admin-overview",
  styleUrl: "v-admin-overview.css",
  shadow: true,
})
export class VAdminOverview {
  accountCreationCanvasEl!: HTMLCanvasElement;
  noteCreationCanvasEl!: HTMLCanvasElement;

  @State() activeAccountsCount: number = 0;
  @State() deletedAccountsCount: number = 0;
  @State() notesCount: number = 0;
  @State() accountCreationCount: any = [];
  @State() noteCreationCount: any = [];
  @State() activeUsers: number = 0;

  private accountCreationCtx: any;
  private noteCreationCtx: any;

  componentDidLoad() {
    ChartJS.defaults.color = "rgba(255, 255, 255, 0.8)";
    ChartJS.defaults.font.size = 14;
    ChartJS.defaults.plugins.legend.display = false;
    this.accountCreationCtx = this.accountCreationCanvasEl.getContext("2d");
    this.noteCreationCtx = this.noteCreationCanvasEl.getContext("2d");

    this.getActiveAccountsCount();
    this.getDeletedAccountsCount();
    this.getNotesCount();
    this.getAccountCreationCount();
    this.getNoteCreationCount();

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

  async getAccountCreationCount() {
    let { success, message, payload } = await accountCreationCountApi();
    if (!success) {
      return alert(message);
    }
    this.accountCreationCount = payload;
    this.accountCreationCount = [...this.accountCreationCount];
    this.renderAccountCreationChart();
  }

  async getNoteCreationCount() {
    let { success, message, payload } = await noteCreationCountApi();
    if (!success) {
      return alert(message);
    }
    this.noteCreationCount = payload;
    this.noteCreationCount = [...this.noteCreationCount];
    this.renderNoteCreationChart();
  }

  renderAccountCreationChart() {
    new ChartJS(this.accountCreationCtx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Accounts",
            data: this.accountCreationCount,
            backgroundColor: "#64b5f6",
          },
        ],
      },
    });
  }

  renderNoteCreationChart() {
    new ChartJS(this.noteCreationCtx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Notes",
            data: this.noteCreationCount,
            backgroundColor: "#64b5f6",
          },
        ],
      },
    });
  }

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
            <e-text variant="display">Account Creation</e-text>
            <l-spacer value={1}></l-spacer>
            <div class="chart__container">
              <canvas
                ref={(el) =>
                  (this.accountCreationCanvasEl = el as HTMLCanvasElement)
                }
              ></canvas>
            </div>
            <l-spacer value={8}></l-spacer>
            <e-text variant="display">Notes Creation</e-text>
            <l-spacer value={1}></l-spacer>
            <div class="chart__container">
              <canvas
                ref={(el) =>
                  (this.noteCreationCanvasEl = el as HTMLCanvasElement)
                }
              ></canvas>
            </div>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
