import {
    BarElement,
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { ChartDataValue } from "../../../types/combatLogTypes";
import { ThemeType } from "../../../types/commonTypes";
import { useTheme } from "../../Effects/useLocalStorageValue";
import { WindowSize, useWindowSize } from "../../Effects/useWindowSize";
import { chartCanvasBackgroundColorPlugin } from "./chartCanvasBackgroundColorPlugin";
import { chartCogmindBackgroundColor, chartDarkBackgroundColor, chartGridColor, chartTextColor } from "./chartColors";

// Need to register functionality that gets used or else
// it gets tree-shaken out
ChartJS.register(BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

export type HorizontalBarChartProps = {
    chartTitle: string;
    values: ChartDataValue[];
    barColors: string[];

    // Override the normal displayed maximum, used for displaying a
    // subset of values in ascending order while keeping the maximum
    // values still showing in the graph
    maxValue?: number;

    valuesArePercentages?: boolean;
};

export default function HorizontalBarChart({
    chartTitle,
    values,
    barColors,
    maxValue,
    valuesArePercentages,
}: HorizontalBarChartProps) {
    const windowSize = useWindowSize();
    const theme = useTheme();

    return (
        <Bar
            data={makeChartData(chartTitle, values, barColors)}
            options={makeChartOptions(chartTitle, maxValue, theme, windowSize, valuesArePercentages || false)}
            plugins={[chartCanvasBackgroundColorPlugin]}
        />
    );
}

function makeChartData(valueLabel: string, values: ChartDataValue[], barColors: string[]): ChartData<"bar"> {
    return {
        labels: values.map((d) => d.label),
        datasets: [
            {
                label: valueLabel,
                data: values.map((d) => d.value),
                backgroundColor: barColors,
                borderColor: barColors,
            },
        ],
    };
}

function makeChartOptions(
    chartTitle: string,
    maxValue: number | undefined,
    theme: ThemeType,
    windowSize: WindowSize,
    valuesArePercentages: boolean,
): ChartOptions<"bar"> {
    return {
        animation: {
            duration: 300,
        },
        color: chartTextColor,
        indexAxis: "y",
        interaction: {
            axis: "y",
            intersect: false,
        },
        maintainAspectRatio: false,
        plugins: {
            chartCanvasBackgroundColor: {
                color: theme === "Cogmind" ? chartCogmindBackgroundColor : chartDarkBackgroundColor,
            },
            legend: {
                // Already show names of each dataset, don't need the legend
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context): string => {
                        if (valuesArePercentages) {
                            const percentage = Number(context.formattedValue.replace(",", "")).toFixed(1);
                            return `${chartTitle}: ${percentage}%`;
                        } else {
                            // Add the overall percentage of each bar's tooltip
                            const value = Number(context.formattedValue.replace(",", ""));

                            const sum = context.chart.data.datasets[0].data
                                .map((d) => Number(d))
                                .reduce((a, b) => a + b, 0);

                            const percentage = ((value * 100) / sum).toFixed(1);

                            return `${chartTitle}: ${value} (${percentage}%) `;
                        }
                    },
                },
            },
            title: {
                color: chartTextColor,
                font: {
                    size: Math.min(20, windowSize.width / 22),
                },
                display: true,
                text: chartTitle,
            },
        },
        scales: {
            x: {
                border: {
                    display: false,
                },
                grid: {
                    color: chartGridColor,
                },
                max: maxValue,
                ticks: {
                    color: chartTextColor,
                    // No point in showing decimal places
                    precision: 0,
                    callback(tickValue, _index, _ticks) {
                        if (valuesArePercentages) {
                            return tickValue + "%";
                        } else {
                            return tickValue;
                        }
                    },
                },
            },
            y: {
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    color: chartTextColor,
                },
            },
        },
    };
}
