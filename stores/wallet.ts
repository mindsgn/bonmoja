import { defineStore } from 'pinia'

interface Transaction {
  id: string
  type: 'send' | 'receive' | 'add'
  amount: number
  currency: string
  timestamp: string
  description: string
}

interface WalletState {
  balance: number
  currency: string
  ready: boolean
  transactions: Transaction[]
}

export const useWalletStore = defineStore('wallet', {
  state: (): WalletState => ({
    balance: 0,
    currency: 'ZAR',
    ready: false,
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
        const { data } = await useFetch<{ balance: number; currency: string }>('/api/wallet-balance')
        this.balance = data.value?.balance || 0
        this.currency = data.value?.currency || 'ZAR'
        this.ready = true
      } catch (error) {
        console.error('Error fetching balance:', error)
      }
    },

    addTransaction(transaction: Omit<Transaction, 'id' | 'timestamp'>) {
      const newTransaction: Transaction = {
        ...transaction,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString()
      }
      this.transactions.push(newTransaction)
      
      // Update balance based on transaction type
      if (transaction.type === 'add') {
        this.balance += transaction.amount
      } else if (transaction.type === 'send') {
        this.balance -= transaction.amount
      } else if (transaction.type === 'receive') {
        this.balance += transaction.amount
      }
    }
  }
}) 