/**
 * @file Shared config amongst all apps
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 * @license MIT License: https://opensource.org/licenses/MIT
 */

const siteMap = require('./site_map');
const siteDomains = Object.keys(siteMap).map(key => siteMap[key]);

/**
 * Configuration for all Pageviews applications.
 * Some properties may be overriden by app-specific configs
 */
class PvConfig {
  /** set instance variable (config), also defining any private methods */
  constructor() {
    let self = this;
    const formatXAxisTick = value => {
      const dayOfWeek = moment(value, this.dateFormat).isoWeekday();
      if (dayOfWeek === 1) {
        return `• ${value}`;
      } else {
        return value;
      }
    };

    const maxDate = moment().subtract(1, 'days').startOf('day');

    this.config = {
      apiLimit: 20000,
      apiThrottle: 10,
      apps: ['pageviews', 'topviews', 'langviews', 'siteviews', 'massviews', 'redirectviews'],
      chartConfig: {
        line: {
          opts: {
            scales: {
              yAxes: [{
                ticks: {
                  callback: value => this.formatYAxisNumber(value)
                }
              }],
              xAxes: [{
                ticks: {
                  callback: value => {
                    return formatXAxisTick(value);
                  }
                }
              }]
            },
            legendCallback: chart => this.config.chartLegend(self),
            tooltips: this.linearTooltips()
          },
          dataset(color) {
            return {
              color,
              backgroundColor: 'rgba(0,0,0,0)',
              borderWidth: 2,
              borderColor: color,
              pointColor: color,
              pointBackgroundColor: color,
              pointBorderColor: self.rgba(color, 0.2),
              pointHoverBackgroundColor: color,
              pointHoverBorderColor: color,
              pointHoverBorderWidth: 2,
              pointHoverRadius: 5,
              tension: self.bezierCurve === 'true' ? 0.4 : 0
            };
          }
        },
        bar: {
          opts: {
            scales: {
              yAxes: [{
                ticks: {
                  callback: value => this.formatYAxisNumber(value)
                }
              }],
              xAxes: [{
                barPercentage: 1.0,
                categoryPercentage: 0.85,
                ticks: {
                  callback: value => {
                    return formatXAxisTick(value);
                  }
                }
              }]
            },
            legendCallback: chart => this.config.chartLegend(self),
            tooltips: this.linearTooltips('label')
          },
          dataset(color) {
            return {
              color,
              backgroundColor: self.rgba(color, 0.6),
              borderColor: self.rgba(color, 0.9),
              borderWidth: 2,
              hoverBackgroundColor: self.rgba(color, 0.75),
              hoverBorderColor: color
            };
          }
        },
        radar: {
          opts: {
            scale: {
              ticks: {
                callback: value => this.formatNumber(value)
              }
            },
            legendCallback: chart => this.config.chartLegend(self),
            tooltips: this.linearTooltips()
          },
          dataset(color) {
            return {
              color,
              backgroundColor: self.rgba(color, 0.1),
              borderColor: color,
              borderWidth: 2,
              pointBackgroundColor: color,
              pointBorderColor: self.rgba(color, 0.8),
              pointHoverBackgroundColor: color,
              pointHoverBorderColor: color,
              pointHoverRadius: 5
            };
          }
        },
        pie: {
          opts: {
            legendCallback: chart => this.config.chartLegend(self),
            tooltips: this.circularTooltips
          },
          dataset(color) {
            return {
              color,
              backgroundColor: color,
              hoverBackgroundColor: self.rgba(color, 0.8)
            };
          }
        },
        doughnut: {
          opts: {
            legendCallback: chart => this.config.chartLegend(self),
            tooltips: this.circularTooltips
          },
          dataset(color) {
            return {
              color: color,
              backgroundColor: color,
              hoverBackgroundColor: self.rgba(color, 0.8)
            };
          }
        },
        polarArea: {
          opts: {
            scale: {
              ticks: {
                beginAtZero: true,
                callback: value => this.formatNumber(value)
              }
            },
            legendCallback: chart => this.config.chartLegend(self),
            tooltips: this.circularTooltips
          },
          dataset(color) {
            return {
              color: color,
              backgroundColor: self.rgba(color, 0.7),
              hoverBackgroundColor: self.rgba(color, 0.9)
            };
          }
        }
      },
      circularCharts: ['pie', 'doughnut', 'polarArea'],
      colors: ['rgba(171, 212, 235, 1)', 'rgba(178, 223, 138, 1)', 'rgba(251, 154, 153, 1)', 'rgba(253, 191, 111, 1)', 'rgba(202, 178, 214, 1)', 'rgba(207, 182, 128, 1)', 'rgba(141, 211, 199, 1)', 'rgba(252, 205, 229, 1)', 'rgba(255, 247, 161, 1)', 'rgba(217, 217, 217, 1)'],
      defaults: {
        autocomplete: 'autocomplete',
        chartType: numDatasets => numDatasets > 1 ? 'line' : 'bar',
        dateFormat: 'YYYY-MM-DD',
        localizeDateFormat: 'true',
        numericalFormatting: 'true',
        bezierCurve: 'false',
        autoLogDetection: 'false',
        beginAtZero: 'false',
        rememberChart: 'false',
        agent: 'user',
        platform: 'all-access',
        project: 'en.wikipedia.org'
      },
      globalChartOpts: {
        animation: {
          duration: 500,
          easing: 'easeInOutQuart'
        },
        hover: {
          animationDuration: 0
        },
        legend: {
          display: false
        }
      },
      linearCharts: ['line', 'bar', 'radar'],
      linearOpts: {
        scales: {
          yAxes: [{
            ticks: {
              callback: value => this.formatNumber(value)
            }
          }]
        },
        legendCallback: chart => this.config.chartLegend(chart.data.datasets, self)
      },
      daysAgo: 20,
      minDate: moment('2015-07-01').startOf('day'),
      maxDate,
      specialRanges: {
        'last-week': [moment().subtract(1, 'week').startOf('isoweek'), moment().subtract(1, 'week').endOf('isoweek')],
        'this-month': [moment().startOf('month'), moment().startOf('month').isAfter(maxDate) ? moment().startOf('month') : maxDate],
        'last-month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        'this-year': [moment().startOf('year'), moment().startOf('year').isAfter(maxDate) ? moment().startOf('year') : maxDate],
        'last-year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
        'all-time': [moment('2015-07-01').startOf('day'), maxDate],
        latest(offset = self.config.daysAgo) {
          return [moment().subtract(offset, 'days').startOf('day'), self.config.maxDate];
        }
      },
      timestampFormat: 'YYYYMMDD00',
      validParams: {
        agent: ['all-agents', 'user', 'spider', 'bot'],
        platform: ['all-access', 'desktop', 'mobile-app', 'mobile-web'],
        project: siteDomains
      }
    };
  }

  /**
   * Get config for tooltips shown on linear charts, used by Chart.js
   * @param {String} [mode] - x-axis or label depending on chart type
   * @return {Object}
   */
  linearTooltips(mode) {
    return {
      mode: mode || 'x-axis',
      callbacks: {
        label: tooltipItem => {
          if (Number.isNaN(tooltipItem.yLabel)) {
            return ' ' + $.i18n('unknown');
          } else {
            return ' ' + this.formatNumber(tooltipItem.yLabel);
          }
        }
      },
      bodyFontSize: 14,
      bodySpacing: 7,
      caretSize: 0,
      titleFontSize: 14
    };
  }

  /**
   * Get config for tooltips shown on circular charts, used by Chart.js
   * @return {Object}
   */
  get circularTooltips() {
    return {
      callbacks: {
        label: (tooltipItem, chartInstance) => {
          const value = chartInstance.datasets[tooltipItem.datasetIndex].data[tooltipItem.index],
            label = chartInstance.labels[tooltipItem.index];

          if (Number.isNaN(value)) {
            return `${label}: ${$.i18n('unknown')}`;
          } else {
            return `${label}: ${this.formatNumber(value)}`;
          }
        }
      },
      bodyFontSize: 14,
      bodySpacing: 7,
      caretSize: 0,
      titleFontSize: 14
    };
  }
}

module.exports = PvConfig;
