# OWLUX - AI Chat Interface

OWLUX is a modern chat interface for interacting with multiple AI models (OpenAI, Gemini, Claude) with support for parallel sub-queries.

## 🎯 Features

- **Multi-Model Support**: Switch between OpenAI GPT-4, Gemini 3 Flash, and Claude 3 Opus
- **Split View**: Open parallel sub-queries in a dedicated right panel
- **Clean UI**: Modern interface with proper shadows and subtle borders
- **Responsive Layout**: Fixed sidebar with scrollable content areas
- **Chat History**: Quick access to previous conversations

## 🐛 Bug Fixes Implemented

This implementation specifically addresses 3 critical visual bugs:

### ✅ Bug #1: No Green Border in Split View
- Consistent `#FAFAFA` background across all panels
- Only subtle gray borders (`border-gray-200`) for panel separation
- No colored borders, outlines, or unexpected box-shadows

### ✅ Bug #2: No Black Line Above API Selector
- Removed `border-top` from API selector containers
- Smooth gradient transition (`bg-gradient-to-t`) instead
- Proper absolute positioning at bottom of sidebars

### ✅ Bug #3: Proper Box Shadows Applied
- `shadow-sidebar-left`: 2px 0px 14.4px 0px rgba(0, 0, 0, 0.10)
- `shadow-sidebar-right`: -3px 0px 14.4px 0px rgba(0, 0, 0, 0.10)
- `shadow-header`: 0 1px 3px rgba(0, 0, 0, 0.08)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The app will be available at `http://localhost:5173/`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── MainLayout.jsx      # Main layout with flex structure
│   │   └── Sidebar.jsx          # Left sidebar with chat history & API selector
│   ├── Conversation/
│   │   ├── ConversationPanel.jsx   # Main conversation area
│   │   └── ConversationHeader.jsx  # Header with navigation
│   └── SubQuery/
│       ├── SubQueryPanel.jsx       # Right panel for sub-queries
│       └── SubQueryHeader.jsx      # Sub-query panel header
├── App.jsx                      # Root component
├── main.jsx                     # Entry point
└── index.css                    # Global styles with Tailwind directives
```

## 🎨 Design System

### Colors
- Background: `#FAFAFA`
- Sidebar: `#F5F5F5`
- Borders: `#E0E0E0` (gray-200)
- Text: `#111827` (gray-900)

### Shadows
Custom shadows defined in `tailwind.config.js`:
- `shadow-sidebar-left`: For left sidebar depth
- `shadow-sidebar-right`: For right panel depth
- `shadow-header`: For header elevation

### Layout
- Left Sidebar: 256px fixed width
- Content: Flex-1 (remaining space)
- Right Panel: Flex-1 (when opened)
- Z-index: Sidebar (10) > SubQuery (5) > Header (3) > Input (2)

## 🛠️ Tech Stack

- **React**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **@tailwindcss/postcss**: PostCSS plugin for Tailwind v4

## 📝 License

This project is part of a technical implementation for OWLUX interface bug fixes.
