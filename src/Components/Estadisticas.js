
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import * as d3Format from 'd3-format';
import { Stack, Animation, EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';

const data = [
    { type: 'Vacas', Completas: 10, Incompletas: 11 },
    { type: 'Mantenimiento', Completas: 20, Incompletas: 19 },
    { type: 'Lotes', Completas: 3, Incompletas: 9 },
];


const Root = withStyles({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
})(({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
));

const Label = withStyles({
    label: {
        whiteSpace: 'nowrap',
    },
})(({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
));

const TitleText = withStyles({ title: { marginBottom: '30px' } })(({ classes, ...restProps }) => (
    <Title.Text {...restProps} className={classes.title} />
));

const tooltipContentTitleStyle = {
    fontWeight: 'bold',
    paddingBottom: 0,
};

const tooltipContentBodyStyle = {
  paddingTop: 0,
};

const formatTooltip = d3Format.format(',.2r');

const TooltipContent = (props) => {
    const { targetItem, text, ...restProps } = props;
    return (
        <div>
            <div>
                <Tooltip.Content
                  {...restProps}
                  style={tooltipContentTitleStyle}
                  text={targetItem.series}
                />
            </div>
            <div>
                <Tooltip.Content
                  {...restProps}
                  style={tooltipContentBodyStyle}
                  text={parseInt(formatTooltip(data[targetItem.point][targetItem.series]))}
                />
            </div>
        </div>
    );
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: null,
      tooltipTarget: null,
      tooltipEnabled: true,
    };
    this.changeHover = hover => this.setState({ hover });
    this.changeTooltip = targetItem => this.setState({ tooltipTarget: targetItem });
  };

  render() {
    const { hover, tooltipTarget, tooltipEnabled } = this.state;

    return (
      <Paper>
        <Chart
          data={data}
        >
        <ArgumentAxis />
        <ValueAxis />
        <Title
          text="Cantidad de tareas semanales por tipo"
          textComponent={TitleText}
        />
  
        <BarSeries
          name="Completas"
          valueField="Completas"
          argumentField="type"
          color="rgb(11, 163, 52)"
          
        />

        <BarSeries
          name="Incompletas"
          valueField="Incompletas"
          argumentField="type"
          color="rgb(163, 11, 11)"
        />  
        
        <Stack
          stacks={[
            { series: ['Completas', 'Incompletas'] },
          ]}
        />

        <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
        <EventTracker />
        <HoverState hover={hover} onHoverChange={this.changeHover} />
        <Tooltip 
          targetItem={tooltipEnabled && tooltipTarget}
          onTargetItemChange={this.changeTooltip}
          contentComponent={TooltipContent}
        />
        <Animation />
        </Chart>
      </Paper>
    );
  }
}
