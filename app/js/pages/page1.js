$(document).ready(function() {


  var labels = ['Emergency', 'Critical', 'Planning'];

  var data1 = {
    series: [4908, 5383, 3306]
  };

  var sum = function(a, b) { return a + b };

  new Chartist.Pie('.ct-chart-1', data1, {
    labelInterpolationFnc: function(value, idx) {
      var percentage = Math.round(value / data1.series.reduce(sum) * 100) + '%';
      return labels[idx] + " (" + percentage + ")";
    }
  });


  new Chartist.Bar('.ct-chart-2', {
    labels: ['Emergency', 'Critical', 'Planning'],
    series: [
      [31, 27, 24],
      [5, 13, 0],
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return value + "%";
      }
    },
    high: 50,
    low: 0,
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });


});
