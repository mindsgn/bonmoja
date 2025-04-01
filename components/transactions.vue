<script setup>
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/stores/wallet';
  import { Loader2Icon } from 'lucide-vue-next';

  const walletStore = useWalletStore();
  const { recentTransactions, transactionReady } = storeToRefs(walletStore); 

  onMounted(() => {
    walletStore.fetchTransactions();
  });
</script>

<template>

  
  <div class="container mx-auto py-8 px-4">
    <div class="col-span-full md:col-span-2 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold leading-none tracking-tight">Transaction History</h3>
        <p class="text-sm text-muted-foreground">Your recent transactions</p>
      </div>

      <Motion 
      v-if="!transactionReady"
      :initial="{ opacity: 0.5, scale: 1 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 1.5 }"
      class="flex items-center justify-center animate-pulse col-span-full md:col-span-1 rounded-lg  bg-card text-card-foreground h-64"
    >
      <Motion 
        :animate="{ rotate: 360 }"
        :transition="{ repeat: Infinity, duration: 1, ease: 'linear' }"
      >
        <Loader2Icon class="h-10 w-10 text-gray-500 animate-spin" />
      </Motion>
    </Motion>


    <Motion 
      v-else
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.6, ease: 'easeIn' }"
    >
      <div class="p-6 pt-0">
        <div class="w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <caption class="mt-4 text-sm text-muted-foreground">
              A list of your recent transactions.
            </caption>
            <thead class="[&_tr]:border-b">
              <tr class="border-b transition-colors hover:bg-muted/50">
                <th class="h-12 px-4 text-left font-medium text-muted-foreground">Date</th>
                <th class="h-12 px-4 text-left font-medium text-muted-foreground">Type</th>
                <th class="h-12 px-4 text-left font-medium text-muted-foreground">status</th>
                <th class="h-12 px-4 text-right font-medium text-muted-foreground">Amount</th>
              </tr>
            </thead>
            <tbody class="[&_tr:last-child]:border-0">
              <tr v-for="transaction in recentTransactions" :key="transaction.id" class="border-b transition-colors hover:bg-muted/50">
                <td class="p-4 align-middle">{{ new Date(transaction.date).toLocaleDateString() }}</td>
                <td class="p-4 align-middle">
                  <span 
                    class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    :class="{
                      'bg-red-100 text-red-800': transaction.type === 'withdrawal',
                      'bg-green-100 text-green-800': transaction.type === 'deposit'
                    }"
                  >
                    {{ transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1) }}
                  </span>
                </td>

                <td class="p-4 align-middle text-left" :class="{
                  'text-red-600': transaction.status === 'failed',
                  'text-green-600': transaction.status === 'success'
                }">
                  {{ transaction.status }}
                </td>

                <td class="p-4 align-middle text-right" :class="{
                  'text-red-600': transaction.type === 'withdrawal',
                  'text-green-600': transaction.type === 'deposit'
                }">
                  {{ transaction.type === 'send' ? '-' : '+' }}R{{ transaction.amount.toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Motion>

    </div>
  </div>
</template>