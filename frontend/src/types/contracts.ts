export interface ContractInfo {
  name: string;
  category: 'core' | 'policy' | 'infra' | 'shared';
  contractId: string;
  status: 'active' | 'paused' | 'upgraded';
  description: string;
}

export interface MerkleReceiptRecord {
  paymentRef: string;
  recipient: string;
  amount: string;
  rootHash: string;
  blockHeight: number;
  timestamp: string;
  status: 'anchored' | 'verified' | 'refunded';
}

export interface RefundVaultState {
  vaultAddress: string;
  totalFloat: string;
  availableBalance: string;
  lockedBalance: string;
  timeWindowSeconds: number;
  isPaused: boolean;
  totalRefundsProcessed: number;
}
