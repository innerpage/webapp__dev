import { newSpecPage } from '@stencil/core/testing';
import { VPage1 } from '../v-page-1';

describe('v-page-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPage1],
      html: `<v-page-1></v-page-1>`,
    });
    expect(page.root).toEqualHtml(`
      <v-page-1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-page-1>
    `);
  });
});
