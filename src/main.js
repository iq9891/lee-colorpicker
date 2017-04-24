// 引入scss
import './style.scss';
import './components/drag';

import Tool from './tool';

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
  height: 150,
  angleHeight: 12 / 2,
};

const _colpick = () => {
  console.log(978);
  return {
    init: (opt) => {
      opt = $.extend({}, _oDefultParams, opt || {});

      // const _$colorpick = $('#lee-colorpick');
      // const _$color = _$colorpick.find('#lee-colorpick_color');

      $('#leeInner').drag({
        drag: '#leeInner',
        limit: false,
        move: (moveEvent, x, y) => {
          console.log(x, y);
        },
      });
      $('#leeHueMove').drag({
        drag: '#leeHueMove',
        limit: true,
        direction: 'col',
        move: (moveEvent, oEleOffset, oMouseOffset) => {
          const _iMin = Math.min(opt.height, (oEleOffset.top + opt.angleHeight));
          const _iH = parseInt((360 * (opt.height - Math.max(0, _iMin))) / opt.height, 10);
          console.log(oMouseOffset, oEleOffset.top + opt.angleHeight, _iH, parseInt(_iH, 10));
          // console.log(opt.height);
        },
      });
      console.log('opt', opt);
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
