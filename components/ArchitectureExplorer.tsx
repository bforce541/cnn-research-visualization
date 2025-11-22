import React, { useState } from 'react';
import { MODELS } from '../constants';
import { Box, Zap, GitMerge, Grid } from 'lucide-react';

const ArchitectureExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MODELS[0].id);

  const activeModel = MODELS.find(m => m.id === activeTab) || MODELS[0];

  const getIcon = (id: string) => {
    switch(id) {
      case 'alexnet': return <Box />;
      case 'vgg16': return <Grid />;
      case 'resnet50': return <GitMerge />;
      case 'inceptionv3': return <Zap />;
      default: return <Box />;
    }
  };

  return (
    <section id="models" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Architecture Analysis</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation */}
          <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
            {MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveTab(model.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-200 border ${
                  activeTab === model.id
                    ? 'bg-white border-blue-200 shadow-md text-blue-600'
                    : 'bg-transparent border-transparent text-slate-500 hover:bg-white/50'
                }`}
              >
                <span className={activeTab === model.id ? 'text-blue-600' : 'text-slate-400'}>
                  {getIcon(model.id)}
                </span>
                <span className="font-semibold whitespace-nowrap">{model.name}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 min-h-[400px] flex flex-col">
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{activeModel.name}</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Introduced in {activeModel.year} by {activeModel.creators}
                </p>
              </div>
              <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-mono text-slate-600">
                {activeModel.id === 'alexnet' ? '8 Layers' : 
                 activeModel.id === 'vgg16' ? '16 Layers' : 
                 activeModel.id === 'resnet50' ? '50 Layers' : '48 Layers'}
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-8 text-lg">
              {activeModel.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-auto">
              <div className="bg-slate-50 p-5 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {activeModel.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl flex flex-col justify-center items-center text-center">
                 {/* Abstract Representation of Architecture Flow */}
                 <div className="relative w-full h-32 flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                       <div 
                        key={i} 
                        className="h-16 w-8 rounded bg-gradient-to-b opacity-80 transition-all duration-500"
                        style={{ 
                          backgroundImage: `linear-gradient(to bottom, ${activeModel.color}, #fff)`,
                          height: `${40 + Math.random() * 60}%`,
                          opacity: (i + 1) / 5
                        }}
                       />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="bg-white/90 px-2 py-1 text-xs font-mono rounded border shadow-sm">
                          Network Flow
                       </span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureExplorer;