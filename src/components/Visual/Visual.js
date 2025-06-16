import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis
} from 'recharts';

const receivingCountries = [
  {
    name: 'Mozambique',
    type: 'Receiving',
    gdpPerCapita: 500,
    itemsPerCapita: 31,
    metricTons: 191570,
    population: 32163040,
  },
  {
    name: 'Ghana',
    type: 'Receiving',
    gdpPerCapita: 2445,
    itemsPerCapita: 25,
    metricTons: 149181,
    population: 31732130,
  },
  {
    name: 'Togo',
    type: 'Receiving',
    gdpPerCapita: 992,
    itemsPerCapita: 39,
    metricTons: 63042,
    population: 8478240,
  },
  {
    name: 'Haiti',
    type: 'Receiving',
    gdpPerCapita: 1815,
    itemsPerCapita: 12,
    metricTons: 26233,
    population: 11541680,
  }
];

const sendingCountries = [
  {
    name: 'USA',
    type: 'Sending',
    gdpPerCapita: 69288,
    itemsPerCapita: 11,
    metricTons: 720846,
    population: 331893740,
  },
  {
    name: 'Germany',
    type: 'Sending',
    gdpPerCapita: 50802,
    itemsPerCapita: 28,
    metricTons: 436426,
    population: 83129290,
  },
  {
    name: 'UK',
    type: 'Sending',
    gdpPerCapita: 47334,
    itemsPerCapita: 26,
    metricTons: 335152,
    population: 67326570,
  },
  {
    name: 'France',
    type: 'Sending',
    gdpPerCapita: 43519,
    itemsPerCapita: 12,
    metricTons: 157790,
    population: 67499340,
  }
];

const normalizeSize = (value, maxBubbleSize = 300) => {
  const maxTons = Math.max(...[...receivingCountries, ...sendingCountries].map(d => d.metricTons));
  return (value / maxTons) * maxBubbleSize;
};

const VisualChart = () => {
  const receiving = receivingCountries.map(c => ({
    ...c,
    bubbleSize: normalizeSize(c.metricTons)
  }));
  const sending = sendingCountries.map(c => ({
    ...c,
    bubbleSize: normalizeSize(c.metricTons)
  }));

  const OrTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
            <strong>{data.name}</strong><br />
            Type: {data.type}<br />
            GDP per Capita: ${data.gdpPerCapita.toLocaleString()}<br />
            Items per Capita: {data.itemsPerCapita}<br />
            Metric Tons: {data.metricTons.toLocaleString()}<br />
            Population: {data.population.toLocaleString()}
        </div>
        );
    }
    return null;
    };

  return (
    <section className="p-0">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ width: '100%', height: 500, marginBottom: '20vh' }}>
            <h3>Clothing Trade Imbalance: GDP vs Items per Capita</h3>
            <ResponsiveContainer>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis type="number" dataKey="gdpPerCapita" name="GDP per Capita" unit="$" />
                <YAxis type="number" dataKey="itemsPerCapita" name="Items per Capita" />
                <ZAxis type="number" dataKey="bubbleSize" range={[50, 300]} name="Metric Tons" />
                <Tooltip content={<OrTip />} cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Receiving Countries" data={receiving} fill="#8884d8" />
                <Scatter name="Sending Countries" data={sending} fill="#ff7300" />
                </ScatterChart>
            </ResponsiveContainer>
            </div>
        </div>
        {/* PortfolioOne Component */}
      </div>
    </section>
  );
};

export default VisualChart;
