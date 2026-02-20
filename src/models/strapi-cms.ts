// import type { IBenefitsProps } from "@pasha-ins/ui/benefits";
// import type { ICustomerReviewsProps } from "@pasha-ins/ui/customer-reviews";
// import type { IFaqProps } from "@pasha-ins/ui/faq";
// import type { IMobileBannerProps } from "@pasha-ins/ui/mobile-banner";
// import type { IRisksProps } from "@pasha-ins/ui/risks";
// import type { IWhyChooseUsProps } from "@pasha-ins/ui/why-choose-us";

import { TAvailableLocale } from "I18n/models";

// import type { ICorporateRequestFormProps } from "../../app/[lang]/_widgets/CorporateRequestFormWidget";
// import type { ICallToActionProps } from "../../app/[lang]/_widgets/CallToAction";
// import type { IHeroSectionProps } from "../../app/[lang]/_widgets/HeroSection";
// import type { ILeadFormProps } from "../../app/[lang]/_widgets/LeadFormWidget";
// import { IMarkdownWidgetProps } from "../../app/[lang]/_widgets/MarkdownWidget";
// import { IOurPackagesProps } from "../../app/[lang]/_widgets/OurPackagesWidget";
// import type { IOurProductsProps } from "../../app/[lang]/_widgets/OurProducts";
// import { IRichTextProps } from "../../app/[lang]/_widgets/RichTextWidget";
import type { IAnyObject, IEntity, IStrapiDocument } from "./common";
import { IOpenGraphMeta, ISeoMeta } from "./metadata";

/**
 * Strapi Image model.
 * TODO: Replace with model from Strapi (Schema.Attribute.Media<'images'>).
 */
export interface IStrapiImage extends IEntity {
  documentId: string;
  formats: IAnyObject;
  hash: string;
  height: number;
  name: string;
  size: number;
  url: string;
  width: number;
}

export interface IStrapiSeoMeta extends ISeoMeta, IEntity {}

/**
 * Model of Page with SEO metadata.
 */
export interface IPageWithSeoMeta {
  seo: IStrapiSeoMeta;
}

/**
 * Model of page with Open Graph metadata.
 */
export interface IPageWithOpenGraphMeta {
  openGraph: IOpenGraphMeta<IStrapiImage>;
}

/**
 * Page model.
 */
export interface IPage extends IStrapiDocument {
  locale: TAvailableLocale;
  slug: string;
  title: string;
}

/**
 * Page Header Tab model.
 */
export interface IPageHeaderTab extends IEntity {
  label: string;
  page: IPage;
}

/**
 * Page Header Tabs model.
 */
export interface IPageHeaderTabs extends IEntity {
  tabs: IPageHeaderTab[];
}

/**
 * Strapi CMS Dynamic Zone Component Model.
 */
export interface IDynamicZoneComponent<
  TName extends string = string,
> extends IEntity {
  /** Strapi CMS component name. */
  __component: TName;
}

/**
 * Strapi CMS FAQ Widget model.
 */
// export interface IFaqWidget
//   extends IDynamicZoneComponent<"widgets.faq-widget">, IFaqProps {}

// /**
//  * Strapi CMS Our Packages Widget model.
//  */
// export interface IOurPackagesWidget
//   extends
//     IDynamicZoneComponent<"widgets.our-packages-widget">,
//     IOurPackagesProps {}

// /**
//  * Strapi CMS Our Products Widget model.
//  */
// export interface IOurProductsWidget
//   extends
//     IDynamicZoneComponent<"widgets.our-products-widget">,
//     IOurProductsProps {}

// /**
//  * Strapi CMS Customer Reviews Widget model.
//  */
// export interface ICustomerReviewsWidget
//   extends
//     IDynamicZoneComponent<"widgets.customer-reviews-widget">,
//     ICustomerReviewsProps {}

// /**
//  * Strapi CMS Hero Section Widget model.
//  */
// export interface IHeroSectionWidget
//   extends
//     IDynamicZoneComponent<"widgets.hero-section-widget">,
//     IHeroSectionProps {}

// /**
//  * Strapi CMS Corporate Request Form Widget model.
//  */
// export interface ICorporateRequestFormWidget
//   extends
//     IDynamicZoneComponent<"widgets.corporate-request-form-widget">,
//     ICorporateRequestFormProps {}

// /**
//  * Strapi CMS CTA Section Widget model.
//  */
// export interface ICtaSectionWidget
//   extends
//     IDynamicZoneComponent<"widgets.cta-section-widget">,
//     ICallToActionProps {}

// /**
//  * Strapi CMS Lead Form Widget model.
//  */
// export interface ILeadFormWidget
//   extends IDynamicZoneComponent<"widgets.lead-form-widget">, ILeadFormProps {}

// /**
//  * Strapi CMS Why Choose Us Widget model.
//  */
// export interface IWhyChooseUsWidget
//   extends
//     IDynamicZoneComponent<"widgets.why-choose-us-widget">,
//     IWhyChooseUsProps {}

// /**
//  * Strapi CMS Benefits Widget model.
//  */
// export interface IBenefitsWidget
//   extends IDynamicZoneComponent<"widgets.benefits-widget">, IBenefitsProps {}

// /**
//  * Strapi CMS Call to Action Mobile Banner Widget model.
//  */
// export interface ICtaMobileBannerWidget
//   extends
//     IDynamicZoneComponent<"widgets.cta-mobile-banner-widget">,
//     IMobileBannerProps {}

// /**
//  * Strapi CMS RichText Widget model.
//  */
// export interface IMarkdownWidget
//   extends
//     IDynamicZoneComponent<"widgets.markdown-widget">,
//     IMarkdownWidgetProps {}

// /**
//  * Strapi CMS RichText Widget model.
//  */
// export interface IRichTextWidget
//   extends IDynamicZoneComponent<"widgets.rich-text-widget">, IRichTextProps {}

// /**
//  * Strapi CMS Risks Widget model.
//  */
// export interface IRisksWidget
//   extends IDynamicZoneComponent<"widgets.risks-widget">, IRisksProps {}

// /**
//  * Union type of all Strapi Widget Models.
//  */
// export type TStrapiWidget =
//   | IBenefitsWidget
//   | ICorporateRequestFormWidget
//   | ICtaMobileBannerWidget
//   | ICtaSectionWidget
//   | ICustomerReviewsWidget
//   | IFaqWidget
//   | IHeroSectionWidget
//   | ILeadFormWidget
//   | IMarkdownWidget
//   | IOurPackagesWidget
//   | IOurProductsWidget
//   | IRichTextWidget
//   | IRisksWidget
//   | IWhyChooseUsWidget;
