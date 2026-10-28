import React from 'react';
import { Database, RefreshCw, KeyRound, CheckCircle } from 'lucide-react';

interface ContractMetricsProps {
  anchoredReceipts: number;
  totalFloatTvl: string;
  activePolicies: number;
  lastSyncTime: string;
}

export const ContractMetrics: React.FC<ContractMetricsProps> = ({
  anchoredReceipts,
  totalFloatTvl,
  activePolicies,
  lastSyncTime,
}) => {
  return (
    <div className="grid grid-cols-3" style={{ marginBottom: '2rem' }}>
      <div className="card">
        <div className="card-title">
          <Database size={18} color="var(--primary)" />
          <span>Anchored Receipts</span>
        </div>
        <div className="stat-value">{anchoredReceipts.toLocaleString()}</div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Merkle-proven roots via <span className="code-pill">ReceiptAnchor</span>
        </p>
      </div>

      <div className="card">
        <div className="card-title">
          <KeyRound size={18} color="var(--success)" />
          <span>Refund Vault TVL</span>
        </div>
        <div className="stat-value">${totalFloatTvl}</div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Under policy limits in <span className="code-pill">RefundVault</span>
        </p>
      </div>

      <div className="card">
        <div className="card-title">
          <RefreshCw size={18} color="var(--accent)" />
          <span>Active Invariants</span>
        </div>
        <div className="stat-value">{activePolicies} Policies</div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Synchronized at {lastSyncTime} <CheckCircle size={12} color="var(--success)" style={{ display: 'inline' }} />
        </p>
      </div>
    </div>
  );
};
