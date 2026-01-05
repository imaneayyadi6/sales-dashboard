'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { salesData } from '@/app/data/salesData';
import ChartTypeSwitcher from '@/app/components/molecules/ChartTypeSwitcher';

export default function SalesChart() {
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">
        Sales Overview (2022–2024)
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Mock sales data inspired by Kaggle datasets
      </p>

      <ChartTypeSwitcher
        chartType={chartType}
        setChartType={setChartType}
      />

      <ResponsiveContainer width="100%" height={300}>
        {chartType === 'bar' ? (
          <BarChart data={salesData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#2563eb" />
          </BarChart>
        ) : (
          <LineChart data={salesData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
