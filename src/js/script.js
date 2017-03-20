import Sample from './lib/Sample';
import $ from 'jquery';

const sample = new Sample({
    name: 'world'
});

$('.wrapper').on('click', () => {
    console.log(`hello, ${sample.name}.`);
});

$(function() {
  var map = $('iframe');
  map.css('pointer-events', 'none');
  $('#access').click(function() {
    map.css('pointer-events', 'auto');
  });
  map.mouseout(function() {
    map.css('pointer-events', 'none');
  })
})
