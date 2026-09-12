import { authors, contentImages } from "@/lib/content/mock";
import { buildReview, reviewToc } from "@/lib/content/longform/build";

export const iphoneDuoReview = buildReview({
  slug: "iphone-duo-review",
  productName: "iPhone Duo",
  title: "iPhone Duo Real-World Review: Quirks & Hidden Features",
  subtitle:
    "Weeks as a daily driver with Apple’s first foldable — the 7.6-inch inner canvas, side-button Touch ID, and the habits you have to unlearn after the iPhone X.",
  excerpt:
    "This is not a launch-day hands-on recap. After weeks of commuting, split-screen, and pocket carry, the Duo’s real story is iOS 27 multitasking, Touch ID in the power button, and a 254-gram hinge you will drop if you open it like a book.",
  category: "Mobile",
  categorySlug: "mobile",
  categoryLabel: "Mobiles",
  breadcrumbProduct: "iPhone Duo Review",
  author: authors.maya,
  publishedAt: "2026-09-12T07:00:00.000Z",
  updatedAt: "2026-09-12T07:00:00.000Z",
  editorialNote: "Daily Driver Addendum: Weeks of Real-World Use",
  featuredImage: contentImages.duo,
  imageCaption:
    "iPhone Duo after a weekday commute — 5.2mm unfolded, almost no lip, and a hinge that wants two hands until you relearn it.",
  imageCredit: "TechToReview lab / Unsplash",
  hook: "The first three days I carried the iPhone Duo, I nearly dropped it every time I tried to open it with one hand. At `5.2mm` thin unfolded, the titanium edges give your fingers very little lip to leverage. If you attempt to force the hinge open near the top corner while walking, your thumb naturally presses right against the `5.4-inch` outer Ceramic Shield glass — leaving a massive smudge streak across your view. Mainstream launch coverage focuses heavily on the `$1,999` starting price and the impressive lack of a deep display crease. After real-world testing, the true story of this phone is how iOS 27 re-learns multitasking, how the return of Touch ID in the power button changes biometrics, and why carrying a `254-gram` folding slab requires relearning habits you have had since the iPhone X.",
  featureHeading: "The 7.6-inch Inner Display & Hinge",
  featureIntro:
    "On paper, the Duo gives you a `5.4-inch` cover screen and a `7.6-inch` inner `120Hz` Super Retina XDR OLED panel. In practice, it is two entirely different devices: a compact single-hand phone outside, and a mini iPad mini inside. I have used Apple’s first foldable as my daily driver since its unveiling — commuting, split-screen multitasking, pocket carrying, and treating the inner display and side-button Touch ID like a permanent part of my workflow.",
  featureParagraphs: [
    "The nano-texture inner display finish does a remarkable job of taming reflections and masking the central hinge line under direct light. However, the inner screen is a soft, flexible surface. If you have long fingernails or tap vigorously during mobile gaming, you will feel the slight give of the panel. That is not a defect in the first week. It is the polymer-over-UTG stack telling you this is not Ceramic Shield 2.",
    "The `2nm` A20 Pro processor delivers extreme headroom, but running two full-res app windows side-by-side continuously pushes thermal dissipation straight into the Grade 5 titanium frame. It gets warm in the lower half where the dual-battery cells sit. After 40 minutes of Safari plus Notes on a sunny desk, the lower book is the part I put down first. The hinge itself is the other personality: it will hold `45°`, `90°`, and a Flex tent if you set it there on purpose. It will not forgive a one-handed flick at walking speed.",
    "iOS 27 is the software that makes the inner canvas a product instead of a stunt. Drag any Dock icon to an edge and you get `50/50` or `70/30` Split View. Save the pair to the Home Screen and Monday morning is Safari-left, Messages-right without a hunt. That is the Duo job. The cover screen is for the five-second reply you should not unfold for.",
  ],
  useWhen: [
    "Split View with two apps open simultaneously — Safari on the left and Notes or Messages on the right.",
    "Reviewing `4K` clips or high-res photos where the `14:10` inner aspect ratio gives you expansive canvas space.",
    "Reading e-books or long-form reviews in dual-column view at a desk or on a tray table.",
  ],
  avoidWhen: [
    "Standing on a packed train or walking in rain. The inner anti-reflective coating hates rainwater droplets and finger oils.",
    "A quick single-handed reply. Stick to the `5.4-inch` cover screen; unfolding for a 5-second text is an invitation to drop a `$2,000` phone.",
    "One-handed hinge flicks while walking. Open it with two hands or leave it folded until you stop.",
  ],
  hiddenHeading: "Duo Preview & Dual-Screen Camera Tricks",
  hiddenIntro:
    "The iPhone Duo swaps out the traditional Pro telephoto lens array for a dual `48MP` Fusion system (Main + Ultra Wide with `2x` optical sensor-shift crop) to keep the chassis paper-thin. To make up for the missing `5x` optical glass, Apple added clever dual-screen software. The standout trick is Duo Preview paired with high-resolution main-camera selfies — a workflow launch coverage treated as a demo, and the one I now use every time the light is ugly.",
  hiddenParagraphs: [
    "The internal under-display camera is hidden seamlessly beneath the `7.6-inch` panel, but it is strictly designed for `1080p` FaceTime calls. Do not accidentally use the inner camera for portrait photography — it will look soft compared to the outer `12MP` Center Stage lens or the rear `48MP` main shooter. The common setup error is unfolding, tapping the shutter on the inner canvas, and wondering why the selfie looks like a hotel TV.",
    "Camera Control still lives on the frame. Light-press to lock focus works in Flex tent the same way it does on a Pro Max, except you can now show the subject their face on the cover screen. That is the compensation for no tetraprism: software that treats two panels as one camera.",
  ],
  workflowTitle: "Set up Duo Preview in a Flex tent",
  workflowSteps: [
    "Open Camera while the phone is folded, then unfold the device halfway into a Flex tent stance on a flat surface.",
    "Tap the Duo Preview icon in the top corner. This lights up the `5.4-inch` outer display so your subject can see their framing in real time.",
    "Set Camera Control Light Press to lock focus and exposure. Stay on the rear `48MP` main, not the under-display inner cam.",
    "Turn the phone around and use the `48MP` primary sensor for selfies while framing yourself on the cover screen — bypassing the internal under-display selfie camera entirely for far superior low-light shots.",
  ],
  workflowWarning:
    "The under-display inner camera is for FaceTime, not portraits. If the preview looks soft and the file looks softer, you are on the wrong camera. Check the lens chip before you send the photo.",
  batteryIntro:
    "Apple quotes `31` hours of video playback on the main screen and up to `44` hours on the outer screen thanks to the custom dual-battery design. Real-world mixed daily use paints a different picture. On a typical workday with `4` hours on `5G`, `2` hours of dual-window Split View, camera sessions, and constant notification syncing, the `4,700mAh` split pack lands at roughly `20%` to `25%` remaining by `10pm`.",
  battery: {
    claimed: "31h inner / 44h cover video playback (Apple lab)",
    realWorld: "20–25% left by 10pm on a mixed 5G + Split View weekday",
    screenOn: "All-day if you live on the cover; ~6h if you hotspot unfolded",
    drainers: [
      { label: "Heavy inner Split View at ~3,000-nit outdoor peaks", penalty: "`14–18%` per hour outdoors" },
      { label: "`4K` `120fps` Dolby Vision recording", penalty: "`10 min` continuous ≈ `8%`, then thermal throttle" },
      { label: "`5G` hotspot while unfolded", penalty: "Heat near the hinge; ~`6` hours of screen time" },
      { label: "Always-On on the cover while you work unfolded", penalty: "A silent `4–6%` tax for a screen you are not watching" },
    ],
    tips: [
      "Go to Settings → Display & Brightness → Cover Screen and disable Always-On on the outer display if you primarily use the phone unfolded at a desk.",
      "Fast charge with a `60W` PD USB-C charger to hit `50%` in roughly `20` minutes. A standard `20W` brick will take over an hour to top off both cells.",
      "Limit full `120Hz` ProMotion on the inner panel under Accessibility → Motion when traveling.",
    ],
  },
  gotchas: [
    {
      title: "No Face ID — Touch ID in the power button",
      problem:
        "To preserve thinness, Apple eliminated the TrueDepth notch on both screens. Biometrics rely entirely on Touch ID built into the top power button. If your hands are wet or oily from cooking, you will be typing your passcode often.",
      workaround:
        "Register both thumb and index finger on the side key so you can unlock folded or unfolded. Keep a six-digit passcode you can type on the cover without unfolding.",
    },
    {
      title: "No dedicated 5x telephoto",
      problem:
        "Unlike the iPhone 16 Pro Max, the Duo tops out at a `2x` sensor crop. Digital zoom past `5x` degrades rapidly compared to dedicated prism glass.",
      workaround:
        "Shoot `1x` or `2x` and crop later. If zoom is the job, this is not your only phone — keep a Pro Max in the bag or accept the crop.",
    },
    {
      title: "eSIM only, worldwide",
      problem:
        "The Duo has no physical SIM tray anywhere. Transferring carriers requires an active Wi-Fi connection during setup.",
      workaround:
        "Do the eSIM transfer on hotel Wi-Fi before you leave the old phone behind. Do not start a carrier swap on a boarding gate with no network.",
    },
    {
      title: "Cases that ruin the hinge story",
      problem:
        "Standard magnetic cases make the folded device feel like a thick brick (over `11.3mm`). The `$1,999` slab becomes a clutch.",
      workaround:
        "Stick to two-piece snap shells or use the phone naked with AppleCare+. Test the hinge at `45°` / `90°` / `135°` with the case on before you keep it.",
    },
    {
      title: "One-handed open and cover smudges",
      problem:
        "A walking unfold puts your thumb on the `5.4-inch` cover glass. You will read your own fingerprint for the next three notifications.",
      workaround:
        "Open with two hands, or wipe the cover as part of the unfold. A lip-less titanium edge is not a book cover.",
    },
  ],
  buyerChecklist: [
    "Test the hinge tension: open the device to `45°`, `90°`, and `135°`. The hinge should hold its angle firmly without springing flat or collapsing.",
    "Inspect Touch ID registration: register both your thumb and index finger on the side key so you can unlock comfortably whether folded or unfolded.",
    "Check the inner screen crease under light: tilt the unfolded screen under a lamp to confirm the nano-texture film has no bubbling or trapped dust along the fold line.",
  ],
  faqs: [
    {
      question: "Does the iPhone Duo support Apple Pencil?",
      answer:
        "Yes. iOS 27 adds full precision stylus input for the inner `7.6-inch` canvas, though the Pencil attaches magnetically to the outer frame and is sold separately.",
    },
    {
      question: "Is the inner screen easy to scratch?",
      answer:
        "The outer screen uses Ceramic Shield 2. The inner folding panel uses a protective polymer layer over ultra-thin glass. Avoid pressing down with sharp objects or pens not designed for flexible screens.",
    },
    {
      question: "How does Split View work on iOS 27?",
      answer:
        "Dragging any app icon from the Dock to the left or right edge of the `7.6-inch` display instantly splits the workspace `50/50` or `70/30`. You can also save app pairs directly to your Home Screen.",
    },
    {
      question: "Why does Touch ID fail after I wash my hands or cook?",
      answer:
        "There is no Face ID. The side-button sensor hates water and oil. Dry the button, use a second enrolled finger, or type the passcode on the cover screen. This is the thinness tax, not a broken unit — unless it also fails with dry fingers and the case off.",
    },
  ],
  closing:
    "The iPhone Duo is Apple’s boldest form-factor change in years. I kept it as a daily driver because Split View and the inner canvas changed the work I will do on a phone. I still reached for a Pro Max when the job was `5x` or a one-handed walk-and-shoot. Power users who want maximum zoom will prefer the Pro Max. The Duo is the definitive choice for mobile multitasking — if you will relearn the open, enroll two fingers, and stop unfolding for a five-second text.",
  pros: [
    "7.6-inch inner canvas plus iOS 27 Split View is a real work surface",
    "Nano-texture inner panel hides the crease in most light",
    "Duo Preview + 48MP main selfies beat the under-display cam",
    "Cover screen is a proper one-hand phone when you leave it folded",
  ],
  cons: [
    "One-handed opens are how you drop a $1,999 phone",
    "No Face ID; wet or oily Touch ID means passcode city",
    "No 5x tetraprism — 2x crop, then digital mush",
    "Cases make the fold a brick; 20W charging is slow on two cells",
  ],
  specs: {
    Cover: "`5.4-inch` Ceramic Shield 2",
    Inner: "`7.6-inch` 120Hz Super Retina XDR, nano-texture",
    Chip: "A20 Pro (`2nm`)",
    Cameras: "Dual `48MP` Fusion (Main + UW, `2x` crop)",
    Battery: "`4,700mAh` split pack; `60W` PD recommended",
    Biometrics: "Touch ID in the power button (no Face ID)",
    Weight: "`254g` folded slab",
    Price: "From `$1,999`",
  },
  toc: reviewToc("Display & Hinge", "headline-features"),
  score: 8.7,
});
