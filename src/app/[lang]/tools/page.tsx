import { Activity, AudioLines } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ToolCard } from "./_components/ToolCard";

const ToolsPage = async () => {
  const t = await getTranslations("ToolsPage");

  return (
    <div className="flex-1 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-2 text-gray-600">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mind Swing Card */}
          <ToolCard
            icon={Activity}
            link="/tools/mind-swing"
            text={t("Tools.MindSwing.description")}
            title={t("Tools.MindSwing.title")}
          />

          {/* Placeholder for future tools */}
          <ToolCard
            disabled
            icon={AudioLines}
            text={t("Tools.AudioPulses.description")}
            title={t("Tools.AudioPulses.title")}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
