import { authors, contentImages } from "@/lib/content/mock";
import { buildReview, reviewToc } from "@/lib/content/longform/build";

export const galaxyS24UltraReview = buildReview({
  slug: "galaxy-s24-ultra-hands-on",
  productName: "Galaxy S24 Ultra",
  title: "Galaxy S24 Ultra Real-World Review: Quirks & Hidden Features",
  subtitle:
    "Months past the anti-reflective demo: S Pen latency on real paper, Galaxy AI that works offline, and the zoom stack launch-day reviews treated as a slideshow.",
  excerpt:
    "The anti-reflective panel is not a showroom flex. After months outdoors, it is the reason the S24 Ultra still leads — and the S Pen is the reason it is not just another 6.8-inch slab.",
  category: "Mobile",
  categorySlug: "mobile",
  categoryLabel: "Mobiles",
  breadcrumbProduct: "Galaxy S24 Ultra Review",
  author: authors.jordan,
  publishedAt: "2026-09-09T11:30:00.000Z",
  updatedAt: "2026-09-12T05:30:00.000Z",
  editorialNote: "Daily Driver Addendum: Months of Real-World Use",
  featuredImage: contentImages.galaxy,
  imageCaption:
    "S24 Ultra at a noon crosswalk — the anti-reflective sheet is doing more work than the peak nits.",
  imageCredit: "TechToReview lab / Unsplash",
  hook: "The first mistake I made with the Galaxy S24 Ultra was treating the anti-reflective display as a keynote slide. I stood in a glass atrium at noon, brightness at `40%`, and could still read a spreadsheet the iPhone next to me had already punched to max. Then I tried to sign a PDF with the S Pen on a train tray while the car swayed, and the “laptop killer” story fell apart: palm rejection is excellent on a desk and merely good when your pinky is also holding a coffee. Launch coverage obsessed over Galaxy AI circle-to-search demos. Three months as a daily driver, the real friction is different. The `10x` telephoto hunts under a single restaurant bulb. Circle to Search wants a clean network the first week you enable it. And the flat, slightly sharp corners that look like a tool in photos will sand a pocket seam if you skip a case. I used this as my only phone through a humid launch week, a dusty job site, and a transatlantic flight. The Ultra is still the Android to beat. It is also the one that punishes people who only tested it on a demo table.",
  featureHeading: "Anti-glare display, S Pen, and the zoom stack",
  featureIntro:
    "Samsung’s three selling points on this generation are the Corning-coated anti-reflective panel, the built-in S Pen, and a camera stack that still talks about `10x` optical like it is a personality. In daily use they are not equal. The display is the feature I would pay for again without hesitation. The S Pen is the feature that justifies the Ultra over a Plus if you annotate, measure, or hate typing one-handed replies. The zoom stack is excellent in `5000K` daylight and a negotiation everywhere else.",
  featureParagraphs: [
    "Outdoors, the anti-reflective sheet changes behavior. I stopped hunting shade to check Maps. At a car rental desk under fluorescent plus sun through glass, I could keep brightness around `50%` and still see boarding passes. That is not just peak nits — iPhones can get as angry-bright — it is glare rejection. The cost is a slightly more “etched” look in dark rooms, like a matte monitor. OLED purists who stare at black bars in Netflix will notice a faint texture. I noticed it for two nights and then preferred it to seeing my own face in the panel on the evening commute.",
    "S Pen latency on a still note is still class-leading. Latency on a moving train, with your palm also on glass, is the test store demos skip. Samsung Notes is fine. Adobe and third-party PDF apps vary; one banking app treated the pen as a fat finger and dropped the signature. The Bluetooth remote shutter in the pen is the sleeper: group photos at arm’s length, a slide clicker in a pinch. The hidden tax is losing the pen. It clicks in firmly, but a soft case that does not hug the silhouette will let it walk at airport security. I now do a thumb-check every time the tray comes back.",
    "The camera stack is `200MP` wide, ultra-wide, `3x`, and `10x`. In daylight, `10x` is the reason I did not carry a small camera to a street market. Faces at `12m` hold eyelashes. At dusk, `10x` becomes a tripod lens that you are handholding. Preview stays confident; the file shows noise in fabric and a slight smear if you breathed. `3x` is the portrait I actually send. Nightography on faces is cleaner than two generations ago and still too smooth on skin if you leave the AI enhance toggles at default. I shoot Expert RAW only when I know I will sit down later. For everything else, the JPEG/HEIF pipeline is good enough if you turn off the “reprocess this into a painting” suggestions.",
  ],
  useWhen: [
    "Outdoor work, dashboards, and glass-heavy offices where other flagships force max brightness. Keep Adaptive brightness on; the anti-glare sheet does the rest.",
    "Annotation, measurements, and slide decks. S Pen plus Samsung Notes or a PDF app that actually declares stylus support.",
    "Daylight `3x` and `10x` stills where you can brace an elbow. This is the zoom phone if the sun is out.",
  ],
  avoidWhen: [
    "One-handed night photography at `10x` while walking. Drop to `3x` or pull out a tiny tripod. The preview will lie.",
    "Signing legally important PDFs in a third-party app you have not tested. Confirm the app sees the S Pen as a stylus, not a finger.",
    "Bare-pocket carry if you care about the corners or the pen. The slab will polish itself on denim and the pen will audition for freedom.",
  ],
  hiddenHeading: "Modes, Good Lock, and an S Pen that is not just a pencil",
  hiddenIntro:
    "Spec sheets mention Galaxy AI and stop. The useful non-obvious stack is Modes and Routines plus Good Lock’s Home Up / NavStar, with the S Pen remote as a camera trigger. Out of the box, the Ultra is a demo unit: every AI banner on, RAM plus hogging games, and an Edge panel you will open by accident. The first hour of setup is not optional if you want the phone you saw in the review, not the phone Samsung ships to impress a quarterly report.",
  hiddenParagraphs: [
    "The common error is turning on every Galaxy AI toggle because the setup wizard sounds like you will miss out. Live translate on calls is useful in a hotel lobby and a battery and privacy tax on a normal Tuesday. Circle to Search is the one I leave on. Object erase is the one I use after the fact, not as a shooting style. Another error: never creating a “Desk” mode that locks `120Hz`, opens Notes, and disables the accidental Edge swipe while the phone sits on a stand.",
    "Good Lock is still the real Samsung advantage, and it is still buried. Home Up lets you tighten icon grids so the `6.8-inch` panel is not a desert of padding. NavStar can move the gesture bar so the S Pen barrel does not trigger back. People bounce to iPhone because “One UI is messy.” One UI is messy at defaults. After a Saturday of Modes + Good Lock, it is the most adult Android launcher I use.",
  ],
  workflowTitle: "Build a Desk mode and tame the S Pen remote",
  workflowSteps: [
    "Open Modes and Routines → Modes → Add. Call it Desk. Trigger: charging OR Bluetooth to your monitor/keyboard. Actions: `120Hz` on, Wi-Fi preferred, Edge panels off, Samsung Notes on the first home page.",
    "Install Good Lock from the Galaxy Store. In Home Up, tighten the grid and disable the extra Google feed if you never swipe it. In NavStar, add a dead zone on the right edge if you are a left-thumb plus pen user.",
    "Open Camera → Settings → S Pen and confirm the remote shutter is on. Practice a `3s` delay so group shots are not all of your own face mid-blink.",
    "Settings → Advanced features → S Pen → Air actions: map a simple next/previous for slides. Ignore the gymnastic mid-air doodles unless you enjoy explaining them in a meeting.",
  ],
  workflowWarning:
    "Do not let the setup wizard enable “processing from photos” and every AI rewrite by default. Those run after you think you are done shooting and will rewrite a color-accurate product shot into a brochure. Review Settings → Galaxy AI and Photos → Suggestions before a work week.",
  batteryIntro:
    "Samsung’s video-playback claim still lives in the `20-hour` neighborhood depending on region and the exact Ultra SKU. A mixed `5G` weekday with `120Hz`, a 25-minute S Pen session, and a handful of `10x` frames landed me between `7` and `8.5` hours screen-on, dead around `10–11pm` if I started at `7am` on a full charge. That is all-day for a desk-plus-commute human. It is not two-days-easy the way a dim iPhone 16 Pro Max can feel if you murder Always-On. The `45W` charger is not in every box. Plan on that.",
  battery: {
    claimed: "Up to ~20-hour video playback (Samsung lab, region SKU)",
    realWorld: "All day to 10–11pm on mixed 5G; not a true two-day phone",
    screenOn: "7–8.5 hours at 120Hz with S Pen and camera walks",
    drainers: [
      { label: "`5G` + `120Hz` + Adaptive brightness outdoors", penalty: "`12–18%` extra versus a Wi-Fi `60Hz` desk day" },
      { label: "Galaxy AI live features and Circle to Search spam", penalty: "`4–6%` in a meeting-heavy afternoon" },
      { label: "`10x` bursts and `8K` or `4K60` video", penalty: "`10 min` of heavy zoom/video ≈ `40–50` minutes mixed SOT" },
      { label: "DeX on a monitor plus a warm desk", penalty: "Thermal throttle plus `1%/6 min` while the panel stays awake" },
    ],
    tips: [
      "Create a Travel routine: `60Hz`, `5G` auto, Always On Display off. That single mode gave me back the last hour of a flight.",
      "Use the official `45W` PD profile, not a tired `18W` brick. A proper `45W` session `0–80%` is the difference between a lunch save and a dead boarding phone.",
      "Protect for Battery (charge limit around `80%`) if the Ultra sleeps on a charger every night. The `5,000mAh`-class cell ages like every other dense pack if you keep it cooked at `100%`.",
    ],
  },
  gotchas: [
    {
      title: "Weight, corners, and one-handed reach",
      problem:
        "This is a `230g+` tool. The sharp-ish corners look architectural and will wear a pocket. Top-left icons are a stretch if the S Pen is also in your grip.",
      workaround:
        "A thin case that covers corners but leaves the anti-reflective sheet naked. One-handed mode in Advanced features. Do not pretend this is a commute-compact.",
    },
    {
      title: "`10x` hunt in warm indoor light",
      problem:
        "The telephoto wants photons. A pendant-lit bar makes it pulse while the preview looks fine.",
      workaround:
        "Switch to `3x`, brace both elbows, or accept a slightly brighter JPEG from the wide. Turn off extra AI sharpening if fabric turns to paste.",
    },
    {
      title: "S Pen in soft cases and at security",
      problem:
        "A loose case plus a bin tray is how pens disappear. Replacement is not a convenience-store item in every city.",
      workaround:
        "Thumb-check the silo after every bag-out. Buy the official silo-friendly case, not a generic bumper that floats the pen `1mm` out.",
    },
    {
      title: "Thermals in DeX, gaming, and summer cars",
      problem:
        "The vapor chamber is good. A sealed car dash plus `5G` plus DeX is not. The modem and the SoC will take turns throttling before the warning looks serious.",
      workaround:
        "Pull it off the vent mount. Use Wi-Fi when you can. DeX is a hotel-desk feature, not a dashboard feature.",
    },
  ],
  buyerChecklist: [
    "S Pen: draw a tight spiral, click the remote shutter, and reseat it twice. Reject a unit with a scratchy silo or a pen that needs a fingernail to extract.",
    "Display and cameras: view a white page outdoors, then shoot `1x`, `3x`, and `10x` in daylight and under the store’s warm lights. Look for dust in the telephoto well and burn-in on a used unit (grey Android nav bar ghosts).",
    "Battery and ports: Settings → Battery for health/cycle if the region exposes it. Confirm USB-C PD at more than trickle, and that the fingerprint reader works with a slightly damp thumb.",
  ],
  faqs: [
    {
      question: "Why does Circle to Search or live translate feel broken on Wi-Fi?",
      answer:
        "First-week Galaxy AI downloads and region licensing are picky. Update the phone, open the Galaxy AI settings, and confirm the language packs actually finished. A VPN can make call-translate fall back to “not available” even when the rest of the phone is fine.",
    },
    {
      question: "Why are my `10x` photos sharp on the screen and mushy later?",
      answer:
        "Preview is a performance render. Indoor `10x` needs light and a still hand. Brace, drop to `3x`, or wait a half-second after the lens stops hunting. Turn off extra processing suggestions in Photos if it is “helping” texture into soup.",
    },
    {
      question: "The S Pen writes in Notes but not in my bank PDF. Is the pen dead?",
      answer:
        "Usually the app. Many WebViews treat the stylus as a touch. Download the PDF and open it in Samsung Notes or a stylus-aware editor. If Notes also fails, reseat the pen and check S Pen settings for a disconnected remote — writing can still work when Bluetooth features do not.",
    },
    {
      question: "Why does the phone get hot and the zoom stutter in the car?",
      answer:
        "Direct sun plus a vent mount plus `5G` is the Ultra’s worst thermal stack. Move it off the glass, disable `8K`/high-zoom video, and give it two minutes in shade. Recurring heat on a desk with no sun is a case/charging issue — try a `25–45W` brick and a thinner case.",
    },
  ],
  closing:
    "Months later, the S24 Ultra is still the Android I hand to people who work on glass-heavy days and actually use a stylus. It is not the Android I hand to someone who wants a light, polite phone that disappears. The anti-reflective display is the long-term reason to stay. The S Pen is the reason to pay Ultra money. The zoom stack is a daylight specialist that launch photography oversold as an always-on superpower. Tame Modes, Good Lock, and the AI defaults, and this is the most complete slab in the game. Leave the defaults on, lose the pen in a tray, and you will write the same disappointed forum post I now recognize on sight.",
  pros: [
    "Best outdoor readability in the current flagship class",
    "S Pen is still a real work tool, not a nostalgia stub",
    "`3x`/`10x` daylight zoom that replaces a small camera on trips",
    "Modes + Good Lock can make One UI feel adult",
  ],
  cons: [
    "Heavy, sharp-cornered, and easy to lose the pen",
    "`10x` and AI processing still lie in warm indoor light",
    "All-day, not two-day, if you leave `120Hz` and `5G` on",
    "Galaxy AI defaults add heat, clutter, and surprise reprocessing",
  ],
  specs: {
    Display: "`6.8-inch` QHD+ AMOLED, anti-reflective, `120Hz`",
    Chip: "Snapdragon 8 Gen 3 for Galaxy (most regions)",
    "Rear cameras": "`200MP` wide, UW, `3x`, `10x` tele",
    Battery: "`5,000mAh` class, `45W` wired",
    Stylus: "Built-in S Pen with Bluetooth remote",
    Weight: "`232g` tool-slab",
  },
  toc: reviewToc("Display, S Pen & Zoom", "headline-features"),
  score: 9.0,
});
