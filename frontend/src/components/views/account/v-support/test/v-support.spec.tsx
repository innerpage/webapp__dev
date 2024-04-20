import { newSpecPage } from '@stencil/core/testing';
import { VSupport } from '../v-support';

describe('v-support', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSupport],
      html: `<v-support></v-support>`,
    });
    expect(page.root).toEqualHtml(`
      <v-support>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-support>
    `);
  });
});
