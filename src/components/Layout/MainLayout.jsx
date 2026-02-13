import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ConversationPanel from '../Conversation/ConversationPanel';
import SubQueryPanel from '../SubQuery/SubQueryPanel';

const MainLayout = () => {
  const [hasSubQuery, setHasSubQuery] = useState(false);

  const toggleSubQuery = () => {
    setHasSubQuery(!hasSubQuery);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar izquierdo - 256px fijo - BUG #3 FIX: shadow-sidebar-left */}
      <Sidebar />
      
      {/* Content area - ocupa el resto */}
      <div className="flex-1 flex overflow-hidden bg-[#FAFAFA]">
        {/* Conversación principal - BUG #1 FIX: Sin borde verde, solo border-gray cuando hay subquery */}
        <ConversationPanel 
          hasSubQuery={hasSubQuery} 
          onToggleSubQuery={toggleSubQuery}
        />
        
        {/* Panel de sub-consulta (condicional) - BUG #1 FIX: Mismo background #FAFAFA */}
        {hasSubQuery && (
          <SubQueryPanel onClose={toggleSubQuery} />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
