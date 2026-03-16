import React from "react";
import { Timeline } from "./ui/timeline";
import { useLanguage } from "../contexts/LanguageContext";

export function TimelineDemo() {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <Timeline 
          title={t('journey.title')}
          subtitle={t('journey.subtitle')}
          data={[
            {
              title: "Problem",
              content: (
                <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal leading-relaxed">
                    {t('pas.problem.text')}
                  </p>
                </div>
              ),
            },
            {
              title: language === 'de' ? "Heraus-\nforderung" : "Challenge",
              content: (
                <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal leading-relaxed">
                    {t('pas.agitate.text')}
                  </p>
                </div>
              ),
            },
            {
              title: language === 'de' ? "Unsere Lösung" : "Our Solution",
              content: (
                <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal leading-relaxed">
                    {t('pas.solution.text')}
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}