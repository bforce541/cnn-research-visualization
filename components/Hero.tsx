import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200 blur-[100px]" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
          Research Visualization
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Performance Evaluation of <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            CNN Architectures
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto serif leading-relaxed">
          A comparative study of <span className="font-semibold text-slate-800">AlexNet, VGG16, ResNet50, and InceptionV3</span> using the CIFAR-10 dataset. Exploring accuracy, precision, and computational trade-offs in image classification.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#results" className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            View Results
          </a>
          <a href="#models" className="px-8 py-3 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium hover:bg-slate-50 transition-all">
            Explore Models
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;