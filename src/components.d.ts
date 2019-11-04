/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WebcModal {
    'duration': number;
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
  }
}

declare global {


  interface HTMLWebcModalElement extends Components.WebcModal, HTMLStencilElement {}
  var HTMLWebcModalElement: {
    prototype: HTMLWebcModalElement;
    new (): HTMLWebcModalElement;
  };
  interface HTMLElementTagNameMap {
    'webc-modal': HTMLWebcModalElement;
  }
}

declare namespace LocalJSX {
  interface WebcModal {
    'duration'?: number;
  }

  interface IntrinsicElements {
    'webc-modal': WebcModal;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'webc-modal': LocalJSX.WebcModal & JSXBase.HTMLAttributes<HTMLWebcModalElement>;
    }
  }
}


