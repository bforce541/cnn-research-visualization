import React, { useState, useEffect } from 'react';
import { Play, RefreshCw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TrainingSimulation: React.FC = () => {
  const [epoch, setEpoch] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [data, setData] = useState<{epoch: number, loss: number, accuracy: number}[]>([]);

  // Simulate 50 epochs as described in paper
  const MAX_EPOCHS = 50;

  useEffect(() => {
    let interval: any;

    if (isRunning && epoch < MAX_EPOCHS) {
      interval = setInterval(() => {
        setEpoch(prev => {
          const next = prev + 1;
          // Generate synthetic learning curve data
          // Loss goes down exponentially-ish
          // Acc goes up log-ish
          const progress = next / MAX_EPOCHS;
          const randomNoise = (Math.random() - 0.5) * 0.05;
          
          const loss = Math.max(0.2, 2.5 * Math.exp(-4 * progress) + Math.abs(randomNoise));
          const accuracy = Math.min(0.90, 0.2 + 0.65 * Math.pow(progress, 0.3) + randomNoise);

          setData(d => [...d, { 
            epoch: next, 
            loss: parseFloat(loss.toFixed(3)), 
            accuracy: parseFloat(accuracy.toFixed(3)) 
          }]);

          if (next >= MAX_EPOCHS) setIsRunning(false);
          return next;
        });
      }, 100); // Fast simulation
    }

    return () => clearInterval(interval);
  }, [isRunning, epoch]);

  const reset = () => {
    setEpoch(0);
    setData([]);
    setIsRunning(true);
  };

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Training Pipeline Simulation</h2>
          <p className="text-slate-600 mt-2">
            Configuration: 50 Epochs, Batch Size 32, Adam Optimizer.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl overflow-hidden">
          <div className="flex justify-between items-center mb-6 text-white">
            <div className="flex gap-4 items-center">
              <div className="font-mono bg-slate-800 px-3 py-1 rounded">
                EPOCH: <span className="text-green-400">{epoch}</span> / {MAX_EPOCHS}
              </div>
              {!isRunning && epoch === 0 && (
                <button 
                  onClick={() => setIsRunning(true)}
                  className="flex items-center gap-2 px-4 py-1 bg-blue-600 hover:bg-blue-500 rounded text-sm font-medium transition-colors"
                >
                  <Play size={16} /> Start Training
                </button>
              )}
               {epoch > 0 && (
                <button 
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-1 bg-slate-700 hover:bg-slate-600 rounded text-sm font-medium transition-colors"
                >
                   {isRunning ? 'Restart' : <><RefreshCw size={16} /> Replay</>}
                </button>
              )}
            </div>
            <div className="flex gap-4 text-sm">
              <span className="text-rose-400">Loss: {data[data.length-1]?.loss || '-'}</span>
              <span className="text-emerald-400">Accuracy: {data[data.length-1]?.accuracy || '-'}</span>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis 
                  dataKey="epoch" 
                  stroke="#94a3b8" 
                  type="number" 
                  domain={[0, MAX_EPOCHS]}
                />
                <YAxis stroke="#94a3b8" domain={[0, 1]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#10b981" 
                  strokeWidth={2} 
                  dot={false} 
                  name="Validation Accuracy"
                />
                <Line 
                  type="monotone" 
                  dataKey="loss" 
                  stroke="#f43f5e" 
                  strokeWidth={2} 
                  dot={false}
                  name="Training Loss"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 text-center text-slate-500 text-xs">
            * Simulation based on training convergence patterns described in the paper.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSimulation;