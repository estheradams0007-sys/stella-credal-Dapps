import React from 'react';
import { ShieldCheck, Layers, ExternalLink } from 'lucide-react';

interface HeaderProps {
  network: string;
  contractsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ network, contractsCount }) => {
  return (
    <header>
      <div className="container header-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            backgroundColor: '#2563eb', 
            padding: '0.5rem', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <ShieldCheck size={24} color="#fff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              stella-credal-Dapps
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              x402 Merchant Back-Office &amp; On-Chain Verifier
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <Layers size={16} color="var(--primary)" />
            <span style={{ color: 'var(--text-muted)' }}>Deployed Crates:</span>
            <strong>{contractsCount}</strong>
          </div>

          <span className="badge badge-success">
            {network}
          </span>

          <a 
            href="https://github.com/accensa/accensa-contracts" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            Repo <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </header>
  );
};
