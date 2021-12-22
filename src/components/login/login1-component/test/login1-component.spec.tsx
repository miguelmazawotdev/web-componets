import { newSpecPage } from '@stencil/core/testing';
import { Login1Component } from '../login1-component';

describe('login1-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Login1Component],
      html: `<login1-component></login1-component>`,
    });
    expect(page.root).toEqualHtml(`
      <login1-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </login1-component>
    `);
  });
});
