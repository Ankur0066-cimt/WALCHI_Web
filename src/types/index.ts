// Global TypeScript types for Wallchi

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'client' | 'vendor' | 'admin';
  createdAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface Product {
  id: string;
  name: string;
  pricePerSqFt: number;
  description: string;
  features: string[];
}

export interface Room {
  id: string;
  name: string;
  walls: Wall[];
  selectedProduct?: Product;
  totalArea: number;
  totalCost: number;
}

export interface Wall {
  id: string;
  name: string;
  length: number;
  height: number;
  area: number;
}

export interface QuotationItem {
  roomId: string;
  roomName: string;
  wallCount: number;
  totalArea: number;
  productId: string;
  productName: string;
  pricePerSqFt: number;
  subtotal: number;
}

export interface Quotation {
  id: string;
  items: QuotationItem[];
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface Order {
  id: string;
  quotationId: string;
  status: 'consultation' | 'design_approval' | 'execution' | 'completion' | 'confirmed';
  timeline: OrderEvent[];
  createdAt: string;
  estimatedCompletion?: string;
}

export interface OrderEvent {
  id: string;
  status: Order['status'];
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

export interface DailyStatus {
  id: string;
  orderId: string;
  date: string;
  progressPercentage: number;
  notes: string;
  qaRemarks?: string;
  images?: string[];
  vendorId: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}