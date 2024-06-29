import { newSpecPage } from '@stencil/core/testing';
import { VAdminOverview } from '../v-admin-overview';

describe('v-admin-overview', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VAdminOverview],
      html: `<v-admin-overview></v-admin-overview>`,
    });
    expect(page.root).toEqualHtml(`
      <v-admin-overview>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-admin-overview>
    `);
  });
});
