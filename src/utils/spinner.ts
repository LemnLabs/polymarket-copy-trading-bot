import ora from 'ora';

const spinner = ora({
    spinner: {
        interval: 80,
        frames: [
            '▁', '▂', '▃', '▄', '▅', '▆', '▇', '█',
            '▇', '▆', '▅', '▄', '▃', '▂',
        ],
    },
});

export default spinner;
