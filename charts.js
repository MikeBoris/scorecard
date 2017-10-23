/*
 * charts:
 *
 * si, case trends (line)
 * investment/amts (bar)
 * etc (donut)
 *
 * 
 */
Morris.Line({
  element: 'line-example',
  data: [
    { y: '2006', a: 30, b: 90 },
    { y: '2007', a: 40,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 60,  b: 65 },
    { y: '2010', a: 70,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 },
    { y: '2013', a: 79, b: 90 },
    { y: '2014', a: 72, b: 90 },
    { y: '2015', a: 85, b: 90 },
    { y: '2016', a: 67, b: 90 },
    { y: '2017', a: 47, b: 15 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Dog Problems Issues', 'Dog Problems Cases']
});

/*
 * Bar
 */
Morris.Bar({
  element: 'bar-example',
  data: [
    { y: 'FY 2016', a: 80, b: 70 },
    { y: 'FY 2017', a: 100, b: 90 },

  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Dog', 'Dog\'s Market Average']
});

/*
 * Donut
 */
Morris.Donut({
  element: 'donut-example',
  data: [
    {label: "Health Score", value: 12}
  ],
  resize:True;
});

/*
 * Etc - eg Types of Problems
 */
Morris.Donut({
  element: 'etc-donut-example',
  data: [
    {label: "Software", value: 12},
    {label: "Content", value: 24},
    {label: "Misc", value: 12}
  ],
  resize:True;
});

/*
 * metrics
 */
Morris.Donut({
  element: 'metric-1',
  data: [
    {label: "Software", value: 12},
    {label: "Content", value: 24},
    {label: "Misc", value: 12}
  ],
  resize:True;
});
Morris.Donut({
  element: 'metric-2',
  data: [
    {label: "Software", value: 12},
    {label: "Content", value: 24},
    {label: "Misc", value: 12}
  ],
  resize:True;
});
Morris.Donut({
  element: 'metric-3',
  data: [
    {label: "Software", value: 12},
    {label: "Content", value: 24},
    {label: "Misc", value: 12}
  ],
  resize:True;
});