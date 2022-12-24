import styled from "styled-components";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Tooltip, Legend } from "chart.js";
import { Bar, Bubble } from "react-chartjs-2";
import { Chart as ChartJs } from "react-chartjs-2";
import { ChartProps, Doughnut } from "react-chartjs-2";
import { Line, Pie } from "react-chartjs-2";
import { PolarArea, Radar } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

interface ChartJsProps {
  chartJs: ChartProps;
}

export interface Chart_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes>,
    ChartJsProps {
  pie?: boolean;
  donut?: boolean;
  bar?: boolean;
  bubble?: boolean;
  chart?: boolean;
}

export class Chart_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {
  ///{
  //// this.pie = props.pie;
  //// this.donut = props.donut;
  //// this.bar = props.bar;
  //// this.bubble = props.bubble;
  //// this.chart = props.chart;
  /// }
}
export interface Chart_v2State
  extends BaseNoizState<Chart_v2Props> {}
export class Chart_v2State extends BaseNoizState<Chart_v2Props> {}

export interface Chart_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Chart_v2Props,
    Chart_v2State
  > {
  // Html: GComponent<Chart_v2Props>;
  // StyledHtml: StyledGComponent<Chart_v2Props>;
}

export class Chart_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Chart_v2Props,
  Chart_v2State
> {
  static defaultProps: Chart_v2Props = {
    layout: layouts.main,
    style: styles.defaultStyle,
    chartJs: {
      type: "doughnut",
      data: { datasets: [] },
    },
  };
  Bar = Bar;
  Bubble = Bubble;
  ChartJS = ChartJs;
  Doughnut = Doughnut;
  Line = Line;
  Pie = Pie;
  PolarArea = PolarArea;
  Radar = Radar;
  Scatter = Scatter;

  constructor(props: Chart_v2Props) {
    super(props);
    ChartJS.register(ArcElement, Tooltip, Legend);
    const state = new Chart_v2State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }

  main = (props: Chart_v2Props) => {
    let Chart: (props: any) => JSX.Element;
    Chart = this.Doughnut;
    return (
      <div className={props.className}>
        <Chart
          data={props.chartJs.data}
          options={props.chartJs.options}
        />
      </div>
    );
  };
  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  //defaultStyle = styled(this.Html)``;

  defaultStyle: StyledGComponent<Chart_v2Props> = styled(
    this.Html
  )`
    width: 23em;
    height: 23em;
    place-self: center;
    ${(props: { dynamic: any }) => props.dynamic};
  `;
  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
}
