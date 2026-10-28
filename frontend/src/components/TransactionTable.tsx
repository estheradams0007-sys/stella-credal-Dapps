import React from 'react';
import type { MerkleReceiptRecord } from '../types/contracts';

interface TransactionTableProps {
  receipts: MerkleReceiptRecord[];
}

export const TransactionTable: React.FC<TransactionTableProps> = ({ receipts }) => {
  return (
    <div className="card" style={{ marginTop: '2rem' }}>
      <div className="card-title">
        <span>Recent Anchored Receipts &amp; Refund Events</span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Ledger events captured from Soroban ReceiptAnchor &amp; RefundVault contracts.
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Payment Ref</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Root Hash</th>
              <th>Ledger Seq</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((r) => (
              <tr key={r.paymentRef}>
                <td>
                  <span className="code-pill">{r.paymentRef}</span>
                </td>
                <td>{r.recipient.slice(0, 6)}...{r.recipient.slice(-4)}</td>
                <td><strong>{r.amount} USDC</strong></td>
                <td>
                  <span className="code-pill">{r.rootHash.slice(0, 10)}...</span>
                </td>
                <td>#{r.blockHeight}</td>
                <td>
                  <span className={`badge ${
                    r.status === 'anchored' 
                      ? 'badge-success' 
                      : r.status === 'refunded' 
                      ? 'badge-warning' 
                      : 'badge-success'
                  }`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
