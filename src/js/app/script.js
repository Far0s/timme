// Pie chart plugin - http://codepen.io/rendro/pen/vrezp

$('.percentage').easyPieChart({
  animate: 500,
  lineWidth: 6,
  onStep: function(value) {
    this.$el.find('span').text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find('span').text(Math.round(to));
  }
});
