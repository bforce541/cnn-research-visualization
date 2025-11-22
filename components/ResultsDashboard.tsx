import React, { useState } from 'react';
import { MODELS } from '../constants';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const ResultsDashboard: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState(MODELS[1].id); // Default to VGG16 (high performer)

  const selectedModel = MODELS.find(m => m.id === selectedModelId) || MODELS[0];

  // Data for Overall Comparison Bar Chart
  const overallData = MODELS.map(m => ({
    name: m.name,
    Accuracy: m.metrics.accuracy,
    F1: m.metrics.f1Score,
    fill: m.color
  }));

  // Data for Radar Chart (Class Performance)
  const radarData = selectedModel.classMetrics.map(m => ({
    subject: m.className,
    A: m.f1Score,
    fullMark: 1,
  }));

  return (
    <section id="results" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Model Performance Evaluation</h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
          Detailed metrics extracted from validation testing on the CIFAR-10 test set.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Overall Comparison */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Validation Accuracy Comparison</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={overallData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis domain={[0.6, 1]} hide />
                  <Tooltip 
                     cursor={{ fill: '#f8fafc' }}
                     contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="Accuracy" radius={[4, 4, 0, 0]} barSize={50}>
                    {overallData.map((entry, index) => (
                        <cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-sm">
                {overallData.map(d => (
                    <div key={d.name}>
                        <div className="font-bold text-slate-900">{d.Accuracy}</div>
                        <div className="text-slate-500 text-xs">{d.name}</div>
                    </div>
                ))}
            </div>
          </div>

          {/* Detailed Per-Class Analysis */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-slate-800">Class-wise F1 Score</h3>
                <select 
                    className="bg-slate-100 border-none text-sm rounded-md px-3 py-1 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={selectedModelId}
                    onChange={(e) => setSelectedModelId(e.target.value)}
                >
                    {MODELS.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
            </div>
            
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 1]} tick={false} axisLine={false} />
                        <Radar
                            name={selectedModel.name}
                            dataKey="A"
                            stroke={selectedModel.color}
                            fill={selectedModel.color}
                            fillOpacity={0.3}
                        />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <div className="text-center text-xs text-slate-400 mt-2">
                Performance shape on 10 distinct classes. Larger area indicates better generalization.
            </div>
          </div>
        </div>

        {/* Heatmap Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h3 className="font-semibold text-slate-800">Detailed Evaluation Logs (Appendix A)</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                            <th className="px-6 py-3">Class</th>
                            {MODELS.map(m => (
                                <th key={m.id} className="px-6 py-3 text-center">{m.name} (F1)</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {selectedModel.classMetrics.map((_, idx) => {
                            // We use the index to get the class name (assuming sorted order in constants)
                            const className = selectedModel.classMetrics[idx].className;
                            return (
                                <tr key={className} className="border-b border-slate-100 hover:bg-slate-50">
                                    <td className="px-6 py-3 font-medium text-slate-900">{className}</td>
                                    {MODELS.map(m => {
                                        const score = m.classMetrics[idx].f1Score;
                                        // Color coding based on score
                                        const intensity = score >= 0.9 ? 'bg-emerald-100 text-emerald-700' :
                                                          score >= 0.8 ? 'bg-blue-50 text-blue-700' :
                                                          score >= 0.7 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700';
                                        return (
                                            <td key={m.id} className="px-6 py-3 text-center">
                                                <span className={`px-2 py-1 rounded font-mono font-bold ${intensity}`}>
                                                    {score.toFixed(2)}
                                                </span>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDashboard;