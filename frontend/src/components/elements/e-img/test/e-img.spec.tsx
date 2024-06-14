import { newSpecPage } from '@stencil/core/testing';
import { EImg } from '../e-img';

describe('e-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EImg],
      html: `<e-img></e-img>`,
    });
    expect(page.root).toEqualHtml(`
      <e-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-img>
    `);
  });
});
