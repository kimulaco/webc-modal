import { Component, h, Element, Prop, State, Method } from '@stencil/core'
import flameAnimate from 'flame-animate'

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
  @Element() el: HTMLElement;

  @Prop() duration: number = 500

  @State() isShow: boolean = false

  @Method() async show(): Promise<void> {
    this.el.style.opacity = '0'
    this.isShow = true
    await flameAnimate.start(this.duration, (progress: number) => {
      this.el.style.opacity = String(progress)
    })
    return
  }

  @Method() async hide(): Promise<void> {
    await flameAnimate.start(this.duration, (progress: number) => {
      this.el.style.opacity = String(1 - progress)
    })
    this.isShow = false
    return
  }

  render() {
    let rootClassName = 'webc-modal'

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
