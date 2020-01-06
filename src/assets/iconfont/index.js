import { createGlobalStyle } from 'styled-components';

export const GlobalIconfontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";

    /* IE9 */
    src: url('iconfont.eot?t=1578277686702');

    src:
      /* IE6-IE8 */
      url('iconfont.eot?t=1578277686702#iefix') format('embedded-opentype'),
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKUAAsAAAAABkgAAAJJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApMXwE2AiQDCAsGAAQgBYRtBzUbigXInpo8KdIyQgjYBr0tMAAhgmjs97N3h4lEi55Fk0kiFRJEQqE0K50v0Ut4/7umGbPN22QR1IhUyd4VftKUcu9fSm4EloVlJdrqqU04wJ7gGSKVPDgiPs/l9O4qoEDmB8pxL1pjUC+gXhxIge6BbbICCrlh7IIXeJ5AvWFWbdur2zHSq7CnBeJB8CTpLbgVhcVqheqGtUU8q1KbHlMT8RR9P/5zRy9JVWYX7N2vZMj8L05C3qnsOA0IHgLaXIWMRUQhjhrDOzoEY3aoD3caR46VG/xSqQQmcVS9YH+dnd0IBqHgmYSe6FFjCR5roHZE76QHEe3mxWTm4uxud4azq9378ym4falaavF4o5e5pn/V72/F2bONePzbPLKkn/m1fhW8fmpqI/7XNhTw9Zs/qipyRu0+LMG/EA5sK4bYNqaiCRu7k/Zz1NSrRwW2t3ubquk6cTzU6ppgrTGUIas1SRbGIqo0WEK1Wmuot2Btc4MOqEOUOsw7BAitnpE0+0TWqkUWxiuqdHtHtdboQL2TYM8G0yH6Q0gqyNBUnYq0LDHXrPrj3AjwciGJeXHESgCawkdddmc5tgYlwCUWmBXuVopRhrJIV8FlUChIaqDMQVrZs0oZYYeDNb3JnpZF0m8LAkkKyKBS6ighTSphQW+lv/L5CMCVFSRhR0udPwEgkxiecrFzDiDXFKVBLY9yjamCc1MUhmKQVEStglGgoECijOZROSBNsctOCBrCHE4nNlRh315V/Lt9UM/WpnCWZg1XiLJqQ8GzihAA') format('woff2'),
      url('iconfont.woff?t=1578277686702') format('woff'),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('iconfont.ttf?t=1578277686702') format('truetype'),
      /* iOS 4.1- */
      url('iconfont.svg?t=1578277686702#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont", sans-serif !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconfont-arrow-right::before {
    content: "\\e63c";
  }
`;
