import React from 'react';
import { CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Conclusion & Insights</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-emerald-500" />
                    <h3 className="font-bold text-slate-900">Top Performers</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                    <strong>VGG16 and InceptionV3</strong> achieved the highest validation accuracy (0.85). InceptionV3 demonstrated superior balance across metrics due to its factorized convolutions, though VGG16 remains highly effective despite its simpler, uniform architecture.
                </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="text-amber-500" />
                    <h3 className="font-bold text-slate-900">Foundational Limitations</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                    <strong>AlexNet</strong>, while foundational, showed lower accuracy (0.76), reflecting its older architecture. However, it remains computationally less demanding, making it a viable option for resource-constrained environments.
                </p>
            </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                    <TrendingUp size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Future Directions</h3>
                    <p className="text-slate-700 mb-4">
                       The study suggests exploring hybrid models combining the depth of VGG16 with the efficiency of Inception modules. Furthermore, advanced data augmentation and transfer learning could bridge the performance gap for deeper networks like ResNet50 on smaller datasets like CIFAR-10.
                    </p>
                    <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                        Key Takeaway: Select architecture based on the trade-off between accuracy requirements and computational resources.
                    </div>
                </div>
            </div>
        </div>

        <footer className="mt-20 text-center text-slate-400 text-sm border-t border-slate-100 pt-8 flex flex-col items-center">
            <p>© 2024 CNN Evaluation Study Visualization.</p>
            <p className="mt-2 mb-8">Based on "Performance Evaluation of Convolutional Neural Network Architectures for Image Classification: A Comparative Study"</p>
            
            <div className="max-w-3xl w-full bg-slate-50 border border-slate-200 rounded-lg p-6 text-left text-xs text-slate-600 shadow-sm transition-all hover:shadow-md">
              <p className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-[10px]">Primary Citation</p>
              <p className="font-serif leading-relaxed text-sm">
                Alexander, Y. (2024). Performance Evaluation of Convolutional Neural Network Architectures for Image Classification: Evaluating AlexNet, VGG16, ResNet50, and InceptionV3 on the CIFAR-10 Dataset. <em>Zenodo</em>. <a href="https://doi.org/10.5281/zenodo.13316278" className="text-blue-600 hover:underline break-all" target="_blank" rel="noreferrer">https://doi.org/10.5281/zenodo.13316278</a>
              </p>
            </div>
        </footer>
      </div>
    </section>
  );
};

export default Conclusion;