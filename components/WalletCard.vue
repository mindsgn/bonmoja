<script setup>
import { WalletIcon, ArrowUpIcon, PlusIcon, Loader2Icon } from 'lucide-vue-next';
import { useWalletStore } from '~/stores/wallet';
import { storeToRefs } from 'pinia';

const walletStore = useWalletStore();
const { ready, formattedBalance } = storeToRefs(walletStore);

onMounted(() => {
  walletStore.fetchBalance();
});
</script>

<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-bold mb-8">Bonmoja Wallet</h1>

    <Motion 
      v-if="!ready"
      :initial="{ opacity: 0.5, scale: 1 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 1.5 }"
      class="flex items-center justify-center animate-pulse col-span-full md:col-span-1 rounded-lg border bg-card text-card-foreground shadow-sm h-64"
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
      :initial="{ opacity: 0, scale: 0.9 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
      class="col-span-full md:col-span-1 rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
          <WalletIcon class="h-5 w-5" />
          Balance
        </h3>
        <p class="text-sm text-muted-foreground">Your current wallet balance</p>
      </div>
      <div class="p-6 pt-0">
        <div class="text-4xl font-bold">{{ formattedBalance }}</div>
        <p class="text-sm text-muted-foreground mt-2">Last updated: Today, 10:30 AM</p>
      </div>
      <div class="flex items-center p-6 pt-0 gap-2">
        <button class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          <ArrowUpIcon class="mr-2 h-4 w-4" />
          Withdraw
        </button>

        <button 
          @click="walletStore.openDepositModal" 
          class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          <PlusIcon class="mr-2 h-4 w-4" />
          Deposit
        </button>
      </div>
    </Motion>
  </div>
</template>