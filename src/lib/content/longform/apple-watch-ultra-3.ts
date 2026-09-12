import { authors, contentImages } from "@/lib/content/mock";
import { buildReview, reviewToc } from "@/lib/content/longform/build";

export const appleWatchUltra3Review = buildReview({
  slug: "apple-watch-ultra-3-review",
  productName: "Apple Watch Ultra 3",
  title: "Apple Watch Ultra 3 Real-World Review: Quirks & Hidden Features",
  subtitle:
    "A week of battery that we actually trusted on a boat — plus the Action Button habits, GPS myths, and sleep-tracking gaps a launch recap will not mention.",
  excerpt:
    "Bigger battery, dual-frequency GPS, and a dive computer we trusted on a weekend trip. The Ultra 3 is an adventure watch that still wants to be configured like a tool, not a jewelry SKU.",
  category: "Wearables",
  categorySlug: "wearables",
  categoryLabel: "Wearables",
  breadcrumbProduct: "Apple Watch Ultra 3 Review",
  author: authors.maya,
  publishedAt: "2026-09-04T12:00:00.000Z",
  updatedAt: "2026-09-11T18:00:00.000Z",
  editorialNote: "Daily Driver Addendum: Months of Real-World Use",
  featuredImage: contentImages.watch,
  imageCaption:
    "Ultra 3 on a salt-crusted wrist after a weekend boat day — the Action Button is the whole interface if you set it up.",
  imageCredit: "TechToReview lab / Unsplash",
  hook: "The first morning I trusted the Apple Watch Ultra 3 overnight, I almost did not. I have spent years watching Ultra marketing say “multi-day” while a real weekend of Always-On, sleep tracking, and a couple of GPS hours dumped me at `18%` on Sunday dinner. This time I left the dock on Saturday at `92%` after a Friday desk day, ran the dive app for a short checkout, used dual-frequency GPS on a messy shoreline jog, and slept with tracking on. Sunday night I still had a workday in the tank. That is the Ultra 3 pitch, and it is finally true if you do not run it like a tiny iPhone on your wrist. The friction launch recaps skip: the Action Button still ships as a siren to impress a keynote, Always-On plus a bright face will eat the surplus you paid for, and wrist detection plus a loose Alpine band will log a “sleep” that is actually the watch napping on a nightstand you forgot. I wore this through a boat weekend, a city race, and three weeks of office days. It is the first Apple Watch I would take farther than a hotel gym without a charger speech. It is also the first one that punishes a lazy Action Button.",
  featureHeading: "Battery, dual-frequency GPS, and the dive computer",
  featureIntro:
    "Apple is selling endurance, a GNSS stack that does not fall apart next to a glass tower, and a dive computer you do not have to apologize for. Those are the correct three features. The incorrect way to evaluate them is a Tuesday desk day and a pool photo. The correct way is a weekend where you cannot assume a cable.",
  featureParagraphs: [
    "Battery is the generation reason. On my mixed week — commute, notifications, one hour of GPS, sleep tracking, Always-On at a dimmer face — I saw four full days without theatrics, and a true “leave Friday, land Monday” stretch if I used a Low Power adventure face and killed the always-bright map. That is not a Garmin 20-day watch. It is the first Apple Watch where “I forgot the puck” is an inconvenience instead of a Saturday failure. The catch is the same as every Ultra: a bright infograph face, constant Siri, and cellular wandering will turn it back into a `36-hour` product. People then post that the battery “regressed.” They changed the face and walked through a city with LTE on.",
    "Dual-frequency GPS is the city feature that also matters on a shoreline with cliffs. Under a Manhattan-style grid, older Watches would draw a route that said you jogged through a bank lobby. The Ultra 3’s track on my waterfront out-and-back finally looked like the path I ran, not a drunk polyline. In a deep canyon trail it is still not magic — GNSS does not invent sky. What it does is reduce the “I PR’d because the map skipped a switchback” lie. I still start the workout on the watch, not the phone, and I still wait for the GPS lock icon to settle. People who tap Start while the watch is acquiring will continue to get a fairy-tale first kilometer.",
    "The dive computer is the feature I was ready to mock and then used. A short weekend checkout in recreational depths, with a buddy who also wore a dedicated unit, matched well enough that I stopped treating Apple’s dive story as a lifestyle skin. This is not a substitute for training, tables you understand, or a backup. It is a competent recreational computer on a watch you already wear, which is the only honest compliment. Salt will live in the speaker and the Action Button if you rinse like a person who has never met the ocean. I now rinse before I want to, not after the click starts feeling sandy.",
  ],
  useWhen: [
    "Weekends away from a charger, boat days, and races where you want one device for time, maps, and a panic siren you have actually tested.",
    "City and shoreline GPS where older Watches drew fiction. Wait for lock, then start.",
    "Recreational diving you are already qualified for, with a rinse plan and a backup.",
  ],
  avoidWhen: [
    "Treating it as a 10-day ultralight expedition watch. It is a better Apple Watch, not a Coros.",
    "Always-On plus a loud cellular face plus sleep tracking, then complaining about Sunday night.",
    "Diving beyond your training because the complication looks professional.",
  ],
  hiddenHeading: "Action Button as a mode key, not a siren",
  hiddenIntro:
    "The spec sheet still leads with a siren that can summon a valley. The hidden utility is an Action Button that loads a sport or a dive config the way a camera’s function button loads a profile. Out of the box it is a demo. After 20 minutes in the Watch app it is the reason the Ultra is faster than staring at a tiny screen with wet fingers.",
  hiddenParagraphs: [
    "Common error: leaving Action Button on Siren because that is the story. Siren is a hold-to-confirm feature you should test once in a field, then bury under a press-and-hold you will not fire in a grocery store. Map a single press to Workout or Dive, and a long press to the flashlight or a waypoint check. Second error: never building two faces — Office and Dirt — so the bright adventure face stays on through a week of notifications and murders the battery you bought.",
    "Third error: assuming sleep tracking plus a loose band equals data. The Ultra will happily log a “core sleep” session that is the watch on a book. Wrist detection and a snug night band are part of the product. If you want a recovery oracle, this is still not an Oura. If you want “did I sleep at all and what was my last GPS,” it is enough.",
  ],
  workflowTitle: "Build Office and Dirt, then retask the Action Button",
  workflowSteps: [
    "In the Watch app, create two faces. Office: dimmer, complications you actually tap. Dirt: battery %, GPS/workout, tide or weather, no animated toys.",
    "Action Button: single press → Workout (or Dive if that is the weekend). Long press → Flashlight. Keep Siren in the Emergency stack, not as the casual press.",
    "Workout start: wait for GPS ready. Enable Auto Pause only if you understand it will chop city lights. Disable it for trail and shore.",
    "After salt or silt: rinse the speaker, crown, and Action Button with fresh water, then dry the band pins. Do this before the click feels crunchy.",
  ],
  workflowWarning:
    "Low Power Mode changes GPS and radio behavior. It is a travel extender, not a race mode. Do not invent a PR in Low Power and then compare it to last year’s full-GNSS loop. Also: Night mode on the Ultra face is not the same as a dim Office face. Check which one you are actually wearing to bed.",
  batteryIntro:
    "Apple’s multi-day claim is the first Ultra claim I will repeat without a footnote — with the footnote immediately after. A mixed week with sleep, Always-On, and a couple of GPS hours is four days. A boat weekend with Dive plus GNSS is still inside a charge if you started healthy. A notification-heavy cellular week in a city is two days. The watch is honest. The wearer has to pick a face. Overnight StandBy-style brightness and a forgotten LTE session are the silent taxes.",
  battery: {
    claimed: "Multi-day / up to a week in kinder power modes (Apple lab)",
    realWorld: "4 mixed days typical; a weekend plus Monday if you use a Dirt face",
    screenOn: "Always-On at a dim face is the default I test — not a blank sleep brick",
    drainers: [
      { label: "Bright infograph + Always-On + city LTE", penalty: "Turns a 4-day watch into a 36–48h watch" },
      { label: "Dual-frequency GPS hours", penalty: "`8–12%` per focused hour depending on cold and sky" },
      { label: "Sleep tracking on a loose band", penalty: "Data you cannot use, plus a night of radios you did not need" },
      { label: "Siren tests and loud Walkie-Talkie leftovers", penalty: "Embarrassing in a café; also not free" },
    ],
    tips: [
      "Dirt face for weekends, Office face for weeks. This one habit is most of the battery story.",
      "Charge to a limit when it lives on a puck at the desk. Overnight `100%` heat is how two-year Ultras sag.",
      "Airplane plus GPS for races if you do not need Live Track. The cellular modem is a heater on a cold start line.",
    ],
  },
  gotchas: [
    {
      title: "Size, reach, and dress codes",
      problem:
        "It is a chunk. Cuffs catch. Some rooms will assume you are about to climb something.",
      workaround:
        "A slimmer band for office days, not a smaller watch. If you need invisible, this is the wrong product family.",
    },
    {
      title: "Bands, pins, and salt",
      problem:
        "Ocean plus cheap pins is how you launch a `$300` band into a harbor.",
      workaround:
        "Rinse pins. Check the Alpine/Ocean lock before you lean on a rail. Carry the extra bit Apple hides in the box once.",
    },
    {
      title: "GPS starts and urban canyons",
      problem:
        "Start-too-soon still invents a first kilometer. Deep streets still confuse any wrist GNSS.",
      workaround:
        "Wait for lock. Out-and-back familiar loops to sanity-check a new watch. Do not race an unknown course on day one of a firmware.",
    },
    {
      title: "Sleep and recovery cosplay",
      problem:
        "People compare Ultra sleep to a dedicated ring and call Apple broken.",
      workaround:
        "Snug band, wrist detection on, and use the watch for load + GPS. Get a ring if recovery scores are the product you want.",
    },
  ],
  buyerChecklist: [
    "Action Button, crown, and speaker: click, turn, and play a tone. On a used unit, listen for sand and look at the case screws.",
    "Sensors: start a 2-minute Outdoor Walk, confirm GPS lock, then a heart-rate reading that is not stuck. Check the back crystal for pits.",
    "Battery and bands: Watch app → Battery for any health hints the OS exposes. Inspect pins and the Ocean/Alpine lock. Confirm it pairs and unlocks an iPhone you own — activation locks still catch people.",
  ],
  faqs: [
    {
      question: "Why did I die on Sunday when Apple said a week?",
      answer:
        "Bright face, Always-On, LTE, and a couple of GPS hours. Switch to a Dirt face, test a weekend, and re-measure. The hardware is rarely the villain on week one.",
    },
    {
      question: "My GPS track looks like I jogged through buildings.",
      answer:
        "You started before lock, or you are in a canyon the sky cannot see. Wait for the ready state. Dual-frequency helps; it does not invent satellites.",
    },
    {
      question: "Can the Ultra 3 replace a dedicated dive computer?",
      answer:
        "For recreational dives you are trained for, with a rinse habit and a backup plan, it is a competent computer. It is not training, and it is not a reason to skip a buddy or a second instrument on ambitious days.",
    },
    {
      question: "Sleep data looks empty or wildly optimistic.",
      answer:
        "Loose band or the watch spent the night on a book. Snug the night strap, keep wrist detection on, and do not expect ring-class recovery. If the watch unlocks itself on a nightstand, that is the bug you think is a sleep-stage bug.",
    },
  ],
  closing:
    "The Ultra 3 is the first Apple Watch I pack for a weekend without a negotiation. Battery is finally a feature instead of a speech. GPS is finally a city feature instead of a hope. The dive computer is finally a tool instead of a skin. The tax is size, a face that will eat the surplus if you let it, and an Action Button that ships as theatre. Configure two faces, retask the button, rinse the ocean off, and this is the adventure Watch Apple has been advertising for years. Leave the siren on, sleep in a loose band, and you will meet the same Sunday-night percentage that made the last two Ultras feel like homework.",
  pros: [
    "First Ultra battery that survives a real weekend",
    "Dual-frequency GPS tracks that look like the path you ran",
    "Dive computer we trusted on a recreational checkout",
    "Action Button is fast once it is not a siren",
  ],
  cons: [
    "Still not a 10-day expedition watch",
    "Bright faces and LTE will erase the endurance story",
    "Sleep/recovery is fine, not oracle-class",
    "Size and salt want attention you have to actually give",
  ],
  specs: {
    Case: "49mm-class titanium Ultra",
    Battery: "Multi-day mixed; weekend-capable with a Dirt face",
    GNSS: "Dual-frequency GPS",
    Water: "Dive-capable recreational computer",
    Controls: "Action Button, crown, siren",
    Bands: "Alpine / Ocean / Trail with lock pins",
  },
  toc: reviewToc("Battery, GPS & Dive", "headline-features"),
  score: 8.6,
});
