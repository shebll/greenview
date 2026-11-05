import type { IconName } from "@/components/shared/Icon";

// To use real images: copy files into /public/images/... and set `src` (e.g. "/images/project/main.jpg").
// Without `src`, a placeholder with the same aspect ratio is shown.
export type ImageItem = { alt: string; src?: string };
export type VideoItem = { title: string; youtubeId: string | null };

export const project = {
  city: "Hollywood, Florida",
  title: "Greenview Apartments",
  breadcrumb: [{ label: "Home", href: "#" }, { label: "Greenview Apartments" }],
  metadata: [
    { icon: "layers", label: "Status", value: "Under Construction" },
    { icon: "building", label: "Project Type", value: "Apartment" },
    { icon: "area", label: "Project Area", value: "26,346.74 Sq. Ft." },
    { icon: "calendar", label: "Commencement date", value: "28 Jun, 2021" },
    { icon: "dollar", label: "Price Range", value: "$600k – $1.9M" },
  ] satisfies { icon: IconName; label: string; value: string }[],
  mainImage: { alt: "Greenview Apartments building exterior" } as ImageItem,
  descriptionTitle: "Project description",
  description: [
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam.",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
  ],
  keyDetails: [
    { label: "Location:", value: "Central Business District." },
    { label: "Total Built-Up Area:", value: "350,000 sq. ft." },
    {
      label: "Number of Floors:",
      value: "20, including two underground levels for parking.",
    },
    {
      label: "Special Features:",
      value:
        "Vertical garden facade, collaborative workspaces, and an energy-efficient HVAC system.",
    },
    {
      label: "Amenities:",
      value: "Gym, café, daycare, and rooftop event space.",
    },
  ],
  featuresTitle: "Features & amenities",
  features: [
    {
      icon: "shield",
      title: "24x7 Security",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      icon: "eye",
      title: "Surveillance System",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      icon: "dumbbell",
      title: "Fitness Center",
      text: "Consectetur quae ab illoentore veritatis",
    },
    {
      icon: "play",
      title: "Children's play area",
      text: "Totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },
    {
      icon: "wrench",
      title: "24 hour maintenance",
      text: "Consectetur quae ab illoentore veritatis",
    },
    {
      icon: "pool",
      title: "Swimming Pool",
      text: "Totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },
    {
      icon: "flame",
      title: "Firefighting System",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      icon: "tree",
      title: "Landscape Garden",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
  media: {
    title: "Media",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      alt: `Greenview Apartments photo ${n}`,
      src: `/images/gallery/photo-${n}.jpg`,
    })) as ImageItem[],
    plans: [1, 2, 3].map((n) => ({
      alt: `Floor plan ${n}`,
      src: `/images/plans/plan-${n}.jpg`,
    })) as ImageItem[],
    // Add a YouTube id to switch the placeholder to a real embed in VideoGallery.
    videos: [
      {
        title: "Project Video",
        youtubeId: "l6EzZafb1Pk",
      },
    ] as VideoItem[],
    streetViewUrl:
      "https://www.google.com/maps/embed?pb=!4v1744256141658!6m8!1m7!1sl64WTLlToUR6asEnbv0CaQ!2m2!1d40.69287424788244!2d-74.01886910680169!3f197.8103908012273!4f11.502767589312512!5f0.7820865974627469",
  },

  location: {
    title: "Location",
    addressLabel: "Address",
    text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",

    address: "London Eye, London, United Kingdom",
    directionsLabel: "Get Direction",
    directionsUrl:
      "https://www.google.com/maps?cid=4796882358840715922&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF",
    transportTitle: "Key transport",
    transport: [
      ["Westminster Underground Station", "350m"],
      ["Waterloo Underground Station", "500m"],
      ["Waterloo Railway Station", "600m"],
      ["Big Ben", "350m"],
      ["Westminster Bridge", "100m"],
      ["SEA LIFE London Aquarium", "200m"],
      ["Jubilee Gardens", "100m"],
      ["St Thomas' Hospital", "500m"],
      ["County Hall", "150m"],
    ],
  },
  form: { title: "Request more information", submit: "Submit" },
  nav: {
    prev: { label: "previous project", href: "#" },
    next: { label: "next project", href: "#" },
  },
};
