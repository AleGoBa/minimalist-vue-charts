import Chart from 'chart.js/auto';

export const getNewChart = (element, type, data, options, extraConfig = {}) => {
    return new Chart(element, {
        type,
        data,
        options,
        ...extraConfig
    });
}

export const defaultOptions = {
    devicePixelRatio: 3,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        y: {
            border: {color:"#FFF"},
            beginAtZero: true,
            grid: {
                display: false
            },
            ticks: {
                display: false,
            }
        },
        x: {
            border: {color:"#FFF"},
            beginAtZero: true,
            grid: {
                display: false,
            },
            ticks: {
                color: "#2C578A",
                font: {
                    family: "'Inter var', sans-serif",
                    weight: 700,
                }
            }
        }
    },
};

export const defaultDatasetStyle = {
    fill: true,
    pointBackgroundColor: 'white',
    tension: .35,
    borderWidth: 2
}