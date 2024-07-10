import React from "react";
import HeaderContent from "./HeaderContent";
import Output from "./Output";
import SuggestionsTodos from "./SuggestionsTodos";
import UserInputSection from "./UserInputSection";

function MainContainer() {
  return (
    <div class="ai-chat-content-body">
     <HeaderContent />

      <div class="ai-detail-wrap">
       <SuggestionsTodos />

        <Output />
      </div>
        <UserInputSection />
        
    </div>
  );
}

export default MainContainer;
