import { contentImages } from "@/lib/content/mock";
import type { GalleryImage } from "@/lib/content/types";

const extra = {
  phoneDesk:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
  phoneBack:
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1600&q=80",
  cameraSample:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  cityNight:
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
  circuit:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  silicon:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  laptopOpen:
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80",
  watchFace:
    "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1600&q=80",
  cups:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
  handheld:
    "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=1600&q=80",
};

function slide(
  id: string,
  src: string,
  alt: string,
  caption: string,
  tag: string,
): GalleryImage {
  return { id, src, alt, caption, tag };
}

export const mockPressGalleries: Record<string, GalleryImage[]> = {
  "iphone-duo": [
    slide(
      "duo-press",
      contentImages.duo,
      "iPhone Duo official press hero on a desk, folded and unfolded silhouette",
      "Folded book, 5.2mm unfolded — Apple’s first foldable in press lighting.",
      "Official Press Gallery",
    ),
    slide(
      "duo-night-sky",
      contentImages.iphoneAlt,
      "iPhone Duo Night Sky Blue colorway, rear glass and titanium band",
      "Night Sky Blue titanium with a near-seamless hinge line.",
      "Colorway: Night Sky Blue",
    ),
    slide(
      "duo-inner",
      extra.laptopOpen,
      "iPhone Duo 7.6-inch inner Super Retina XDR display opened like a book",
      "7.6-inch inner canvas at 14:10 — Split View is the actual product.",
      "Inner Display Open",
    ),
    slide(
      "duo-camera",
      extra.phoneBack,
      "iPhone Duo rear camera island and flash close-up",
      "48MP Fusion island — no 5x tetraprism, so telephoto is a crop story.",
      "Camera Module",
    ),
    slide(
      "duo-sample-night",
      extra.cityNight,
      "Night city skyline sample from the iPhone Duo main camera",
      "Night Sky Blue sample: street lamps and glass, Fusion main camera.",
      "Camera Sample: Night",
    ),
    slide(
      "duo-sample-day",
      extra.cameraSample,
      "Daylight landscape camera sample from the iPhone Duo",
      "Daylight Fusion sample — color science first, zoom second.",
      "Camera Sample: Daylight",
    ),
    slide(
      "duo-cross-section",
      extra.circuit,
      "Engineering cross-section of a smartphone camera sensor and logic board",
      "Sensor stack and dual-cell battery tray — the hinge is the thermal wall.",
      "Sensor Cross-Section",
    ),
    slide(
      "duo-silicon",
      extra.silicon,
      "Internal silicon and board layout representing the A20 Pro package",
      "A20 Pro 2nm package and the dual cells that feed the inner canvas.",
      "Internal Engineering",
    ),
  ],
  "iphone-16-pro-max": [
    slide(
      "16pm-press",
      contentImages.iphone,
      "iPhone 16 Pro Max official press angle, Desert Titanium",
      "Desert Titanium Pro Max — the slab the rest of the industry still copies.",
      "Official Press Gallery",
    ),
    slide(
      "16pm-natural",
      contentImages.iphoneAlt,
      "iPhone 16 Pro Max Natural Titanium rear glass and camera control",
      "Natural Titanium with Camera Control under a thumb, not a keynote.",
      "Colorway: Natural Titanium",
    ),
    slide(
      "16pm-island",
      extra.phoneBack,
      "iPhone 16 Pro Max camera island, 5x tetraprism and LiDAR",
      "48MP Fusion + 5x tetraprism — the island is the product.",
      "Camera Island",
    ),
    slide(
      "16pm-sample",
      extra.cityNight,
      "Night photograph representing iPhone 16 Pro Max Fusion camera output",
      "Fusion night sample: neon, glass, and the 5x you actually use.",
      "Camera Sample: Night",
    ),
    slide(
      "16pm-tele",
      extra.cameraSample,
      "Daylight telephoto camera sample representing the 5x tetraprism",
      "5x tetraprism sample — compression without a backpack lens.",
      "Camera Sample: 5x Tele",
    ),
    slide(
      "16pm-sensor",
      extra.circuit,
      "Smartphone image-sensor cross-section and logic board",
      "Sensor cross-section — stacked Fusion die and the 5x folded path.",
      "Sensor Cross-Section",
    ),
    slide(
      "16pm-board",
      extra.silicon,
      "Internal logic-board engineering view of a flagship iPhone",
      "A18 Pro board: the wattage Camera Control spends before you notice.",
      "Internal Engineering",
    ),
  ],
  "galaxy-s24-ultra": [
    slide(
      "s24-press",
      contentImages.galaxy,
      "Samsung Galaxy S24 Ultra official press rear and S Pen",
      "Titanium S24 Ultra — S Pen in the tray, 5x in the island.",
      "Official Press Gallery",
    ),
    slide(
      "s24-titanium",
      extra.phoneBack,
      "Galaxy S24 Ultra titanium frame and camera deck close-up",
      "Titanium Gray camera deck — four lenses, one tray you will lose a tip in.",
      "Colorway: Titanium Gray",
    ),
    slide(
      "s24-sample",
      extra.cityNight,
      "Night city camera sample representing Galaxy S24 Ultra output",
      "Night sample from the 200MP main — sharpening you can turn down.",
      "Camera Sample: Night",
    ),
    slide(
      "s24-zoom",
      extra.cameraSample,
      "Telephoto landscape sample representing Galaxy S24 Ultra zoom",
      "10x-class crop sample — useful, then suddenly interpolation.",
      "Camera Sample: Zoom",
    ),
    slide(
      "s24-sensor",
      extra.circuit,
      "Camera sensor and board cross-section for a Galaxy flagship",
      "200MP sensor stack and the vapor chamber under the S Pen tray.",
      "Sensor Cross-Section",
    ),
    slide(
      "s24-board",
      extra.silicon,
      "Internal engineering view of a Galaxy S24 Ultra logic board",
      "Snapdragon board layout — heat lives under the camera deck.",
      "Internal Engineering",
    ),
  ],
  "pixel-10-pro": [
    slide(
      "pixel-press",
      contentImages.pixel,
      "Google Pixel 10 Pro official press rear camera bar",
      "Pixel 10 Pro camera bar — the Tensor look, cleaned up.",
      "Official Press Gallery",
    ),
    slide(
      "pixel-porcelain",
      extra.phoneDesk,
      "Pixel 10 Pro Porcelain colorway on a desk",
      "Porcelain rear glass — fingerprint magnet, honest color.",
      "Colorway: Porcelain",
    ),
    slide(
      "pixel-sample",
      extra.cameraSample,
      "Daylight camera sample representing Pixel computational photography",
      "HDR+ sample: skies that stay skies, faces that stay faces.",
      "Camera Sample: Daylight",
    ),
    slide(
      "pixel-night",
      extra.cityNight,
      "Night Sight style city sample from a Pixel camera",
      "Night Sight sample — the reason you forgive Tensor heat.",
      "Camera Sample: Night Sight",
    ),
    slide(
      "pixel-sensor",
      extra.circuit,
      "Pixel camera sensor cross-section and Tensor board",
      "Sensor cross-section next to the Tensor package.",
      "Sensor Cross-Section",
    ),
    slide(
      "pixel-board",
      extra.silicon,
      "Internal engineering view of a Pixel logic board",
      "Tensor board — the thermal wall after a 4K take.",
      "Internal Engineering",
    ),
  ],
  "sony-wh-1000xm6": [
    slide(
      "xm6-press",
      contentImages.headphones,
      "Sony WH-1000XM6 official press product shot",
      "XM6 cups and headband — the commute uniform.",
      "Official Press Gallery",
    ),
    slide(
      "xm6-midnight",
      extra.cups,
      "Sony WH-1000XM6 Midnight Black earcups and hinges",
      "Midnight Black cups — clamp force after a two-hour flight.",
      "Colorway: Midnight Black",
    ),
    slide(
      "xm6-earcup",
      contentImages.earbuds,
      "Close-up of Sony WH-1000XM6 earcup and driver housing",
      "Driver housing and the seal that makes ANC a product.",
      "Earcup Close-Up",
    ),
    slide(
      "xm6-driver",
      extra.circuit,
      "Headphone driver and board engineering cross-section",
      "Driver + ANC board cross-section — mics around the cup, not magic.",
      "Driver Cross-Section",
    ),
    slide(
      "xm6-board",
      extra.silicon,
      "Internal engineering view of a wireless headphone logic board",
      "Bluetooth + ANC processor board inside the right cup.",
      "Internal Engineering",
    ),
  ],
  "apple-watch-ultra-3": [
    slide(
      "ultra-press",
      contentImages.watch,
      "Apple Watch Ultra 3 official press product shot",
      "Ultra 3 titanium and Action button — the dive-watch that emails.",
      "Official Press Gallery",
    ),
    slide(
      "ultra-orange",
      extra.watchFace,
      "Apple Watch Ultra 3 Orange Alpine Loop colorway",
      "Orange Alpine Loop — the strap you will actually see on a trail.",
      "Colorway: Orange Alpine",
    ),
    slide(
      "ultra-crown",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1600&q=80",
      "Apple Watch Ultra 3 Digital Crown and Action button close-up",
      "Action button + Crown — two controls, one you will remap.",
      "Hardware Close-Up",
    ),
    slide(
      "ultra-sensor",
      extra.circuit,
      "Wearable optical-heart and GNSS sensor cross-section",
      "Optical HR + GNSS stack — the sensors the case must not block.",
      "Sensor Cross-Section",
    ),
    slide(
      "ultra-board",
      extra.silicon,
      "Internal engineering view of an Apple Watch logic board",
      "S-series board under the flat sapphire — tiny, hot, stubborn.",
      "Internal Engineering",
    ),
  ],
  "rog-ally-x-2": [
    slide(
      "ally-press",
      contentImages.handheld,
      "ASUS ROG Ally X 2 official press handheld shot",
      "Ally X 2 in the lap — PC games, handheld grips, laptop heat.",
      "Official Press Gallery",
    ),
    slide(
      "ally-black",
      extra.handheld,
      "ROG Ally X 2 black chassis and rear vents",
      "Black chassis and the exhaust you will feel on your palms.",
      "Colorway: Phantom Black",
    ),
    slide(
      "ally-controls",
      contentImages.gaming,
      "ROG Ally X 2 hall-effect sticks and rear buttons close-up",
      "Hall sticks and rear paddles — the PC controls you map twice.",
      "Controls Close-Up",
    ),
    slide(
      "ally-board",
      extra.circuit,
      "Handheld PC motherboard and vapor-chamber cross-section",
      "Vapor chamber and SSD bay — the engineering you buy the X for.",
      "Board Cross-Section",
    ),
    slide(
      "ally-silicon",
      extra.silicon,
      "Internal APU and memory layout of a handheld PC",
      "APU + LPDDR package — 17W is a personality, 25W is a heater.",
      "Internal Engineering",
    ),
  ],
};

export function fallbackPressGallery(
  productName: string,
  featuredImage: string,
  slug: string,
): GalleryImage[] {
  const productKey = slug.replace(/-review$/, "").replace(/-hands-on$/, "");
  const specific = mockPressGalleries[productKey];
  if (specific?.length) {
    return specific.map((item, index) =>
      index === 0 && featuredImage
        ? { ...item, src: featuredImage }
        : item,
    );
  }

  return [
    slide(
      `${productKey}-press`,
      featuredImage || contentImages.iphone,
      `${productName} official press hero`,
      `${productName} — official press lighting on the TechToReview desk.`,
      "Official Press Gallery",
    ),
    slide(
      `${productKey}-angle`,
      extra.phoneDesk,
      `${productName} three-quarter design angle`,
      "Three-quarter design angle — materials, ports, and the grip.",
      "Design Angle",
    ),
    slide(
      `${productKey}-color`,
      extra.phoneBack,
      `${productName} rear colorway and finish`,
      `Colorway close-up — the finish you will fingerprint first.`,
      "Colorway Close-Up",
    ),
    slide(
      `${productKey}-sample`,
      extra.cameraSample,
      `Daylight camera sample associated with ${productName}`,
      "Daylight sample — color science before the spec sheet.",
      "Camera Sample: Daylight",
    ),
    slide(
      `${productKey}-night`,
      extra.cityNight,
      `Night camera sample associated with ${productName}`,
      "Night sample — lamps, glass, and the noise floor.",
      "Camera Sample: Night",
    ),
    slide(
      `${productKey}-sensor`,
      extra.circuit,
      `Sensor and board cross-section for ${productName}`,
      "Sensor cross-section — the stack marketing calls a camera.",
      "Sensor Cross-Section",
    ),
    slide(
      `${productKey}-board`,
      extra.silicon,
      `Internal engineering view related to ${productName}`,
      "Internal engineering — heat, cells, and the part that gets warm.",
      "Internal Engineering",
    ),
  ];
}
