import { ModelData, CifarClass } from './types';

export const CIFAR_CLASSES: CifarClass[] = [
  { id: 0, name: 'Airplane', description: 'Fixed-wing aircraft' },
  { id: 1, name: 'Automobile', description: 'Passenger cars' },
  { id: 2, name: 'Bird', description: 'Avian species' },
  { id: 3, name: 'Cat', description: 'Domestic felines' },
  { id: 4, name: 'Deer', description: 'Hoofed ruminants' },
  { id: 5, name: 'Dog', description: 'Canines' },
  { id: 6, name: 'Frog', description: 'Amphibians' },
  { id: 7, name: 'Horse', description: 'Equines' },
  { id: 8, name: 'Ship', description: 'Watercraft' },
  { id: 9, name: 'Truck', description: 'Cargo vehicles' },
];

// Data extracted from Appendix A (Pages 14-17) and Results (Page 9)
export const MODELS: ModelData[] = [
  {
    id: 'alexnet',
    name: 'AlexNet',
    year: 2012,
    creators: 'Krizhevsky et al.',
    description: 'Revolutionized computer vision by winning the 2012 ImageNet competition. It features eight layers: five convolutional layers followed by three fully connected layers. Key innovations include ReLU activation and Dropout.',
    keyFeatures: ['5 Conv Layers', 'ReLU Activation', 'Dropout Regularization', 'Data Augmentation'],
    color: '#3b82f6', // Blue
    metrics: {
      accuracy: 0.76,
      precision: 0.76,
      recall: 0.76,
      f1Score: 0.76
    },
    classMetrics: [
      { className: 'Airplane', precision: 0.76, recall: 0.80, f1Score: 0.78, support: 1000 },
      { className: 'Automobile', precision: 0.84, recall: 0.93, f1Score: 0.89, support: 1000 },
      { className: 'Bird', precision: 0.80, recall: 0.58, f1Score: 0.67, support: 1000 },
      { className: 'Cat', precision: 0.71, recall: 0.45, f1Score: 0.55, support: 1000 },
      { className: 'Deer', precision: 0.79, recall: 0.67, f1Score: 0.72, support: 1000 },
      { className: 'Dog', precision: 0.68, recall: 0.68, f1Score: 0.68, support: 1000 },
      { className: 'Frog', precision: 0.71, recall: 0.88, f1Score: 0.79, support: 1000 },
      { className: 'Horse', precision: 0.70, recall: 0.89, f1Score: 0.78, support: 1000 },
      { className: 'Ship', precision: 0.84, recall: 0.89, f1Score: 0.86, support: 1000 },
      { className: 'Truck', precision: 0.81, recall: 0.86, f1Score: 0.84, support: 1000 },
    ]
  },
  {
    id: 'vgg16',
    name: 'VGG16',
    year: 2014,
    creators: 'Simonyan & Zisserman (Oxford)',
    description: 'Celebrated for its simplicity and depth, employing 16 layers with small 3x3 convolutional filters. It emphasizes uniformity, leading to improved performance in image classification tasks.',
    keyFeatures: ['16 Layers', '3x3 Conv Filters', 'Uniform Architecture', 'Deep Network'],
    color: '#10b981', // Emerald
    metrics: {
      accuracy: 0.85,
      precision: 0.85,
      recall: 0.85,
      f1Score: 0.85
    },
    classMetrics: [
      { className: 'Airplane', precision: 0.88, recall: 0.86, f1Score: 0.87, support: 1000 },
      { className: 'Automobile', precision: 0.92, recall: 0.94, f1Score: 0.93, support: 1000 },
      { className: 'Bird', precision: 0.82, recall: 0.81, f1Score: 0.82, support: 1000 },
      { className: 'Cat', precision: 0.79, recall: 0.64, f1Score: 0.71, support: 1000 },
      { className: 'Deer', precision: 0.85, recall: 0.82, f1Score: 0.84, support: 1000 },
      { className: 'Dog', precision: 0.83, recall: 0.77, f1Score: 0.80, support: 1000 },
      { className: 'Frog', precision: 0.87, recall: 0.92, f1Score: 0.89, support: 1000 },
      { className: 'Horse', precision: 0.87, recall: 0.91, f1Score: 0.89, support: 1000 },
      { className: 'Ship', precision: 0.89, recall: 0.92, f1Score: 0.90, support: 1000 },
      { className: 'Truck', precision: 0.81, recall: 0.95, f1Score: 0.88, support: 1000 },
    ]
  },
  {
    id: 'resnet50',
    name: 'ResNet50',
    year: 2015,
    creators: 'He et al. (Microsoft)',
    description: 'Addresses the vanishing gradient problem through residual connections (skip connections), allowing gradients to flow through deeper networks without degradation. Consists of 50 layers.',
    keyFeatures: ['50 Layers', 'Residual Connections', 'Skip Layers', 'Prevents Vanishing Gradient'],
    color: '#8b5cf6', // Violet
    metrics: {
      accuracy: 0.78,
      precision: 0.78,
      recall: 0.78,
      f1Score: 0.77
    },
    classMetrics: [
      { className: 'Airplane', precision: 0.72, recall: 0.87, f1Score: 0.79, support: 1000 },
      { className: 'Automobile', precision: 0.83, recall: 0.92, f1Score: 0.87, support: 1000 },
      { className: 'Bird', precision: 0.65, recall: 0.79, f1Score: 0.71, support: 1000 },
      { className: 'Cat', precision: 0.77, recall: 0.38, f1Score: 0.51, support: 1000 },
      { className: 'Deer', precision: 0.76, recall: 0.76, f1Score: 0.76, support: 1000 },
      { className: 'Dog', precision: 0.72, recall: 0.69, f1Score: 0.71, support: 1000 },
      { className: 'Frog', precision: 0.77, recall: 0.88, f1Score: 0.82, support: 1000 },
      { className: 'Horse', precision: 0.89, recall: 0.78, f1Score: 0.83, support: 1000 },
      { className: 'Ship', precision: 0.89, recall: 0.84, f1Score: 0.87, support: 1000 },
      { className: 'Truck', precision: 0.81, recall: 0.86, f1Score: 0.83, support: 1000 },
    ]
  },
  {
    id: 'inceptionv3',
    name: 'InceptionV3',
    year: 2016,
    creators: 'Szegedy et al. (Google)',
    description: 'Incorporates "Inception modules" that combine multiple convolutional operations with different filter sizes. Uses factorized convolutions to optimize computational efficiency while being 48 layers deep.',
    keyFeatures: ['48 Layers', 'Inception Modules', 'Factorized Convolutions', 'Multi-scale Processing'],
    color: '#f43f5e', // Rose
    metrics: {
      accuracy: 0.85,
      precision: 0.85,
      recall: 0.85,
      f1Score: 0.85
    },
    classMetrics: [
      { className: 'Airplane', precision: 0.81, recall: 0.90, f1Score: 0.85, support: 1000 },
      { className: 'Automobile', precision: 0.93, recall: 0.92, f1Score: 0.93, support: 1000 },
      { className: 'Bird', precision: 0.81, recall: 0.81, f1Score: 0.81, support: 1000 },
      { className: 'Cat', precision: 0.81, recall: 0.63, f1Score: 0.71, support: 1000 },
      { className: 'Deer', precision: 0.83, recall: 0.85, f1Score: 0.84, support: 1000 },
      { className: 'Dog', precision: 0.74, recall: 0.85, f1Score: 0.79, support: 1000 },
      { className: 'Frog', precision: 0.86, recall: 0.93, f1Score: 0.90, support: 1000 },
      { className: 'Horse', precision: 0.93, recall: 0.83, f1Score: 0.88, support: 1000 },
      { className: 'Ship', precision: 0.93, recall: 0.86, f1Score: 0.89, support: 1000 },
      { className: 'Truck', precision: 0.90, recall: 0.92, f1Score: 0.91, support: 1000 },
    ]
  }
];