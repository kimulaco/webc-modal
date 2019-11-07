import { newE2EPage } from '@stencil/core/testing'

const COMPONENT_NAME = 'webc-modal'
const ROOT_ELEMENT = `${COMPONENT_NAME} >>> .webc-modal`

describe('webc-modal', () => {
  describe('Component', () => {
    it('render', async () => {
      const page = await newE2EPage()
      await page.setContent(
        `<webc-modal>
          <p>Hello world</p>
        </webc-modal>`
      )
      const component = await page.find(COMPONENT_NAME)
      expect(component).toHaveClass('hydrated')
    })
  })

  describe('Methods', () => {
    it('show()', async () => {
      const page = await newE2EPage()
      await page.setContent(
        `<webc-modal>
          <p>Hello world</p>
        </webc-modal>`
      )
      const component = await page.find(COMPONENT_NAME)
      const rootElement = await page.find(ROOT_ELEMENT)
      expect(rootElement).not.toHaveClass('show')

      await component.callMethod('show')
      await page.waitForChanges()
      expect(rootElement).toHaveClass('show')
    })

    it('hide()', async () => {
      const page = await newE2EPage()
      await page.setContent(
        `<webc-modal>
          <p>Hello world</p>
        </webc-modal>`
      )
      const component = await page.find(COMPONENT_NAME)
      const rootElement = await page.find(ROOT_ELEMENT)

      await component.callMethod('show')
      await page.waitForChanges()
      expect(rootElement).toHaveClass('show')

      await component.callMethod('hide')
      await page.waitForChanges()
      expect(rootElement).not.toHaveClass('show')
    })
  })
})
