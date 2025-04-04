export default defineEventHandler(() => {
  return {
    transactions:[
      {
        "id": "txn_001",
        "type": "deposit",
        "amount": 2000,
        "currency": "ZAR",
        "status": "success",
        "date": "2024-03-25T10:15:00Z"
      },
      {
        "id": "txn_002",
        "type": "withdrawal",
        "amount": 500,
        "currency": "ZAR",
        "status": "failed",
        "date": "2024-03-26T08:32:00Z"
      },
      {
        "id": "txn_003",
        "type": "deposit",
        "amount": 1500,
        "currency": "ZAR",
        "status": "success",
        "date": "2024-03-27T14:20:00Z"
      }
    ]
  }
}) 