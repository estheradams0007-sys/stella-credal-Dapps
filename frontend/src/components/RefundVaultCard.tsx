import React, { useState } from 'react';
import { Landmark, ArrowUpRight, ArrowDownLeft, Lock } from 'lucide-react';
import type { RefundVaultState } from '../types/contracts';

interface RefundVaultCardProps {
  vault: RefundVaultState;
}

export const RefundVaultCard: React.FC<RefundVaultCardProps> = ({ vault }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleDeposit = () => {
    if (!amount) return;
    setMessage(`Successfully prepared deposit of $${amount} XLM/USDC into ${vault.vaultAddress.slice(0, 8)}...`);
    setAmount('');
  };

  const handleRefund = () => {
    if (!amount) return;
    setMessage(`Refund evaluation initiated for $${amount} within policy window (${vault.timeWindowSeconds / 3600}h).`);
    setAmount('');
  };

  return (
    <div className="card">
      <div className="card-title">
        <Landmark size={20} color="var(--success)" />
        <span>Refund Vault Manager</span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
        Policy-bounded float holding contract with double-refund invariant guard.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Available Float</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--success)' }}>
            ${vault.availableBalance}
          </div>
        </div>
        <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Locked/Reserved</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--warning)' }}>
            ${vault.lockedBalance}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Amount (USDC / XLM)</label>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button 
            type="button" 
            className="btn btn-primary" 
            style={{ flex: 1 }} 
            onClick={handleDeposit}
          >
            <ArrowDownLeft size={16} /> Deposit Float
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            style={{ flex: 1 }} 
            onClick={handleRefund}
          >
            <ArrowUpRight size={16} /> Request Refund
          </button>
        </div>

        <div style={{ 
          fontSize: '0.75rem', 
          color: 'var(--text-muted)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.4rem', 
          marginTop: '0.25rem' 
        }}>
          <Lock size={12} /> Invariant: Single refund per payment reference strictly enforced.
        </div>

        {message && (
          <div style={{
            fontSize: '0.8rem',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
            color: '#60a5fa',
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};
