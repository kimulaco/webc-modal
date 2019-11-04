import { newE2EPage } from '@stencil/core/testing'

describe('webc-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<webc-modal><p>Hello world</p></webc-modal>')
    const element = await page.find('webc-modal')
    expect(element).toHaveClass('hydrated')
  })
})
