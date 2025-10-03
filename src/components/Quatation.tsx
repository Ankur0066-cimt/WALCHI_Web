import React, { useState } from 'react';

// Define interfaces
interface QuotationItem {
  name: string;
  qty: string;
  rate: number;
  amount: number;
  required: boolean;
}

interface Quotation {
  id: string;
  project: string;
  client: string;
  created: string;
  validUntil: string;
  status: 'Draft' | 'Sent' | 'Approved';
  items: QuotationItem[];
  amount: number; // This will be the subtotal for display in list
}

// Dummy data: 6 unique quotations
const dummyQuotations: Quotation[] = [
  {
    id: 'QUO001',
    project: 'Residential Villa - Phase 1',
    client: 'John Smith',
    created: '2024-12-20',
    validUntil: '2025-01-20',
    status: 'Draft',
    amount: 229000,
    items: [
      { name: 'Wall Putty (Premium)', qty: '500 sq ft', rate: 45, amount: 22500, required: true },
      { name: 'Exterior Paint (Weather Shield)', qty: '300 sq ft', rate: 35, amount: 10500, required: true },
      { name: 'Wiring & Fixtures', qty: '1 lot', rate: 85000, amount: 85000, required: true },
      { name: 'Marble Flooring', qty: '800 sq ft', rate: 120, amount: 96000, required: false },
      { name: 'Waterproofing', qty: '200 sq ft', rate: 75, amount: 15000, required: false },
    ],
  },
  {
    id: 'QUO002',
    project: 'Commercial Office Space',
    client: 'ABC Corp Ltd',
    created: '2024-12-18',
    validUntil: '2025-01-18',
    status: 'Sent',
    amount: 48000,
    items: [
      { name: 'Interior Painting', qty: '400 sq ft', rate: 30, amount: 12000, required: true },
      { name: 'Ceiling Tiles', qty: '200 sq ft', rate: 50, amount: 10000, required: true },
      { name: 'Electrical Outlets', qty: '10 units', rate: 500, amount: 5000, required: false },
      { name: 'Furniture Assembly', qty: '1 set', rate: 21000, amount: 21000, required: true },
    ],
  },
 
];

const QuotationManagement: React.FC = () => {
  const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(dummyQuotations[0]); // Default to first

  const handleSelect = (quo: Quotation) => {
    setSelectedQuotation(quo);
  };

  const calculateSubtotal = (items: QuotationItem[]) => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  };

  const calculateGST = (subtotal: number) => {
    return subtotal * 0.18;
  };

  const calculateTotal = (subtotal: number, gst: number) => {
    return subtotal + gst;
  };

  return (
    <div  style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#fff' ,marginLeft:'1%',marginRight:'1%',borderRadius:'10px', color : 'black'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Quotation Management based on consultation and pre-recce</h2>
        <button style={{ backgroundColor: '#000', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
          + Re-Evaluate for Quotation
        </button>
      </div>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        {/* Left: Quotation List */}
        <div style={{ width: '40%', borderRight: '1px solid #ddd', paddingRight: '20px' }}>
          <h2>Quotation List</h2>
          {dummyQuotations.map((quo) => {
            const subtotal = calculateSubtotal(quo.items);
            return (
              <div
                key={quo.id}
                onClick={() => handleSelect(quo)}
                style={{
                  backgroundColor: selectedQuotation?.id === quo.id ? '#f0f0f0' : '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  padding: '10px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>{quo.id}</strong>
                  <span
                    style={{
                      backgroundColor: quo.status === 'Draft' ? '#ddd' : quo.status === 'Sent' ? '#yellow' : '#green',
                      padding: '5px 10px',
                      borderRadius: '15px',
                      color: quo.status === 'Approved' ? '#fff' : '#000',
                    }}
                  >
                    {quo.status}
                  </span>
                </div>
                <p>{quo.project}</p>
                <p>Client: {quo.client}</p>
                <p>Created: {quo.created} Valid until: {quo.validUntil}</p>
                <p>Consultation Based Pre-Recce Done</p>
                <p style={{ textAlign: 'right', fontWeight: 'bold' }}>₹{subtotal.toLocaleString()}</p>
              </div>
            );
          })}
        </div>

        {/* Right: Quotation Details */}
        <div style={{ width: '60%', paddingLeft: '20px' }}>
          {selectedQuotation ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>Quotation Details</h3>
                <div>
               
                  <button style={{ marginRight: '10px',color:'white' }}>Export</button>
                     <button style={{ marginRight: '10px' ,color:'white' }}>Reject</button>
                  <button style={{ color:'white' }}>Accept</button>
                </div>
              </div>
              <p>Quotation ID: {selectedQuotation.id}</p>
              <p>Project: {selectedQuotation.project}</p>
              <p>Client: {selectedQuotation.client}</p>
              <p>Status: {selectedQuotation.status}</p>

              <h4>Quotation Items</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Item</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Qty</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Rate</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Amount</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedQuotation.items.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>{item.qty}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>₹{item.rate}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>₹{item.amount.toLocaleString()}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                        <span
                          style={{
                            backgroundColor: item.required ? '#000' : '#ddd',
                            color: item.required ? '#fff' : '#000',
                            padding: '5px 10px',
                            borderRadius: '5px',
                          }}
                        >
                          {item.required ? 'Required' : 'Optional'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <p>Subtotal: ₹{calculateSubtotal(selectedQuotation.items).toLocaleString()}</p>
                <p>GST (18%): ₹{calculateGST(calculateSubtotal(selectedQuotation.items)).toLocaleString()}</p>
                <p><strong>Total Amount: ₹{calculateTotal(calculateSubtotal(selectedQuotation.items), calculateGST(calculateSubtotal(selectedQuotation.items))).toLocaleString()}</strong></p>
              </div>
            </>
          ) : (
            <p>Select a quotation to view details.</p>
          )}
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Generate New Quotation</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select style={{ marginRight: '10px', padding: '10px' }}>
            <option>Select Project</option>
          </select>
          <select style={{ marginRight: '10px', padding: '10px' }}>
            <option>Based on Consultation</option>
          </select>
          <button style={{ backgroundColor: '#000', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
            + Generate Quotation
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotationManagement;