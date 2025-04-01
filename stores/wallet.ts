import { defineStore } from 'pinia'

interface Transaction {
  id: string
  type: 'deposit' | 'withdrawal'
  amount: number
  date: string
  status: 'success' | 'failed'
}

interface WalletState {
  balance: number
  currency: string
  ready: boolean,
  transactionReady: boolean,
  isDepositModalOpen: boolean
  transactions: Transaction[]
}

export const useWalletStore = defineStore('wallet', {
  state: (): WalletState => ({
    balance: 0,
    currency: 'ZAR',
    ready: false,
    transactionReady: false,
    isDepositModalOpen: false,
    transactions: []
  }),

  getters: {
    formattedBalance: (state) => {
      return new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: state.currency
      }).format(state.balance)
    },

    recentTransactions: (state) => {
      return [...state.transactions].sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    }
  },

  actions: {
    async fetchBalance() {
      try {
        const { data } = await useFetch<{ balance: number; currency: string }>('/api/wallet')
        if (data.value) {
          this.balance = data.value.balance
          this.currency = data.value.currency
        }
        
        setTimeout(() => {
            this.ready = true;
        }, 3000);

      } catch (error) {
        console.error('Error fetching balance:', error)
      }
    },

    async fetchTransactions() {
        try {
          const { data } = await useFetch<{ transactions: Transaction[] }>('/api/transactions')
          
          if (data.value) {
            this.transactions = data.value.transactions || []
          }
          setTimeout(() => {
            this.transactionReady = true;
        }, 4000);
        } catch (error) {
          console.error('Error fetching balance:', error)
        }
      },

    openDepositModal() {
      this.isDepositModalOpen = true
    },

    closeDepositModal() {
      this.isDepositModalOpen = false
    },

    addTransaction(amount: number, type: 'deposit' | 'withdrawal') {
      const newTransaction: Transaction = {
        amount, 
        type,
        id: crypto.randomUUID(),
        status: "success", 
        date: new Date().toISOString()
      }
      this.transactions.push(newTransaction)

      if (newTransaction.type === 'deposit') {
        this.balance += newTransaction.amount
      } else if (newTransaction.type === 'withdrawal') {
        this.balance -= newTransaction.amount
      }

      this.isDepositModalOpen = false
    }
  }
})