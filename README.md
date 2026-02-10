# OWLUX Chat Interface

A modern chat interface built with React and Tailwind CSS, featuring a sidebar with chat history, main conversation area, and split-view sub-queries.

## 🎨 Features

- **Sidebar Navigation**: 256px fixed sidebar with logo, chat history, and API selector
- **Conversation Area**: Full-featured chat with message bubbles, auto-scroll, and typing indicators
- **Split View**: 50-50 layout for sub-queries with independent chat areas
- **Responsive Design**: Optimized for desktop with mobile considerations
- **Mock Data**: Simulated conversations and API responses
- **Smooth Animations**: Transition effects for panel opening/closing and message appearance

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Sidebar.jsx          # Left sidebar with chat history
│   │   ├── ConversationArea.jsx # Main chat area
│   │   └── SplitView.jsx        # 50-50 split layout manager
│   ├── Conversation/
│   │   ├── ConversationHeader.jsx # Chat header with title
│   │   ├── MessageList.jsx        # Scrollable message list
│   │   ├── Message.jsx            # Individual message bubble
│   │   └── MessageInput.jsx       # Input field with send button
│   ├── SubQuery/
│   │   ├── SubQueryPanel.jsx      # Sub-query chat panel
│   │   └── SubQueryHeader.jsx     # Sub-query header with close
│   └── Shared/
│       ├── Logo.jsx               # OWLUX logo component
│       ├── Button.jsx             # Reusable button component
│       └── Icon.jsx               # Icon component
├── hooks/
│   └── useChat.js                 # Chat state management hook
├── data/
│   └── mockData.js                # Mock chats and messages
├── App.jsx                        # Main app component
├── main.jsx                       # App entry point
└── index.css                      # Global styles with Tailwind
```

## 🎨 Design Specifications

### Color Palette

| Usage | Color | Hex |
|-------|-------|-----|
| Background | OWLUX BG | `#FAFAFA` |
| Sidebar | OWLUX Sidebar | `#F5F5F5` |
| Primary Text | OWLUX Text | `#1A1A1A` |
| Secondary Text | OWLUX Text Secondary | `#666666` |
| Primary Blue | OWLUX Primary | `#2196F3` |
| Borders | OWLUX Border | `#E0E0E0` |
| User Message | OWLUX User Msg | `#E3F2FD` |
| Assistant Message | OWLUX Assistant Msg | `#F5F5F5` |
| Sub-query BG | OWLUX Subquery BG | `#F8F9FA` |

### Typography

- Font Family: Inter, system-ui, sans-serif
- Conversation Title: 16-18px, Bold
- Body Text: 14-15px, Regular
- Sidebar Items: 13-14px

### Spacing

- General Padding: 16-24px
- Element Gap: 12-16px
- Input Height: 48-56px
- Border Radius: 8-12px (elements), 24px (inputs)

## 🔧 Tech Stack

- **React**: UI framework with hooks
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **@tailwindcss/postcss**: Tailwind PostCSS plugin

## 📝 Key Components

### Sidebar
- Displays OWLUX logo and branding
- Shows chat history with emoji icons
- Highlights selected chat
- Provides API selection dropdown

### Message Component
- User messages: Right-aligned, blue background, 70% max width
- Assistant messages: Left-aligned, gray background, 80% max width
- Supports multi-line text with proper formatting

### MessageInput
- Pill-shaped input field
- Attach button (⊕) on left
- Send button (↑) on right
- Disabled send button when empty
- Submit on Enter key

### Split View
- Opens sub-query panel on "Nueva consulta" button
- Divides screen 50-50
- Smooth slide-in animation
- Independent message lists and inputs
- Close button to return to full width

## 🎯 Future Enhancements

- Backend API integration
- Real AI model responses
- User authentication
- Message persistence
- File upload support
- Advanced sub-query features
- Mobile responsive layout
- Keyboard shortcuts
- Message search
- Export conversations

## 📄 License

This project was created as part of the OWLUX chat interface implementation.

## 🤝 Contributing

This is an MVP implementation. Future contributions welcome for:
- Mobile responsiveness
- Additional features
- Performance optimizations
- Accessibility improvements
