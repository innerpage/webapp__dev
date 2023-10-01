import { Component, Event, EventEmitter, Listen, h } from '@stencil/core';
import { state } from '../../../global/script';
import { helper_UserControl_Api_Logout } from './helpers';

@Component({
  tag: 'p-user-control',
  styleUrl: 'p-user-control.css',
  shadow: true,
})
export class PUserControl {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'logout') {
      this.handle_Logout();
    }
  }

  async handle_Logout() {
    let { success, message, payload } = await helper_UserControl_Api_Logout();
    if (!success) {
      return alert(message);
    }

    if (!payload.success) {
      return alert(payload.message);
    }

    state.isActive_Session = payload.isActive_Session;

    this.event_RouteTo.emit({
      type: 'push',
      route: '/login',
      data: {},
    });
  }

  render() {
    return (
      <e-link url="/profile" variant="card">
        <l-row justifyContent="space-between" align="center">
          <l-row>
            <ion-icon name="person-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.25}></l-spacer>
            <e-text>{state.account_FirstName}</e-text>
          </l-row>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </l-row>
      </e-link>
    );
  }
}
