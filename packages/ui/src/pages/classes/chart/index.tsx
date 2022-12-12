import React from "react";
import { Chart } from "../../../HTML/React/classes";

type RgbaString = string;

export interface Labels {
  color: RgbaString;
}
export class Labels {
  constructor(public color: string) {}
}

export interface Legend {
  display: boolean;
  labels: Labels;
}
export class Legend {
  constructor(
    public display: boolean,
    public labels: Labels
  ) {}
}

export interface Title {
  display: boolean;
}
export class Title {
  constructor(public display: boolean) {}
}

export interface Plugins {
  title: Title;
  legend: Legend;
}
export class Plugins {
  constructor(
    public title: Title,
    public legend: Legend
  ) {}
}

export interface Options {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: Plugins;
}
export class Options implements Options {
  constructor(
    public responsive: boolean,
    public maintainAspectRatio: boolean,
    public plugins: Plugins
  ) {}
}

export interface Dataset {
  label: string;
  data: number[];
  backgroundColor: RgbaString[];
  borderColor: RgbaString[];
  borderWidth: number;
}
export class Dataset {
  constructor(
    public label: string,
    public data: number[],
    public backgroundColor: RgbaString[],
    public borderColor: RgbaString[],
    public borderWidth: number
  ) {}
}

export interface Data {
  labels: string[];
  datasets: Dataset[];
}
export class Data {
  constructor(
    public labels: string[],
    public datasets: Dataset[]
  ) {}
}

export interface Chart_T<Div = {}> {
  div?: Div;
  data: Data;
  options: Options;
}

type Flattened = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: RgbaString[];
      borderColor: RgbaString[];
      borderWidth: number;
    }[];
  };
  options: {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: {
      title: {
        display: boolean;
      };
      legend: {
        display: boolean;
        labels: {
          color: RgbaString;
        };
      };
    };
  };
};

export class Chart_<Div> {
  constructor(
    public data: Data,
    public options: Options,
    public div?: Div
  ) {}
}
const DATA_COUNT = 5;

const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data: Flattened = {
  data: {
    datasets: [
      {
        backgroundColor: [],
        borderColor: [],
        borderWidth: 10,
        data: [1, 2],
        label: "# votes",
      },
    ],
    labels: ["ciao", "bello"],
  },
  options: {
    maintainAspectRatio: true,
    plugins: {
      legend: { display: true, labels: { color: "" } },
      title: { display: true },
    },
    responsive: true,
  },
};

const color1 = "rgba(23, 58, 51, 1)";
const color2 = "rgba(52, 131, 115, 1)";
const color3 = "rgba(21, 191, 157, 1)";
const color4 = "rgba(106, 178, 248, 1)";
const bkgColor = [color1, color2, color3, color4];
const borCol = bkgColor;
const borWidth = 1;

const DARK = "#010814";
const labels = [
  "Promozione",
  "Investors",
  "Programmazione",
  "Artisti",
  "Stampa",
];
const darkLabel = new Labels(DARK);
const legend1 = new Legend(true, {
  color: darkLabel.color,
});
const title = new Title(true);
const plugins = new Plugins(title, legend1);
const options = new Options(true, false, plugins);

const chart1title = "Tokens Distribution";
const data1_1 = [10, 5, 10, 55, 20];
const dataset1 = new Dataset(
  chart1title,
  data1_1,
  bkgColor,
  borCol,
  borWidth
);
const datasets1 = [dataset1];
const data1 = new Data(labels, datasets1);
const tksChr1 = new Chart_(data1, options);

const chart2title = "Tokenomics";
const data2_1 = [10, 5, 10, 55, 20];
const dataset2 = new Dataset(
  chart2title,
  data2_1,
  bkgColor,
  borCol,
  borWidth
);
const datasets2 = [dataset2];
const data2 = new Data(labels, datasets2);

export default function index() {
  return <Chart type="doughnut" data={data2}></Chart>;
}
