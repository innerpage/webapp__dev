import { newSpecPage } from '@stencil/core/testing';
import { VPage2 } from '../v-page-2';

describe('v-page-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPage2],
      html: `<v-page-2></v-page-2>`,
    });
    expect(page.root).toEqualHtml(`
      <v-page-2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-page-2>
    `);
  });
});
