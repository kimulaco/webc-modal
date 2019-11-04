import { Component, h, State, Method } from '@stencil/core'

interface ClassNames {
  [key: string]: string
}

const CLASS_NAMES: ClassNames = {
  show: 'show',
  showEnter: 'show-enter',
  showLeave: 'show-leave'
}

@Component({
  tag: 'webc-modal',
  styleUrl: 'webc-modal.css',
  shadow: true
})

export class WebcModal {
  @State() isShow: boolean = false
  @State() isShowEnter: boolean = false
  @State() isShowLeave: boolean = false

  @Method() show(): Promise<void> {
    this.isShowEnter = true
    this.isShow = true
    return Promise.resolve()
  }

  @Method() hide(): Promise<void> {
    this.isShowLeave = true
    this.isShow = false
    return Promise.resolve()
  }

  render() {
    let rootClassName = 'webc-modal'

    if (this.isShowEnter) {
      rootClassName += ` ${CLASS_NAMES.isShowEnter}`
    }

    if (this.isShowLeave) {
      rootClassName += ` ${CLASS_NAMES.isShowLeave}`
    }

    if (this.isShow) {
      rootClassName += ` ${CLASS_NAMES.show}`
    }

    return <div
      class={rootClassName}
      onClick={this.hide.bind(this)}
    >
      <div class="webc-modal_inner">
        <div
          class="webc-modal_content"
          onClick={(event) => {event.stopPropagation()}}
        >
          <slot />
        </div>
        <button
          class="webc-modal_close"
          type="button"
          onClick={() => {
            this.hide.bind(this)
          }}
        >Close</button>
      </div>
    </div>
  }
}
