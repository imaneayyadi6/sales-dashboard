type Props = {
  chartType: 'bar' | 'line';
  setChartType: (type: 'bar' | 'line') => void;
};

export default function ChartTypeSwitcher({ chartType, setChartType }: Props) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setChartType('bar')}
        className={`px-4 py-2 rounded ${
          chartType === 'bar' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        Bar
      </button>

      <button
        onClick={() => setChartType('line')}
        className={`px-4 py-2 rounded ${
          chartType === 'line' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        Line
      </button>
    </div>
  );
}
