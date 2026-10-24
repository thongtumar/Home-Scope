import React from 'react';
import { Header } from './components/Header';
import { ResearchBriefing } from './components/ResearchBriefing';
import { ProjectHero } from './components/ProjectHero';
import { EnvironmentalClaims } from './components/EnvironmentalClaims';
import { DataStatusSection } from './components/DataStatusSection';
import { GreenStandardsReference } from './components/GreenStandardsReference';
import { AIAnalysisPanel } from './components/AIAnalysisPanel';
import { Footer } from './components/Footer';
import {
  STIMULUS_VERSION,
  NO_CERTIFICATION_NOTE,
  projectSpec,
  environmentalClaims,
  infoGroups,
  sourceItems,
  stepFlows,
  summaryItems,
  summaryExplanation,
  referenceStandards,
  fixedQAs,
  fixedFreeTextAnswer,
} from './data/stimulus';

// All displayed project content comes from the fixed dataset in ./data/stimulus.ts
export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3748] font-sans antialiased flex flex-col selection:bg-slate-200 selection:text-slate-900">
      
      {/* 1. HEADER */}
      <Header projectName="An Phú Green Residence" />

      {/* 2. RESEARCH INSTRUCTION BRIEFING */}
      <ResearchBriefing />

      {/* MAIN RESEARCH CONTENT CONTAINER */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8 sm:space-y-10">
        
        {/* 3. HERO & PROJECT SPECS (no price, location or unit area) */}
        <ProjectHero spec={projectSpec} />

        {/* 4. ENVIRONMENTAL CHARACTERISTICS */}
        <EnvironmentalClaims claims={environmentalClaims} groups={infoGroups} />

        {/* 5. DATA SOURCES & INFORMATION STATUS */}
        <DataStatusSection groups={infoGroups} sources={sourceItems} />

        {/* 6. REFERENCE GREEN BUILDING STANDARDS */}
        <GreenStandardsReference standards={referenceStandards} noCertificationNote={NO_CERTIFICATION_NOTE} />

        {/* 7. AI-SUPPORTED ANALYSIS PANEL & OPEN INQUIRY BOX */}
        <AIAnalysisPanel 
          sources={sourceItems} 
          steps={stepFlows} 
          summaryItems={summaryItems}
          summaryExplanation={summaryExplanation}
          fixedQAs={fixedQAs}
          fixedFreeTextAnswer={fixedFreeTextAnswer}
        />

      </main>

      {/* 8. FOOTER */}
      <Footer version={STIMULUS_VERSION} />

    </div>
  );
}
