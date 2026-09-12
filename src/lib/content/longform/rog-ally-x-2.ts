import { authors, contentImages } from "@/lib/content/mock";
import { buildReview, reviewToc } from "@/lib/content/longform/build";

export const rogAllyX2Review = buildReview({
  slug: "rog-ally-x-2-review",
  productName: "ROG Ally X 2",
  title: "ROG Ally X 2 Real-World Review: Quirks & Hidden Features",
  subtitle:
    "A brighter VRR panel and a battery that survives a flight to Tokyo — if you learn the TDP slider, abandon Windows Update mid-air, and stop treating this like a Switch.",
  excerpt:
    "PC gaming on the go finally feels finished, until a driver, a TDP, or a sleep-resume reminds you it is still a Windows handheld. Here is the setup that makes the X 2 a daily traveler.",
  category: "Gaming",
  categorySlug: "gaming",
  categoryLabel: "Gaming",
  breadcrumbProduct: "ROG Ally X 2 Review",
  author: authors.sam,
  publishedAt: "2026-09-03T13:20:00.000Z",
  updatedAt: "2026-09-11T16:40:00.000Z",
  editorialNote: "Daily Driver Addendum: Months of Real-World Use",
  featuredImage: contentImages.handheld,
  imageCaption:
    "Ally X 2 on a tray table at hour four — VRR on, TDP at 17W, Windows Update mercifully paused.",
  imageCredit: "TechToReview lab / Unsplash",
  hook: "The first time I treated the ROG Ally X 2 like a Switch, I bricked a flight. I slept it from a Game Pass title at the gate, woke it at cruise, and landed on a Windows Update, a driver install, and a `12%` battery that had been `67%` when I closed the lid. The cabin was not the place to learn that “sleep” on a Windows handheld is a rumor with a logo. The second time I treated it like a tiny PC — Manual TDP at `17W`, VRR on, updates paused, a 65W brick in the backpack — I played for most of a Tokyo flight and still had a taxi ride of map-checking left. That is the entire Ally X 2 review, months later. The brighter VRR panel and the bigger battery are real. They do not erase Windows. Launch coverage will show frame rates in a living room on a plugged-in `30W` slider. I logged airport carpets, hotel desks, a bus, and the specific way Armory Crate profiles lie if you never rename them. If you want a toy that just resumes, buy a dedicated console handheld. If you want your Steam and Game Pass library on a panel that no longer looks milky, and you will spend one Saturday making it behave, the X 2 is the first Ally I would keep.",
  featureHeading: "VRR panel, performance slider, and the battery that finally exists",
  featureIntro:
    "ASUS is selling a brighter variable-refresh screen, a handheld that can hold `25–30W` when plugged in, and a cell that made last year’s Ally feel like a prank. In a living room on a charge cable, it is a small PC that happens to have grips. In seat 32A, it is only as good as the TDP you picked before the door closed.",
  featureParagraphs: [
    "The VRR panel is the generation reason to replace an older Ally, not the badge on the front. In Hades and similar, the old 60Hz-ish shimmer is gone; frame dips no longer strobe like a broken fluorescent. In brighter cabins the extra nits mean you can actually see a map. This is still not a sunlight Deck OLED situation — a window seat at noon will wash the blacks — but it is no longer the cave-only device the first Ally was. Keep a matte-ish film if you are a fingerprints person. The stock glass is a crime scene after a bag of pretzels.",
    "Performance is a slider with consequences. Plugged in at a high TDP, the X 2 will run current Game Pass and Steam midrange titles at settings you can live with, especially if you cap frames to the panel and let VRR hide the rest. At `15–17W`, which is the flight profile I actually use, you are in last-gen-plus territory: 1080p with honest cuts, FSR/AFMF as a spice not a religion. AFMF looks clever in a menu video and sickening in a HUD-heavy RPG if you have not capped the real frames first. People who “hate the Ally because it blurs” have AFMF on and a 40fps base. That is a setup error with a brand name.",
    "Battery is finally a feature. A `17W` indie or older AAA flight is the first time I have said “this replaces a Deck on endurance” without crossing my fingers. A `25W+` cyberpunk-at-the-gate session will still dump you in an hour-something. The brick is part of the product. A 65W USB-C PD charger that can actually feed the handheld while it plays is not optional if your fantasy is plugged-in 30W on a hotel desk. Many laptop ports will not. I learned that the night the Ally and a MacBook fought over a cheap hub and both sulked.",
  ],
  useWhen: [
    "Travel days with a `15–17W` profile, VRR on, frame cap set, updates paused. This is the Ally as a handheld.",
    "Hotel desks with a 65W PD brick and a high TDP for the one game you flew with.",
    "Steam + Game Pass libraries you already own. The value is the catalog, not a $70 exclusive.",
  ],
  avoidWhen: [
    "Sleeping a Windows game at a gate and expecting console resume. Use Exit, or a suspend tool you have tested, or a 10-second shutdown.",
    "AFMF plus an uncapped, HUD-heavy RPG. Cap frames first or live with the smear.",
    "Sunlit window seats and expecting OLED-in-a-cave contrast. Tilt, film, or wait for dusk.",
  ],
  hiddenHeading: "Armory Crate profiles, AFMF, and the Windows travel ritual",
  hiddenIntro:
    "The spec sheet lists TDP numbers and a new APU. The hidden utility is three named profiles and a Windows travel ritual you do before security, not after the seatbelt sign. The X 2 is finished hardware with unfinished habits. You have to bring the habits.",
  hiddenParagraphs: [
    "Common error: leaving a single “Turbo” profile and wondering why a flight dies. Name three: Flight `17W`, Desk `25–30W`, Movie `10–12W`. Bind them to the Armory key so you are not in a menu while the cabin dims. Second error: Windows Update set to the default on a travel week. Pause updates. A handheld that reboots into Updating at `8%` is a brick with RGB. Third error: installing every overlay — Discord, NVIDIA-whatever-does-not-apply, three RGB suites — and then blaming ASUS for a 50°C thumb cluster.",
    "SD cards and docks are the other quiet setup. Use a card with endurance, not a camera leftover, and do not yank it mid-write. A USB-C dock that can charge and output video is a living-room gift; a dock that only outputs video is how you drain a “plugged in” session. Test the dock at home. Hotel TVs are not a debug lab.",
  ],
  workflowTitle: "The Saturday setup we now do on every Ally",
  workflowSteps: [
    "Update BIOS / Armory Crate / GPU on Wi-Fi at home. Then Settings → Windows Update → Pause for your trip length.",
    "Create Flight (`17W`, VRR on, 60 or 48 cap), Desk (high TDP, higher cap), and Movie profiles. Bind them to the Armory button.",
    "Per game: cap frames before you enable AFMF or FSR. If the HUD crawls, AFMF is lying; turn it off.",
    "Exit to the desktop before sleep, or fully shut down for a flight. Test your resume path once on the couch. If it fails there, it will fail at 35,000 feet.",
  ],
  workflowWarning:
    "Game Pass and EA launchers love to update at the worst time. Set them to not auto-update on metered or on battery. A 40GB surprise on hotel Wi-Fi is not “PC gaming being PC gaming.” It is a checkbox you skipped.",
  batteryIntro:
    "ASUS will quote a generous video-playback or light-game number. Believe the light-game number; ignore any implication that Cyberpunk at 30W is a four-hour activity. My Flight profile at `17W` on mid-demand titles is the first Ally endurance that feels like a product. Desk profile is a plugged-in device that happens to have a battery gauge. The fan is honest: you will hear it in a quiet cabin at Desk, and you will hear a neighbor hear it. Flight profile is the social contract.",
  battery: {
    claimed: "Long video / light-game hours (ASUS lab, generous TDP)",
    realWorld: "A real flight at 17W on mid-demand games; ~1–1.5h at high TDP unplugged",
    screenOn: "VRR + 17W + frame cap is the number I quote friends",
    drainers: [
      { label: "High TDP + AFMF experiments unplugged", penalty: "Hour-class battery, hot grips" },
      { label: "Windows Update / launcher downloads in sleep", penalty: "The `67%` to `12%` gate incident" },
      { label: "Bright cabin + max nits", penalty: "`8–12%` extra versus a dim hotel" },
      { label: "SD card indexing plus three overlays", penalty: "Background tax you will blame on the APU" },
    ],
    tips: [
      "Pack a 65W-class PD brick that can charge while playing. Label it. Hotel clock radios are not chargers.",
      "Flight profile by default. Desk profile only when a cable is in.",
      "Pause Windows Update and launcher auto-updates before you leave the apartment.",
    ],
  },
  gotchas: [
    {
      title: "Sleep is not a Switch sleep",
      problem:
        "Resume can mean update, driver, or a game that lost its overlay and now sits at 4W doing nothing useful.",
      workaround:
        "Exit the game. Test suspend tools if you love them. Shut down for boarding.",
    },
    {
      title: "Thermals in a bed and on a blanket",
      problem:
        "The exhaust wants air. A duvet will throttle the APU and toast your fingers.",
      workaround:
        "A tray, a book, or a cheap stand. This is a tiny PC. Treat the vents like a tiny PC.",
    },
    {
      title: "SD cards, docks, and “it was charging”",
      problem:
        "A dock that does not supply enough wattage will let the X 2 play itself to death while you think it is plugged in.",
      workaround:
        "Confirm wattage in Armory while docked. If it is discharging, the dock is a video dongle, not a charger.",
    },
    {
      title: "Driver days after a Windows patch",
      problem:
        "A Tuesday patch can make a Thursday hotel unplayable until Armory and GPU drivers catch up.",
      workaround:
        "Pause updates on the road. Update at home on a night you do not need the device. This is the PC handheld tax.",
    },
  ],
  buyerChecklist: [
    "Panel and sticks: look for clouding, dead pixels, and a right stick that does not glide. Play a menu for `5` minutes; listen for a bearing that already sand-papers.",
    "Battery and charge: confirm it charges on a known 65W PD brick while rendering a game, not just at the Windows desktop.",
    "Storage and OS: a used unit should unlock, have a clean Windows user, and show an SD slot that mounts. Activation-locked or “local account mystery” handhelds are a pass.",
  ],
  faqs: [
    {
      question: "Why did sleep murder my battery at the airport?",
      answer:
        "Windows did a Windows. Exit the game, pause updates, or shut down. If it keeps happening at the desk with no update, check wake timers and a launcher that “helps.”",
    },
    {
      question: "AFMF looks sick and also makes me sick. Is the panel bad?",
      answer:
        "Cap the real frame rate first, then add AFMF on a simple title. If HUDs crawl, turn it off. VRR without frame-gen is the safer flight setting.",
    },
    {
      question: "Can this replace a Steam Deck OLED?",
      answer:
        "For catalog flexibility and a brighter VRR panel, yes if you will do the Windows ritual. For suspend-and-forget plus a perfect cave OLED, no. I own the argument and still pack the X 2 when the library is the point.",
    },
    {
      question: "It is discharging on a dock. Defect?",
      answer:
        "Often the dock. Check wattage in Armory. Many HDMI sticks do not feed a 30W handheld. Try the brick you tested at home, directly, before you RMA.",
    },
  ],
  closing:
    "The Ally X 2 is the first Windows handheld I will take across an ocean on purpose. The panel is finally a travel screen. The battery is finally a Flight-profile feature. The catalog is the reason to put up with Windows. The tax is the Saturday of profiles, the paused updates, the brick in the bag, and the humility to shut down at the gate. I recommend it to people who already live in Steam and Game Pass and will read a TDP like a camera ISO. I do not recommend it to people who want a Switch with Chrome. That product exists. This is the other one, and months in, it is the one I still reach for when the library — not the lifestyle — is the point.",
  pros: [
    "VRR panel that finally belongs on a tray table",
    "Flight-profile battery that survives a real long-haul",
    "Steam + Game Pass on grips, with TDP you can name",
    "65W desk mode that plays like a small PC",
  ],
  cons: [
    "Sleep/resume is still a Windows story",
    "High TDP unplugged is an hour-class toy",
    "AFMF and launchers will ruin a trip if you skip setup",
    "Docks lie about charging; bricks are part of the SKU",
  ],
  specs: {
    Display: "1080p-class VRR, brighter than prior Ally",
    APU: "Current ROG Z-series handheld silicon",
    TDP: "Named profiles from ~10W to plugged-in 25–30W",
    Battery: "Flight-capable at 17W; desk-first at high TDP",
    OS: "Windows 11 + Armory Crate",
    Ports: "USB-C PD, microSD, audio",
  },
  toc: reviewToc("Panel, TDP & Battery", "headline-features"),
  score: 8.4,
});
