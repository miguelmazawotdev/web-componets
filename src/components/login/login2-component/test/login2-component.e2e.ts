import { newE2EPage } from '@stencil/core/testing';

describe('login2-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<login2-component></login2-component>');

    const element = await page.find('login2-component');
    expect(element).toHaveClass('hydrated');
  });
});
