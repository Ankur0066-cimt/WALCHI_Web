// import { Product } from '../types';

interface Product {
  id: string;
  name: string;
  pricePerSqFt: number;
  description: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'premium-paint',
    name: 'Premium Paint',
    pricePerSqFt: 35,
    description: 'High-quality premium paint with 10-year warranty',
    features: ['Weather resistant', 'Anti-fungal', '10-year warranty', 'Premium finish']
  },
  {
    id: 'standard-paint',
    name: 'Standard Paint',
    pricePerSqFt: 29,
    description: 'Quality standard paint for interior and exterior',
    features: ['Durable finish', 'Good coverage', '5-year warranty', 'Easy maintenance']
  },
  {
    id: 'economy-paint',
    name: 'Economy Paint',
    pricePerSqFt: 27,
    description: 'Budget-friendly paint with good quality',
    features: ['Cost effective', 'Good durability', '3-year warranty', 'Multiple colors']
  },
  {
    id: 'basic-paint',
    name: 'Basic Paint',
    pricePerSqFt: 20,
    description: 'Basic paint solution for budget projects',
    features: ['Affordable', 'Basic protection', '2-year warranty', 'Standard colors']
  }
];

export const TAX_RATE = 0.18; // 18% GST

export const FAQ_RESPONSES = {
  'what services do you offer': 'We offer complete wall painting services including consultation, design, execution, and maintenance. Our services cover both interior and exterior painting.',
  'how much does it cost': 'Our pricing ranges from ₹20 to ₹35 per sq.ft depending on the paint quality you choose. You can use our quotation calculator to get an accurate estimate.',
  'how long does painting take': 'Typical painting projects take 3-7 days depending on the area and complexity. We provide daily progress updates throughout the project.',
  'do you provide warranty': 'Yes! We provide warranty ranging from 2-10 years depending on the paint quality chosen. Premium paints come with 10-year warranty.',
  'can i track my order': 'Absolutely! You can track your order status in real-time through our order tracking system. You\'ll receive updates at each milestone.',
  'what areas do you cover': 'We currently serve major cities across India. Contact us to check if we serve your area.',
  'how to book consultation': 'You can book a free consultation through our quotation calculator or by calling our customer service team.',
  'payment options': 'We accept all major payment methods including UPI, cards, and bank transfers. Payment is typically done in phases based on project milestones.'
};

export const ORDER_STATUSES = {
  consultation: 'Consultation Scheduled',
  design_approval: 'Design Approval',
  execution: 'Execution Started',
  completion: 'Work Completed',
  confirmed: 'Project Confirmed'
};