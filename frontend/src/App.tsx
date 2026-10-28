import { useState } from 'react';
import { Header } from './components/Header';
import { ContractMetrics } from './components/ContractMetrics';
import { ReceiptVerifier } from './components/ReceiptVerifier';
import { RefundVaultCard } from './components/RefundVaultCard';
import { TransactionTable } from './components/TransactionTable';
import type { MerkleReceiptRecord, RefundVaultState } from './types/contracts';

const INITIAL_RECEIPTS: MerkleReceiptRecord[] = [
  {
    paymentRef: 'pay_x402_981a2f',
    recipient: 'GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVOGO',
    amount: '12.50',
    rootHash: '0x8a91f4b321c8812e9b0d',
    blockHeight: 5218901,
    timestamp: '2026-10-28 07:42:10 UTC',
    status: 'anchored',
  },
  {
    paymentRef: 'pay_x402_771bc4',
    recipient: 'GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5',
    amount: '4.99',
    rootHash: '0x992b1c4e71a0fd31c901',
    blockHeight: 5218840,
    timestamp: '2026-10-28 07:35:01 UTC',
    status: 'refunded',
  },
  {
    paymentRef: 'pay_x402_104ed8',
    recipient: 'GCKFJDR2MBRUGVZXWZPWFZ7E4NTRQZMW7P23J7V5YHQH4P2LHQ73YTHM',
    amount: '89.00',
    rootHash: '0x10f8ca730be45189bc99',
    blockHeight: 5218702,
    timestamp: '2026-10-28 07:11:19 UTC',
    status: 'verified',
  },
];

const INITIAL_VAULT: RefundVaultState = {
  vaultAddress: 'CB92XA4...REFUND_VAULT',
  totalFloat: '48,250.00',
  availableBalance: '38,120.00',
  lockedBalance: '10,130.00',
  timeWindowSeconds: 86400,
  isPaused: false,
  totalRefundsProcessed: 142,
};

export function App() {
  const [receipts] = useState<MerkleReceiptRecord[]>(INITIAL_RECEIPTS);
  const [vault] = useState<RefundVaultState>(INITIAL_VAULT);

  return (
    <div>
      <Header network="Stellar Testnet" contractsCount={19} />
      
      <main className="container">
        <ContractMetrics
          anchoredReceipts={14920}
          totalFloatTvl="48,250.00"
          activePolicies={6}
          lastSyncTime="Just now"
        />

        <div className="grid grid-cols-2">
          <ReceiptVerifier />
          <RefundVaultCard vault={vault} />
        </div>

        <TransactionTable receipts={receipts} />
      </main>
    </div>
  );
}

export default App;
