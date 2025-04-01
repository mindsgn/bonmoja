<script setup>
const { data: walletData, pending, error } = await useFetch('/api/wallet-balance')
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
    <div v-if="pending" class="animate-pulse">
      <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div class="h-8 bg-gray-200 rounded w-1/2"></div>
    </div>
    
    <div v-else-if="error" class="text-red-500">
      Error loading wallet data
    </div>
    
    <div v-else class="space-y-2">
      <h2 class="text-gray-500 text-sm font-medium">Available Balance</h2>
      <div class="flex items-baseline">
        <span class="text-3xl font-bold">{{ walletData?.currency }}</span>
        <span class="ml-2 text-3xl font-bold">{{ walletData?.balance.toLocaleString() }}</span>
      </div>
    </div>
  </div>
</template> 