import { newSpecPage } from '@stencil/core/testing';
import { PUserControl } from '../p-user-control';

describe('p-user-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PUserControl],
      html: `<p-user-control></p-user-control>`,
    });
    expect(page.root).toEqualHtml(`
      <p-user-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-user-control>
    `);
  });
});
