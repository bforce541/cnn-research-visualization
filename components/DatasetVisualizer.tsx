import React, { useState } from 'react';
import { CIFAR_CLASSES } from '../constants';
import { ZoomIn, Database, Layers } from 'lucide-react';

const DatasetVisualizer: React.FC = () => {
  const [hoveredClass, setHoveredClass] = useState<number | null>(null);

  // Generate placeholder colors for classes since we don't have actual image files
  const getClassColor = (id: number) => {
    const hues = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
    return `hsl(${hues[id]}, 70%, 85%)`;
  };

  return (
    <section id="dataset" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">CIFAR-10 Dataset</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            The study utilizes the CIFAR-10 benchmark: 60,000 32x32 color images across 10 distinct classes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Stats Column */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Database className="text-blue-600" size={24} />
                <h3 className="font-bold text-slate-800">Data Distribution</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex justify-between">
                  <span>Total Images</span>
                  <span className="font-mono font-bold text-slate-900">60,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Training Set</span>
                  <span className="font-mono font-bold text-slate-900">50,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Test Set</span>
                  <span className="font-mono font-bold text-slate-900">10,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Image Size</span>
                  <span className="font-mono font-bold text-slate-900">32x32 px</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Layers className="text-purple-600" size={24} />
                <h3 className="font-bold text-slate-800">Preprocessing</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Images were normalized to [0, 1] range. For <strong>InceptionV3</strong>, images were upscaled to 75x75 using anti-aliasing to meet minimum input requirements.
              </p>
            </div>
          </div>

          {/* Interactive Gallery */}
          <div className="lg:col-span-2">
             <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {CIFAR_CLASSES.map((cls) => (
                  <div 
                    key={cls.id}
                    className="group relative flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setHoveredClass(cls.id)}
                    onMouseLeave={() => setHoveredClass(null)}
                  >
                    {/* Simulated Image Frame */}
                    <div 
                      className="w-full aspect-square rounded-lg shadow-sm mb-2 overflow-hidden relative transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md"
                      style={{ backgroundColor: getClassColor(cls.id) }}
                    >
                       <img 
                        src={`https://picsum.photos/200?random=${cls.id + 10}`} 
                        alt={cls.name}
                        className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                       />
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <ZoomIn className="text-white" size={24} />
                       </div>
                    </div>
                    <span className={`text-sm font-medium transition-colors ${hoveredClass === cls.id ? 'text-blue-600' : 'text-slate-600'}`}>
                      {cls.name}
                    </span>
                    
                    {/* Tooltip */}
                    {hoveredClass === cls.id && (
                      <div className="absolute z-10 bottom-full mb-2 w-40 bg-slate-900 text-white text-xs p-2 rounded shadow-lg pointer-events-none text-center">
                        {cls.description}
                      </div>
                    )}
                  </div>
                ))}
             </div>
             <div className="mt-6 text-center text-sm text-slate-400">
               Hover over classes to explore content details.
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatasetVisualizer;