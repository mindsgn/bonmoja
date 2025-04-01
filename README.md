# Bonmoja Wallet Dashboard

A modern, responsive wallet dashboard built with Nuxt 3, featuring real-time balance updates, transaction management, and smooth animations.

## Features

- 💰 Real-time wallet balance display
- 📱 Fully responsive design
- 🔄 Transaction history tracking
- ✨ Smooth animations using Motion
- 💳 Support for deposits
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework:** Nuxt 3
- **State Management:** Pinia
- **Styling:** Tailwind CSS
- **Animations:** Motion
- **Icons:** Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/bonmoja-wallet.git
cd bonmoja-wallet
```

2. Install dependencies
```bash
yarn install
```

3. Start the development server
```bash
yarn dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
bonmoja-wallet/
├── components/         # Reusable Vue components
├── stores/             # Pinia state management
├── server/             # API routes and server logic
├── public/             # Static assets
└── app.vue             # Main application component
```

## API Endpoints

- `GET /api/wallet` - Get current wallet balance
- `POST /api/transactions` - Create new transaction

## Development Notes

- Uses Pinia for centralized state management
- Implements mock API endpoints for development
- Features responsive design for mobile and desktop
- Includes loading states and error handling

## Future Improvements

- [ ] Add transaction filtering and sorting
- [ ] Implement authentication
- [ ] Add more payment methods
- [ ] Support multiple currencies
- [ ] Add transaction export functionality