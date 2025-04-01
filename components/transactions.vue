<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-bold mb-8">My Wallet</h1>
    
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Balance Card -->
      <div class="col-span-full md:col-span-1 rounded-lg border bg-card text-card-foreground shadow-sm">
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            <WalletIcon class="h-5 w-5" />
            Balance
          </h3>
          <p class="text-sm text-muted-foreground">Your current wallet balance</p>
        </div>
        <div class="p-6 pt-0">
          <div class="text-4xl font-bold">$2,560.50</div>
          <p class="text-sm text-muted-foreground mt-2">Last updated: Today, 10:30 AM</p>
        </div>
        <div class="flex items-center p-6 pt-0 gap-2">
          <button class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            <ArrowUpIcon class="mr-2 h-4 w-4" />
            Send
          </button>
          <button class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            <ArrowDownIcon class="mr-2 h-4 w-4" />
            Receive
          </button>
          <button class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <PlusIcon class="mr-2 h-4 w-4" />
            Add Funds
          </button>
        </div>
      </div>

      <!-- Transaction History -->
      <div class="col-span-full md:col-span-2 rounded-lg border bg-card text-card-foreground shadow-sm">
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="text-2xl font-semibold leading-none tracking-tight">Transaction History</h3>
          <p class="text-sm text-muted-foreground">Your recent transactions</p>
        </div>
        <div class="p-6 pt-0">
          <div class="w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
              <caption class="mt-4 text-sm text-muted-foreground">
                A list of your recent transactions.
              </caption>
              <thead class="[&_tr]:border-b">
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Description</th>
                  <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                  <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Type</th>
                  <th class="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Amount</th>
                </tr>
              </thead>
              <tbody class="[&_tr:last-child]:border-0">
                <tr v-for="(transaction, index) in transactions" :key="index" class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td class="p-4 align-middle font-medium">{{ transaction.description }}</td>
                  <td class="p-4 align-middle">{{ transaction.date }}</td>
                  <td class="p-4 align-middle">
                    <span 
                      class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      :class="{
                        'bg-red-100 text-red-800': transaction.type === 'Expense',
                        'bg-green-100 text-green-800': transaction.type === 'Income',
                        'bg-blue-100 text-blue-800': transaction.type === 'Transfer'
                      }"
                    >
                      {{ transaction.type }}
                    </span>
                  </td>
                  <td class="p-4 align-middle text-right" :class="{
                    'text-red-600': transaction.amount.startsWith('-'),
                    'text-green-600': transaction.amount.startsWith('+')
                  }">{{ transaction.amount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex items-center p-6 pt-0">
          <button class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { WalletIcon, ArrowUpIcon, ArrowDownIcon, PlusIcon } from 'lucide-vue-next';

const transactions = ref([
  {
    description: 'Coffee Shop',
    date: 'Apr 1, 2025',
    type: 'Expense',
    amount: '-$4.99'
  },
  {
    description: 'Salary Deposit',
    date: 'Mar 31, 2025',
    type: 'Income',
    amount: '+$2,500.00'
  },
  {
    description: 'Grocery Store',
    date: 'Mar 30, 2025',
    type: 'Expense',
    amount: '-$65.40'
  },
  {
    description: 'Transfer to Savings',
    date: 'Mar 29, 2025',
    type: 'Transfer',
    amount: '-$500.00'
  },
  {
    description: 'Refund - Online Store',
    date: 'Mar 28, 2025',
    type: 'Income',
    amount: '+$29.99'
  }
]);
</script>