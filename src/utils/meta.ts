import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dolphin",
    template: "%s | Dolphin - ",
  },
  description:
    "Dolphin - ",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Dolphin - ",
    description:
      "",
    url: "https://www.dolphin.com",
    siteName: "Dolphin",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Dolphin - ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const getPageMetaData = (pageName: string) => {
  return {
    ...metadata,
    title: {
      default: pageName,
      template: "%s | Dolphin - ",
    },
  };
};
