import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import DatasetVisualizer from './components/DatasetVisualizer';
import ArchitectureExplorer from './components/ArchitectureExplorer';
import TrainingSimulation from './components/TrainingSimulation';
import ResultsDashboard from './components/ResultsDashboard';
import Conclusion from './components/Conclusion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main>
        <Hero />
        <DatasetVisualizer />
        <ArchitectureExplorer />
        <TrainingSimulation />
        <ResultsDashboard />
        <Conclusion />
      </main>
    </div>
  );
};

export default App;