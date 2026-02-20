import { ArrowRight, Activity, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const MainPage = async () => {
  const t = await getTranslations("MainPage");

  return (
    <div className="flex-1 bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t("description")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/tools"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2"
              >
                Explore Tools <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              {t("WorkFaster.name")}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("WorkFaster.title")}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Activity
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {t("WorkFaster.features.RealTimeControl.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {t("WorkFaster.features.RealTimeControl.description")}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {t("WorkFaster.features.PrivacyFirst.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {t("WorkFaster.features.PrivacyFirst.description")}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {t("WorkFaster.features.InstantSetup.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {t("WorkFaster.features.InstantSetup.description")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
