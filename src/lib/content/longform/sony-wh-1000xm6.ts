import { authors, contentImages } from "@/lib/content/mock";
import { buildReview, reviewToc } from "@/lib/content/longform/build";

export const sonyWh1000xm6Review = buildReview({
  slug: "sony-wh-1000xm6-review",
  productName: "Sony WH-1000XM6",
  title: "Sony WH-1000XM6 Real-World Review: Quirks & Hidden Features",
  subtitle:
    "Still the ANC king on a long-haul flight — if you survive Speak-to-Chat, clamp force, and the multipoint bug launch coverage filed under “refined.”",
  excerpt:
    "A refined flagship rather than a reboot: better voice pickup, lighter clamps than the XM5 story, and class-leading silence that still needs an hour of setup.",
  category: "Audio",
  categorySlug: "audio",
  categoryLabel: "Audio",
  breadcrumbProduct: "Sony WH-1000XM6 Review",
  author: authors.alex,
  publishedAt: "2026-09-07T09:00:00.000Z",
  updatedAt: "2026-09-12T03:20:00.000Z",
  editorialNote: "Daily Driver Addendum: Months of Real-World Use",
  featuredImage: contentImages.headphones,
  imageCaption:
    "WH-1000XM6 on a tray table at cruising altitude — this is the test the spec sheet still cannot fake.",
  imageCredit: "TechToReview lab / Unsplash",
  hook: "The first hour I wore the WH-1000XM6 on a transatlantic flight, I thought Sony had finally shipped the headphone people already believe they own. Engine roar dropped to a polite rumor. The cup did not hot-spot my glasses the way the XM5 did after meal service. Then I said “no thanks” to a drink, Speak-to-Chat paused the film, transparency slammed open, and I spent the next 40 seconds stabbing an earcup while the cabin listened to two lines of dialogue. That is the XM6 in real life: the best silence you can buy in this shape, wrapped in software that still thinks a cough is a conversation. Launch reviews logged “smarter calls” and moved on. I logged three months of office HVAC, subway platforms, a week of pairing to a laptop and a phone at once, and the specific way Adaptive ANC gets confused when you sit near a window seat and a galley. If you treat these as a box-open miracle, Speak-to-Chat and wear-sensor auto-pause will train you to hate a product that is otherwise still the one I pack first.",
  featureHeading: "ANC, long-haul comfort, and call mics",
  featureIntro:
    "Sony is selling three things people actually pay $400-class money for: class-leading active silence, a clamp and pad combo you can wear through a movie and a meal, and voice pickup that does not make you sound like you are calling from a wardrobe. All three are real. None of them are automatic at the defaults.",
  featureParagraphs: [
    "ANC on a plane is still the XM reason to exist. At cruise, the XM6 takes more of the low roar than the XM5 and more of the midrange fuss than Bose’s current flagship in my notes. The gap is not a press-release wipeout — you will still hear a crying seatmate — but it is the first time in a while I did not reach for foam tips in my bag as a backup. On a subway platform the story is messier. Adaptive ANC over-opens when it decides you might want to hear a PA, then lags when the train arrives. I now leave Adaptive off for commutes and use two manual steps: a high ANC tile for platforms, a mid tile for the office. That sounds fussy. It is ten seconds in the app and it stops the headphone from “helping.”",
    "Comfort is the XM5 hangover Sony had to fix. The XM6 clamp is saner on a glasses wearer after hour two. Pads still get warm — this is a sealed cup, not a miracle — but I finished a `7.5-hour` flight without the hot-spot that made me tilt the XM5 off one ear during descent. Fold and case remain adult-travel sized. If you want a headphone that vanishes in a tiny sling, this is the wrong family. If you want a headphone you forget during a film, this is the right one, with one caveat: the headband will mark a tight bun. High ponytail people already know the dance.",
    "Calls are the genuine hardware step. In a breeze that destroyed the XM4, the XM6 kept a transcript a colleague could read. In an open office, you still sound like a person in an open office — the mics cannot invent a booth. The failure mode is Speak-to-Chat plus the wear sensor: take one cup off to talk to a human, the music pauses, transparency slams, and Bluetooth to the laptop sometimes follows you into a state where Zoom thinks you left. That is not “smarter calls.” That is a stack of helpers. The good microphone array is underneath. You have to stop the helpers from driving.",
  ],
  useWhen: [
    "Flights, open offices, and HVAC-heavy spaces where you want manual high ANC and a film that stays playing when you grunt.",
    "Glasses and long sessions. The clamp is the reason to pick XM6 over a leftover XM5 pair that “still works.”",
    "Calls from a street or a car passenger seat, after you have disabled Speak-to-Chat.",
  ],
  avoidWhen: [
    "Leaving Speak-to-Chat and Adaptive ANC on for a flight or a focus block. You will lose scenes and gain cabin small talk.",
    "Heavy gym use. These are travel and desk cans. Sweat in the pads is a smell you cannot EQ out.",
    "A tiny bag and a fold-in-half expectation. The case is the size of the job.",
  ],
  hiddenHeading: "The app tiles that actually matter: Speak-to-Chat off, multipoint tamed",
  hiddenIntro:
    "The spec sheet lists LDAC, 360 Reality Audio, and a new processor. The hidden utility is a four-tile Control setup and a multipoint policy. Sony still ships these as a demo of every feature at once. The XM6 becomes the product in the reviews after you turn half of that off.",
  hiddenParagraphs: [
    "Common error one: leaving Speak-to-Chat on because it sounded thoughtful in a video. It is thoughtful in a living room. It is sabotage in a cabin. Common error two: pairing phone and laptop with multipoint, then blaming Sony when a Slack huddle and a podcast fight over the mic. Multipoint works if one device is a media source and the other is occasional. It does not work if both want a microphone. Common error three: 360 Reality mixes on a commute. It is a sofa feature. On a sidewalk it just sounds like someone moved the drums into a bathroom.",
    "LDAC on Android is worth a Saturday if you listen to files that deserve it and you can live with a slightly more fragile connection in crowded RF. On iPhone you do not get LDAC; stop hunting for it. AAC plus these drivers is still the silence champ. The codec is not why you buy XM6. The plane is why you buy XM6.",
  ],
  workflowTitle: "Set up the XM6 the way we fly them",
  workflowSteps: [
    "Install the Headphones app, update firmware, then disable Speak-to-Chat and Adaptive ANC. Create a manual High ANC widget you can hit from the cup or the app.",
    "Assign the right-cup gesture to ANC/transparency only. Do not give it Google Assistant if you are also a wear-sensor pause person — too many brains in one ear.",
    "Multipoint: pair phone + laptop. In the laptop OS, set the XM6 as output but keep the laptop mic as input unless you are in a booth. This avoids the Zoom-follows-you bug.",
    "Turn off Auto Power Off if you dock them on a stand between meetings, or they will drop the pairing and you will spend the first minute of every call in Bluetooth hell.",
  ],
  workflowWarning:
    "Wear detection will pause a film if you adjust glasses with the cup. If you are a fidgeter, disable it for flights. Also: 360 Reality and some “immersive” toggles persist. Check the app before a critical listen so you are not EQ-ing a problem that is actually a software room.",
  batteryIntro:
    "Sony’s `30-hour` class ANC-on claim is closer to truth than most phone slides, because headphones are a simpler thermal story. I saw `28–32` hours of mixed ANC commuting and calls, and a full long-haul plus two workdays before I hunted a cable. Quick charge is the travel feature: minutes on a `USB-C` brick for hours of flight. The penalty list is still real. LDAC, high volume, and a winter walk with ANC slamming will shave a workday off the week. A forgotten Speak-to-Chat session does not drain the battery so much as it drains your will to live.",
  battery: {
    claimed: "About 30 hours with ANC on (Sony lab)",
    realWorld: "28–32 hours mixed commute + calls; a week of desk use if you are gentle",
    screenOn: "Not a screen device — plan on 3–4 long-haul segments per charge",
    drainers: [
      { label: "LDAC + high volume", penalty: "`15–20%` extra versus AAC at moderate level" },
      { label: "Winter outdoor ANC at max", penalty: "A long walk can cost what a desk afternoon costs" },
      { label: "Forgotten pairing / never sleeping on a stand", penalty: "They idle longer than you think if Auto Off is disabled" },
    ],
    tips: [
      "Use the USB-C quick charge before a flight, not a random `5W` port that trickles while you board.",
      "Store them in the case. Cup-on-desk plus Auto Off off is how you find a dead pair on Thursday.",
      "If you run LDAC, keep a spare AAC fallback in your head for crowded stations — connection drops feel like battery anxiety.",
    ],
  },
  gotchas: [
    {
      title: "Speak-to-Chat and wear-sensor stack",
      problem:
        "A grunt, a drink order, or an glasses adjust can pause media and open transparency. On a plane it is comedy. On a deadline it is not.",
      workaround:
        "Disable both for travel. Use the cup tile for transparency when you actually want the world.",
    },
    {
      title: "Multipoint microphone tug-of-war",
      problem:
        "Laptop Zoom plus phone Spotify will eventually pick the wrong input or drop one side.",
      workaround:
        "One device owns the mic. The other owns media. End the call before you switch, or disable multipoint on meeting days.",
    },
    {
      title: "Pad heat and hair marks",
      problem:
        "Sealed cups get warm. Headbands mark buns. This is physics.",
      workaround:
        "Break every two hours on desk days. A thinner aftermarket pad exists if you run hot; try Sony’s first for a month so you know the baseline.",
    },
    {
      title: "Fold, hinge, and the “I sat on them” event",
      problem:
        "The fold is better than a cheap Bluetooth can and worse than not sitting on `$400` headphones.",
      workaround:
        "Case on the floor of the seat-back, not the cup on the tray during turbulence. Hinge creaks on a used pair are a walk-away signal.",
    },
  ],
  buyerChecklist: [
    "ANC and cups: wear them for `10` minutes in the loudest part of the store (or your street). Glasses sit? Clamp headache? Speak-to-Chat demo you can then disable?",
    "Hinge, fold, and pads: fold into the case twice. Look for even pad wear and a rattle. On a used pair, sniff the pads — you cannot return a smell.",
    "Bluetooth: pair two devices, play, take a call, then confirm the app sees the serial and can update firmware. A “new” pair on old firmware is a return window you should use.",
  ],
  faqs: [
    {
      question: "Why does music pause when I talk or adjust my glasses?",
      answer:
        "Speak-to-Chat and wear detection. Turn them off in the Headphones app. Transparency can stay on a cup gesture so you are not trapped in a cone of silence at a register.",
    },
    {
      question: "Why do calls sound fine to me but robotic on the other end when I am also on a laptop?",
      answer:
        "Multipoint is splitting the mic. Set the laptop to use its own microphone, or disconnect the phone for the meeting. The XM6 array is good. Two hosts fighting over it are not.",
    },
    {
      question: "Can I get LDAC on iPhone?",
      answer:
        "No. Use them anyway. ANC and comfort are the product. The codec chart is not why a flight feels quieter.",
    },
    {
      question: "They smell / one cup is quieter after six months. Now what?",
      answer:
        "Pads are wear items. Replace them before you replace the headphone. A quieter cup can also be a seal issue — hair, glasses arms, or a rotated pad. If ANC is uneven after a pad swap, that is warranty territory.",
    },
  ],
  closing:
    "The WH-1000XM6 is still the pair I put in the suitcase first, which is the only verdict that matters in this category. It is not the pair I would leave on every default. Speak-to-Chat, Adaptive ANC, and sloppy multipoint can make a flagship feel possessed. Spend an hour in the app, treat them as travel and desk gear, and you get the silence the marketing promised and the call quality the XM5 only hinted at. Buy them for the plane. Configure them for the office. Do not take them to spin class and then write a review about the pads.",
  pros: [
    "Best long-haul ANC in the common over-ear shape",
    "Clamp and glasses comfort finally past the XM5 sore spot",
    "Call mics that survive wind if you disable the helpers",
    "Battery and quick charge that match real travel weeks",
  ],
  cons: [
    "Speak-to-Chat and wear-sensing will sabotage a flight at defaults",
    "Multipoint plus two microphones is still a coin flip",
    "Cups get warm; the case is not small",
    "360 / Adaptive features persist and confuse EQ complaints",
  ],
  specs: {
    Type: "Wireless over-ear, folding",
    ANC: "Adaptive + manual, class-leading low-end hush",
    Codecs: "SBC, AAC, LDAC (Android)",
    Battery: "~30h ANC on, USB-C quick charge",
    Multipoint: "Yes, with mic caveats",
    Weight: "Travel flagship, not a sport light",
  },
  toc: reviewToc("ANC, Comfort & Calls", "headline-features"),
  score: 8.9,
});
