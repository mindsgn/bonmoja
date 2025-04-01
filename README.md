Frontend Developer: Take-Home Assignment

Context
Bonmoja is building a real-money iGaming platform for African users. Trust, speed, polish, and
mobile-first design are critical. In this task, you’ll create a Wallet Transactions Dashboard, similar
to what you'd build in the real role.
Timeframe
The assignment should take around 3 hours to complete. Use this as a guideline for how much
effort to put into completeness and optimisations. Read through the entire assignment before you
begin to get an idea of the scope and how you would like to structure your work.
Requirements
Create a responsive dashboard that:
1. Displays Wallet Balance and Transactions
● Fetch wallet balance from a mock API: GET /api/wallet
● Fetch list of transactions: GET /api/transactions
● Display each transaction with:
○ Amount
○ Date
○ Type (deposit or withdrawal)
○ Status (e.g. success, failed)

2. Deposit Modal
● A “Deposit” button opens a modal with a form:
○ Input: amount
○ Select: payment method
● On submit:
○ Show loading state for 1s
○ Then show “Success” or error
○ (You can keep this client-only — no API needed)

3. Mobile-Responsive Layout
● Design should work well on desktop and mobile.
● Focus on clean layout, readable content, and minimal friction.

4. User Feedback and States
● Show loading indicator while fetching data
● Handle API errors with an inline message
● Show an empty state if there are no transactions
● Modal transitions should feel smooth
5. Stretch goals (Optional)
● Sort/filter transactions
● Add dummy “withdraw” modal for parity
● Use animation libraries like GSAP or Framer Motion
● Add support for i18n/localization (language toggle)
Deliverables

Please submit the following in a GitHub repo or zip file:
1. README.md
○ Setup instructions
○ Notes on your implementation and design decisions
2. A zip file with your project. We’ll specifically be looking for:
○ pages/index.vue or pages/index.tsx
○ components/TransactionList.vue / .tsx
○ components/DepositModal.vue / .tsx
○ Mock API data (e.g. public/api/wallet.json, public/api/transactions.json)
3. A 5–10 min screen recording:
○ Demo your app
○ Explain key decisions and trade-offs