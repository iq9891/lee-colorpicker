
import Tool from './tool';
import './drag';

const $ = window.$;

const _oDefultParams = {
  showEvent: 'click',
  onShow: $.noop,
  onBeforeShow: $.noop,
  onHide: $.noop,
  onChange: $.noop,
  onSubmit: $.noop,
  color: '3289c7',
  parent: document.body,
  submit: 1,
  submitText: 'OK',
  height: 152,
};

const _colpick = () => {
  console.log(978);
  return {
    init: (opt) => {
      opt = $.extend({}, _oDefultParams, opt || {});

      // const _$colorpick = $('#lee-colorpick');
      // const _$color = _$colorpick.find('#lee-colorpick_color');
      console.log('opt', opt);
      $('#lee-inner').drag({
        drag: '#lee-inner',
        limit: true,
        move: (moveEvent, x, y) => {
          console.log(x, y);
        },
      });
    }, // end init
  };
};

$.fn.extend({
  colpick: _colpick().init,
});
$.extend({
  colpick: {
    rgbToHex: Tool.rgbToHex,
    hexToRgb: Tool.hexToRgb,
  },
});
