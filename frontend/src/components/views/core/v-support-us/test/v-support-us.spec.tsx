import { newSpecPage } from '@stencil/core/testing';
import { VSupportUs } from '../v-support-us';

describe('v-support-us', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSupportUs],
      html: `<v-support-us></v-support-us>`,
    });
    expect(page.root).toEqualHtml(`
      <v-support-us>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-support-us>
    `);
  });
});
