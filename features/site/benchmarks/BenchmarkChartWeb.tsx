import { BenchmarkChart } from './BenchmarkChart'

export const BenchmarkChartWeb = () => (
  <BenchmarkChart
    animateEnter
    skipOthers
    large
    data={[
      { name: 'Carbon Negative', value: 95 },
      { name: 'Renewable Energy', value: 80 },
      { name: 'Food Self-Sufficiency', value: 75 },
      { name: 'Water Conservation', value: 70 },
      { name: 'Waste Reduction', value: 85 },
    ]}
  />
)
