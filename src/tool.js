const $ = window.$;

class Tool {
  // hex 格式转成 rgb 格式
  static hexToRgb(hex) {
    const _sHex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
    return {
      r: _sHex >> 16,
      g: (_sHex & 0x00FF00) >> 8,
      b: (_sHex & 0x0000FF),
    };
  }
  // rgb 格式转成 hex 格式
  static rgbToHex(rgb) {
    const _aHex = [
      rgb.r.toString(16),
      rgb.g.toString(16),
      rgb.b.toString(16),
    ];
    $.each(_aHex, (nr, val) => {
      if (val.length === 1) {
        _aHex[nr] = `0${val}`;
      }
    });
    return _aHex.join('');
  }
}

export default Tool;
