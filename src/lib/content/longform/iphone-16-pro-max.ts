import { authors, contentImages } from "@/lib/content/mock";
import { buildReview, reviewToc } from "@/lib/content/longform/build";

export const iphone16ProMaxReview = buildReview({
  slug: "iphone-16-pro-max-review",
  productName: "iPhone 16 Pro Max",
  title: "iPhone 16 Pro Max Real-World Review: Quirks & Hidden Features",
  subtitle:
    "A daily-driver addendum after months with Camera Control, the 5x tetraprism, and the battery Apple quotes versus the one you actually get.",
  excerpt:
    "Camera Control is not a cute extra shutter. After months as a daily driver, it is the whole camera philosophy of this phone — brilliant once you retrain your grip, and a liability until you do.",
  category: "Mobile",
  categorySlug: "mobile",
  categoryLabel: "Mobiles",
  breadcrumbProduct: "iPhone 16 Pro Max Review",
  author: authors.maya,
  publishedAt: "2026-09-10T08:00:00.000Z",
  updatedAt: "2026-09-12T06:00:00.000Z",
  editorialNote: "Daily Driver Addendum: Months of Real-World Use",
  featuredImage: contentImages.iphone,
  imageCaption:
    "The 6.9-inch slab after a weekday commute — Camera Control sits exactly where a right index finger rests.",
  imageCredit: "TechToReview lab / Unsplash",
  hook: "The first week I carried the iPhone 16 Pro Max, I ruined more photos with Camera Control than I saved. Walking with the phone in my right hand, the flush capacitive button sits exactly where my index finger rests. A light squeeze opens Camera. A firmer press fires the shutter. On a crowded platform I kept launching Camera over Apple Pay, then capturing my own thigh at `48MP`. Mainstream launch-day reviews treat Camera Control as a novelty next to titanium and a `6.9-inch` panel. They never tell you Light Press is on by default, that a `2.2mm` case lip makes the surface go vague, or that the `5x` tetraprism still hunts for `1.4s` under a single restaurant pendant. I spent three months using this as my only phone — flights, wet commutes, a week of night markets — and the real story is not the spec sheet. It is the week of retraining your grip, then the months where that same button becomes the reason you stop missing the frame.",
  featureHeading: "Camera Control and the 5x Tetraprism",
  featureIntro:
    "The headline hardware is Camera Control plus the `48MP` Fusion / `48MP` Ultra Wide / `5x` tetraprism stack. On paper that is `24mm`, `13mm`, and `120mm`. In a pocket, it is three cameras with three personalities and one capacitive strip that decides whether you feel like you own a camera or a very expensive fidget. Camera Control is not mechanical. A light press focuses and lets you swipe for zoom or exposure. A firmer press shoots. In `5,500K` daylight on a sidewalk, light-press-to-focus is the closest iPhone has come to a real two-stage shutter. In January, with dry skin or thin gloves, the surface goes vague — you either mash a burst of eight frames or get nothing and assume the phone froze.",
  featureParagraphs: [
    "The `5x` module is optically honest at `120mm`, but it is a light bully. Outdoors at `f/2.8` equivalent it resolves signage, a seated face across a café table, and a stage from row G without the mushy digital crop older Pro Max phones leaned on past `3x`. Indoors it lifts ISO hard and leans on Deep Fusion. Faces look sharp in the preview — Apple sharpens the viewfinder like a showroom — and slightly waxy in the saved HEIF. Hair, knitwear, and a brick wall at `8pm` under tungsten are where the tetraprism tells the truth: you needed `2x` or a step toward the window. I started treating `5x` as a daylight-and-stage lens, not a default zoom, and the keeper rate jumped.",
    "Fusion at `1x` (`24mm`, `48MP` in good light) is the daily workhorse. Photographic Styles are baked in earlier and more aggressively than on the 15 Pro. A “Rich Contrast” evening I forgot to reset followed me through a Monday of client JPEGs that looked like a 1998 magazine scan. The style chip sits at the top of Camera; glance at it the way you glance at the battery percentage. `2x` is an in-sensor crop from Fusion, not a discrete lens, and in daylight it is cleaner than most Android `3x` modules I have used this year. Below `20cm`, the phone silently hands the job to Ultra Wide macro. Hands look huge. Receipts go soft at the edges. That is not handshake. That is a `13mm` lens doing close-up work it was never supposed to romanticize.",
    "Video is where the Pro Max still earns the Max. `4K60` HDR is usable handheld for about `8–10` minutes before the titanium dumps heat into your palm and the camera app refuses the next `4K60` clip. A MagSafe car mount plus a sunny dash will get you there in `6` minutes. Stabilization at `4K30` is the mode I trust for walking interviews. Spatial video is a party trick I used twice and then buried. If you shoot for a living, the operational limit is thermal plus cable: the white USB-C cable in the box is USB 2. A `48MP` ProRAW dump of 400 frames crawls like 2014 AirDrop unless you pack a labeled USB 3 / Thunderbolt lead.",
  ],
  useWhen: [
    "Daylight or bright overcast stills where you can plant your feet. `5x` is excellent for street details, signage, and a seated subject across a table if the window is behind you.",
    "Locking focus on a face before the moment. Light-press, wait for the yellow box, then full-press. This beats tapping the screen with a wobbling thumb on a `6.9-inch` slab.",
    "`1x` or `2x` (in-sensor crop) when you want a quiet shutter. Camera Control is faster than the on-screen button and does not smudge the display.",
  ],
  avoidWhen: [
    "Walking, gloves, or a thick case without a precise Camera Control cutout. Use the on-screen shutter or map the Action Button to Camera.",
    "A single warm bulb and a `5x` framing. Drop to `2x` or `1x`. The `5x` file will look “sharp” in preview and still be noisy in hair and fabric.",
    "`4K60` HDR while the phone is pocket-warm or on MagSafe. The `5x` module and the SoC heat together. Stabilization gets lazy before the overheat banner appears.",
  ],
  hiddenHeading: "Action Button + Camera Control as a two-stage shutter",
  hiddenIntro:
    "Spec sheets list Action Button and Camera Control as separate toys. Used together, they are a two-stage camera you can run without looking at the screen. Stop using Action Button for Silent Mode — Control Center is enough — and dedicate it to a camera function Camera Control does not do well: a locked lens or a locked style. This pairing is the one setup I now do on every loaner Pro Max before a trip, and it is the one Apple’s out-of-box flow never suggests.",
  hiddenParagraphs: [
    "The common error is mapping Action Button to Camera, then also leaving Camera Control Light Press set to launch Camera. You now have two launchers and zero locked behaviors. The useful split is: Camera Control owns focus, exposure, and shutter. Action Button owns the mode you would otherwise hunt in the wheel — Portrait, Macro, or Visual Intelligence for a whiteboard. A second error: leaving swipe-to-zoom on while the phone lives in a jeans pocket. I have a burst of subway-floor `5x` frames from month one to prove it.",
    "Photographic Styles persist across app kills. Macro Control is off by default on some builds, which means you cannot refuse the Ultra Wide when you lean in. Visual Intelligence from Action Button is faster than hoping the Ultra Wide “detects a document.” Treat the Action Button as a lens locker, not a mute switch, and the Pro Max starts behaving like a camera that happens to make calls.",
  ],
  workflowTitle: "Pair Action Button with Camera Control Light Press",
  workflowSteps: [
    "Open Settings → Action Button and set it to Camera, then lock the mode to Portrait or Macro if that is the job you actually miss, not the one Apple demos.",
    "Open Settings → Camera → Camera Control and set Light Press to lock focus and exposure. Turn off swipe-to-zoom if the phone rides in a pocket or a loose coat.",
    "In Camera, stay on `1x`, light-press until AE/AF locks, then click Action Button to jump to Portrait or Macro without losing the lock.",
    "For text and whiteboards, Action Button → Document (or Magnifier / Visual Intelligence) beats hoping the Ultra Wide snaps to macro at `12cm`.",
  ],
  workflowWarning:
    "Photographic Styles persist after you close Camera. I have sent a week of crushed, film-look JPEGs because I set a style for one dinner and never reset it. Check the style icon at the top of Camera before a job. Macro Control (Settings → Camera) must be on if you want to force the Ultra Wide off below `20cm`.",
  batteryIntro:
    "Apple’s video-playback slide is a high-`20-hour` number shot in a climate chamber with a dim panel and a local file. That is not a Tuesday. A mixed `5G` weekday with Messages, Maps, a 40-minute camera walk, and Always-On on lands between `22` and `26` hours wall-to-wall, with `7–9` hours of screen-on if you are not recording. The gap is not a scandal. The scandal is how fast a few default toggles eat the surplus you paid the Max premium for.",
  battery: {
    claimed: "High-20-hour video playback (Apple lab)",
    realWorld: "22–26 hours wall-to-wall on a mixed 5G weekday",
    screenOn: "7–9 hours screen-on with Always-On and Camera Control sessions",
    drainers: [
      { label: "Always-On + StandBy on MagSafe overnight", penalty: "`8–12%` overnight, more if the stand is in a bright room" },
      { label: "ProMotion `120Hz` in Safari and Maps", penalty: "`10–15%` extra versus a `60Hz` travel day" },
      { label: "`5x` stills and any `4K60` clip", penalty: "`12 min` of `4K60` ≈ `1 hour` of mixed screen-on" },
      { label: "Cold weather below `5°C`", penalty: "Gauge drops in `5–8%` jumps (voltage sag, not instant death)" },
      { label: "Apple Intelligence + `48MP` iCloud Photos after an iOS upgrade", penalty: "Indexing tax for `24–48h`; expect `15%` extra idle" },
    ],
    tips: [
      "Turn off Settings → Display & Brightness → Always On, and StandBy unless you actually use the night stand. Biggest free win, about `8%` back overnight.",
      "Enable Settings → Accessibility → Motion → Limit Frame Rate when traveling. You lose silky scroll; you gain late-day camera time.",
      "Charge with a `30W` or higher USB-C PD brick and a real PD cable. Use Charge Limit or Optimized Charging so MagSafe is not holding `100%` heat for eight hours.",
    ],
  },
  gotchas: [
    {
      title: "Size and one-handed reach",
      problem:
        "The `6.9-inch` panel is a two-hand phone. Camera Control with a right index finger makes top-left targets easy to miss — or drop — on a train grab-rail.",
      workaround:
        "Turn on Settings → Accessibility → Touch → Reachability. Use a thin case with a real Camera Control hole. A dimpled “compatible” case makes Light Press random.",
    },
    {
      title: "`5x` tetraprism through glass and in low light",
      problem:
        "A train window at `5x` doubles reflections and hunt. Indoor tungsten at `5x` looks sharp in preview and noisy in the file.",
      workaround:
        "Drop to `2x`, or cup the lens against the glass and shoot `1x`. Let the viewfinder settle for a beat before the full press.",
    },
    {
      title: "Macro lives on the Ultra Wide",
      problem:
        "Close-ups under about `20cm` switch to `13mm`. Edges go soft and hands look huge. People blame “the new camera being worse.”",
      workaround:
        "Settings → Camera → Macro Control on, then tap the flower off when you want Fusion to stay in charge. Step back to `25–30cm`.",
    },
    {
      title: "USB-C is not one cable",
      problem:
        "Fast data (USB 3-class) needs a cable that supports it. The white box cable is for charging. `48MP` ProRAW dumps crawl on USB 2.",
      workaround:
        "Keep one labeled USB 3 / Thunderbolt cable in the bag. If the Mac transfer is crawling, it is the cable, not Photos.",
    },
    {
      title: "Thermals during `4K60`, MagSafe, and games",
      problem:
        "Titanium moves heat into your palm. After `8–10` minutes of `4K60` or a MagSafe car mount, the camera may refuse `4K60` or throttle the modem.",
      workaround:
        "Pull off MagSafe before a long clip. Avoid starting `4K60` at `95%` on a hot dash. The phone is more stable around `20–80%` when already warm.",
    },
  ],
  buyerChecklist: [
    "Camera Control and Action Button: light-press, swipe, full-press, then Action Button in Camera. Reject a secondhand unit if Light Press does nothing with the case off.",
    "All three rear cameras plus `5x` in daylight and a dim room. Look for dust under the tetraprism, a rattle, or an Ultra Wide clouded by pocket lint.",
    "Battery Health in Settings → Battery. Below about `90%` on a “new” unit, walk away. Confirm a USB-C PD charge climbs past `5W` and that Face ID works in low light.",
  ],
  faqs: [
    {
      question: "Why do my close-up photos look blurry or warped?",
      answer:
        "You are almost certainly in Ultra Wide macro. The phone jumps to the `13mm` camera under about `20cm`. Turn on Macro Control, tap the flower off, step back to `25–30cm`, and use `1x`. Softness at the edges is the lens, not your handshake.",
    },
    {
      question: "Why does `5x` look sharp on the screen and noisy after I open the photo?",
      answer:
        "Preview is heavily sharpened. The tetraprism needs light. In indoor tungsten, wait for the viewfinder to settle or drop to `2x`. Disable a film Photographic Style — those crush shadows and turn noise into mush.",
    },
    {
      question: "How do I stop Camera Control from opening in my pocket?",
      answer:
        "Use a case with a proper Camera Control guard, or Settings → Camera → Camera Control and disable Light Press / require a firmer press. Require Attention for Face ID so a pocket swipe is less likely to land in Camera and fire a burst.",
    },
    {
      question: "Why does the phone stutter in camera or drop `4K60` after a few minutes?",
      answer:
        "Heat. MagSafe, a thick case, `4K60`, and `5x` together will throttle. Take the case off, get it off the car magnet, wait until the frame is merely warm, then shoot. After a big iOS update, background indexing can stutter Safari for `24–48` hours. That is not a permanent defect.",
    },
  ],
  closing:
    "Three months in, I still recommend the iPhone 16 Pro Max to people who will actually retrain the grip and treat `5x` as a specialist lens. I do not recommend it as a bigger 15 Pro with a gimmick button. The leap is Camera Control once Light Press is tamed, Fusion at `1x`/`2x` in mixed light, and a battery that survives a travel day if you murder Always-On. The tax is size, heat on `4K60`, and a USB-C port that pretends every cable is equal. If that bargain sounds like a camera you will carry, this is the one. If you wanted a quieter slab that just works on day one, the non-Pro or last year’s Pro Max will frustrate you less in week one — and teach you less in month three.",
  pros: [
    "Camera Control becomes a real two-stage shutter after a week of grip work",
    "`5x` tetraprism is honest in daylight and on stage",
    "Travel-day battery if Always-On and StandBy are off",
    "Fusion `1x`/`2x` files stay usable when Android zoom stacks fall apart",
  ],
  cons: [
    "Light Press false-fires in pockets and thick cases",
    "`5x` and Ultra Wide macro lie in preview under warm indoor light",
    "`6.9-inch` reach and titanium heat during `4K60`",
    "Box USB-C cable is charging-only in practice",
  ],
  specs: {
    Display: "`6.9-inch` Super Retina XDR, ProMotion `120Hz`",
    Chip: "A18 Pro",
    "Rear cameras": "`48MP` Fusion, `48MP` Ultra Wide, `5x` tetraprism",
    "Battery claim": "High-20h video playback",
    Charging: "USB-C PD, MagSafe",
    Weight: "`227g` class flagship slab",
  },
  toc: reviewToc("Camera & Telephoto", "camera-telephoto"),
  score: 9.2,
});
