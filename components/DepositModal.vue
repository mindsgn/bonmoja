<script setup>
import { useWalletStore } from '~/stores/wallet';
import { storeToRefs } from 'pinia';

const walletStore = useWalletStore();
const { isDepositModalOpen } = storeToRefs(walletStore);
const depositAmount = ref('');

const isFormValid = computed(() => {
  if (!depositAmount.value || Number(depositAmount.value) <= 0) return false;

  return true;
});

const handleDeposit = async () => {
  walletStore.addTransaction(depositAmount.value, "deposit")
};

</script>

<template>
  <div v-if="isDepositModalOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <Motion
      :initial="{ opacity: 0, scale: 0.8, y: 50 }"
      :animate="{ opacity: 1, scale: 1, y: 0 }"
      :exit="{ opacity: 0, y: 100 }"
      :transition="{ duration: 0.4, ease: 'easeInOut' }"
      class="bg-background rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden"
    >
      <div class="flex flex-col space-y-1.5 p-6 border-b">
        <h3 class="text-xl font-semibold leading-none tracking-tight">Deposit Funds</h3>
        <p class="text-sm text-muted-foreground">Add money to your wallet</p>
      </div>

      <form @submit.prevent="handleDeposit" class="p-6">
        <div class="grid gap-4">
          <div class="grid gap-2">
            <label for="amount" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Amount
            </label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R</span>
              <input 
                v-model="depositAmount"
                type="number" 
                id="amount" 
                min="1" 
                step="0.01"
                placeholder="0.00" 
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-7 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end gap-2 mt-6">
          <button 
            type="button"
            @click="walletStore.closeDepositModal"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            :disabled="!isFormValid"
          >
            Deposit
          </button>
        </div>
      </form>
    </Motion>
  </div>
</template>