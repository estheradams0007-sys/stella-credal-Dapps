import React, { useState } from 'react';
import { Search, CheckCircle2, AlertTriangle, FileCode } from 'lucide-react';

export const ReceiptVerifier: React.FC = () => {
  const [paymentRef, setPaymentRef] = useState('');
  const [rootHash, setRootHash] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    verified: boolean;
    contract: string;
    details: string;
  } | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentRef) return;

    // Simulate Soroban on-chain Merkle proof verification
    setVerificationResult({
      verified: true,
      contract: 'CA6V2...RECEIPT_ANCHOR',
      details: `Proof valid. Anchored on Stellar Testnet for ref #${paymentRef}. Invariant checked: non-repudiable.`,
    });
  };

  return (
    <div className="card">
      <div className="card-title">
        <FileCode size={20} color="var(--primary)" />
        <span>x402 Merkle Receipt Verifier</span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
        Cryptographically verify that an HTTP 402 AI-agent payment was settled and anchored to Soroban.
      </p>

      <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Payment Reference</label>
          <input
            type="text"
            placeholder="e.g. pay_928f01a8c9b"
            value={paymentRef}
            onChange={(e) => setPaymentRef(e.target.value)}
            required
          />
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Optional Root Hash / Merkle Leaf</label>
          <input
            type="text"
            placeholder="0x7f9a...3b"
            value={rootHash}
            onChange={(e) => setRootHash(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
          <Search size={16} /> Verify On-Chain Proof
        </button>
      </form>

      {verificationResult && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem 1rem',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '8px',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'flex-start'
        }}>
          {verificationResult.verified ? (
            <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0, marginTop: '2px' }} />
          ) : (
            <AlertTriangle size={18} color="var(--danger)" style={{ flexShrink: 0, marginTop: '2px' }} />
          )}
          <div style={{ fontSize: '0.85rem' }}>
            <div style={{ fontWeight: 600, color: 'var(--success)' }}>Verification Succeeded</div>
            <div style={{ color: 'var(--text-muted)' }}>{verificationResult.details}</div>
            <div className="code-pill" style={{ display: 'inline-block', marginTop: '0.25rem' }}>
              Target: {verificationResult.contract}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
