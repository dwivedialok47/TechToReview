import { authors, contentImages } from "@/lib/content/mock";
import { buildReview, reviewToc } from "@/lib/content/longform/build";

export const pixel10ProReview = buildReview({
  slug: "pixel-10-pro-review",
  productName: "Pixel 10 Pro",
  title: "Pixel 10 Pro Real-World Review: Quirks & Hidden Features",
  subtitle:
    "Night Sight, Magic Editor, and a brighter LTPO panel — plus the Tensor heat launch reviews mentioned once and then buried under AI slideshows.",
  excerpt:
    "Google’s AI camera is no longer a gimmick if you shoot like a person, not a prompt engineer. The tax is still thermal, and it shows up on the commute, not in the keynote.",
  category: "Mobile",
  categorySlug: "mobile",
  categoryLabel: "Mobiles",
  breadcrumbProduct: "Pixel 10 Pro Review",
  author: authors.jordan,
  publishedAt: "2026-09-06T10:45:00.000Z",
  updatedAt: "2026-09-12T04:45:00.000Z",
  editorialNote: "Daily Driver Addendum: Months of Real-World Use",
  featuredImage: contentImages.pixel,
  imageCaption:
    "Pixel 10 Pro after a night market walk — Night Sight doing the work, Tensor doing the sweating.",
  imageCredit: "TechToReview lab / Unsplash",
  hook: "The first Pixel 10 Pro photo I trusted was not a Magic Editor before-and-after. It was a badly lit kitchen at `9:40pm`, kids mid-argument, one overhead LED, and a phone that had already been navigating for 40 minutes. Night Sight held the faces and did not turn the backsplash into a watercolor. Then I opened Maps to reroute around a closure, and the frame went hot enough that the camera app politely suggested I wait. That is the Pixel contract in 2026: the computational camera is finally a daily driver, not a party trick, and Tensor still spends your thermal budget like a man who thinks shade is theoretical. Launch reviews led with Gemini demos and “Add Me.” I led with a month of real evenings, a week of `5G` tethering in a rental, and the moment Best Take saved a family photo — then silently picked the wrong blink. If you buy this phone because a slideshow made AI look like a photographer, you will be annoyed by week two. If you buy it because you want the most forgiving stills camera in a compact body and you are willing to manage heat, you will understand why people do not switch.",
  featureHeading: "Night Sight, Magic Editor, and the LTPO panel",
  featureIntro:
    "Google is selling three things: a stills pipeline that still leads in ugly light, an editor that is finally useful enough to replace a laptop for casual crops, and a brighter LTPO panel that makes the last two Pixels feel dim in hindsight. I used all three every week. Only one of them is automatic. Night Sight is the one you can trust with your brain off. Magic Editor is the one that needs a human still in the loop. The display is the one you will stop noticing — which is the compliment.",
  featureParagraphs: [
    "Night Sight on the 10 Pro is less of a “mode” and more of a default personality. In a restaurant with one Edison bulb, `1x` stills keep skin that looks like skin. The ultra-wide at night is the weak sibling — corners go milky if you shove a group into `12mm` and expect a miracle. The telephoto is usable in street lighting and optimistic in living rooms. I treat tele as a dusk-and-daylight lens and let `1x` own the night. Pixel’s old sin, over-smooth faces, is dialed back if you turn off the extra “face enhancement” style in camera settings. Leave it on and every relative starts to look moisturized by a corporation.",
    "Magic Editor, Best Take, and Add Me are the features that get the commercial. Magic Editor is excellent at “move this trash can” and “sky was boring.” It is dangerous at “remove the stranger” when the stranger’s shadow is also in the frame — you will get a sidewalk that looks generated because it is. Best Take saved one reunion photo by swapping a blink. It also produced a composite where one cousin’s hairline belonged to another cousin for a single uncanny frame. I now use Best Take only when I can inspect at `100%` on the phone, not when I am emailing from the parking lot. Add Me is a tripod-and-fence feature. Handheld Add Me on a windy beach is how you invent a third elbow.",
    "The LTPO panel is bright enough now that outdoor Maps is no longer a Pixel apology. High brightness plus a thin case plus Tensor doing on-device work is the heat triangle. After a 20-minute Gemini-plus-camera session in a parked car, the phone throttled, the display dimmed like it was ashamed, and I did the thing Pixel owners learn: pocket-cool for two minutes, then continue. Processor leadership is not the pitch. Photography plus software coherence is the pitch. Judge it there, not on a Genshin benchmark someone posted from a freezer.",
  ],
  useWhen: [
    "Ugly mixed light: kitchens, bars, night streets at `1x`. This is still the phone I trust when I cannot control a lamp.",
    "Casual edits you would otherwise open a laptop for — crop, sky, object lift — if you inspect the result at `100%` before you share.",
    "A smaller-than-Ultra daily driver that still has a real telephoto and a bright panel.",
  ],
  avoidWhen: [
    "Long handheld 4K, gaming, and camera-plus-Gemini in a hot car. Tensor will tell you to stop by dimming and stuttering before a polite warning.",
    "Best Take / Add Me when you cannot review the composite. The failure mode is not a blur — it is a confident wrong face.",
    "Ultra-wide night groups. Step back and use `1x`, or accept milky corners.",
  ],
  hiddenHeading: "Pro controls, locked focal lengths, and the Macro that is not a macro lens",
  hiddenIntro:
    "The spec sheet shouts AI. The hidden utility is Pro controls plus a locked focal length, and the honesty to turn Magic Editor off as a default share path. Pixel still loves to “help” after you shoot. The 10 Pro is a better camera when you decide the help happens in the editor, not in the viewfinder.",
  hiddenParagraphs: [
    "A common setup error is leaving Social Media depth enhancements and face retouch on, then wondering why a product shot looks like a beauty ad. Another: never opening the overflow and locking `35mm` or `50mm` crop for a walk. Pixel’s `5x`/`6x` class tele is fine. The files I kept were often the in-between crops with a locked field of view so my hands stopped fidget-zooming. Macro is still a crop-plus-focus dance, not a dedicated lens. If you shoot stamps and stitches, you will want a real macro or a used S24 Ultra. If you shoot menus and flowers at lunch, Pixel macro is enough.",
    "On-device Gemini is useful for summarizing a thread while you are underground. It is not useful as a camera operator. The people who hate this phone used Gemini as a photographer and Tensor as a game console. The people who love it used Night Sight as a default and treated AI as a toolbox with a lid.",
  ],
  workflowTitle: "Lock a walk focal length and stop the auto-beauty",
  workflowSteps: [
    "Open Camera → Settings and disable extra face retouch / “social media look” enhancements. You can still edit later. You cannot un-smear a JPEG you already sent.",
    "In Camera, long-press the zoom chip and lock a walk length — I use `1x` for night and `2x`/`3x` for daylight streets — so you are not skating the slider on every frame.",
    "Turn off auto-share suggestions that open Magic Editor. Keep Magic Editor installed; remove it from the instant share sheet.",
    "Enable Pro / Manual when you need a shutter floor at night. A `1/30` floor on `1x` beats a smeared auto frame of a kid with a sparkler.",
  ],
  workflowWarning:
    "Best Take and Add Me write new files. The original is usually in Locked Folder or a separate item, but not always where your brain thinks Photos put it. After a group event, check the album before you delete “duplicates.” I have deleted the only real blink-free frame because the composite looked sharper in thumbnail.",
  batteryIntro:
    "Google’s video-playback claim is the usual mid-`20-hour` lab story. Mixed `5G` with a bright LTPO panel, a 30-minute camera walk, and a Gemini session is a `6–7.5` hour screen-on phone that dies in the late evening if you started at breakfast. It is not the Max. It is not even a well-tuned S24 Ultra on a `60Hz` travel routine. It is acceptable if you treat `20W`-class charging as part of the kit and you do not mock people who carry a slim pack. Tensor heat is a battery story as much as a comfort story: a hot phone spends more to do less.",
  battery: {
    claimed: "Mid-20-hour video playback (Google lab)",
    realWorld: "Late-evening finish on mixed 5G; charger in the bag on travel days",
    screenOn: "6–7.5 hours with LTPO, camera walks, and Gemini",
    drainers: [
      { label: "5G tethering plus a warm pocket", penalty: "`20–25%` in an hour of hotspot; phone gets throttly" },
      { label: "Night Sight bursts and Magic Editor exports", penalty: "A 40-minute edit session ≈ `12–15%` plus heat" },
      { label: "Always-on / high brightness outdoors", penalty: "`8–10%` extra versus a dim indoor desk day" },
      { label: "First 24 hours after a major Pixel drop", penalty: "Indexing and model downloads, `10%+` idle" },
    ],
    tips: [
      "Adaptive Battery on, and a charging limit if you desk-dock overnight. Pixel packs are small; heat plus `100%` is how they sag in a year.",
      "Prefer Wi-Fi calling and airplane-plus-Wi-Fi on planes. The modem is a heater.",
      "Carry a `20–30W` PD brick. The phone is faster to a usable `50%` than the internet still pretends Pixels are.",
    ],
  },
  gotchas: [
    {
      title: "Tensor thermal ceiling",
      problem:
        "Camera plus Maps plus sun, or a long 4K clip, and the phone dimms, stutters, and eventually pauses recording. It feels like a software bug the first time.",
      workaround:
        "Shade, case off, two minutes of pocket-cool. Do not start a long recording at `95%` in a car. This is physics plus a chip, not a reset-fix.",
    },
    {
      title: "AI composites that look finished",
      problem:
        "Best Take and Add Me fail pretty. You will not always notice in a widget-sized thumbnail.",
      workaround:
        "Inspect at `100%`. Keep the source frames until you have looked. Do not let Photos auto-stack delete the raw burst.",
    },
    {
      title: "Modem and rural `5G`",
      problem:
        "Some bands and some carriers still make the 10 Pro hunt, run hot, and drop to LTE while an Ultra next to it is fine.",
      workaround:
        "Force LTE for a day if you are in a known weak `5G` pocket. It is slower on a speedtest and often faster in the real world.",
    },
    {
      title: "Ultra-wide night and close focus",
      problem:
        "Groups at arm’s length under streetlight look like a memory of a photo. True macro is not this camera’s job.",
      workaround:
        "Step back, use `1x`, crop later. Magic Editor cannot invent optical information you did not capture.",
    },
  ],
  buyerChecklist: [
    "Cameras: `1x` in store lighting and near a window, then a night-mode frame of a dark corner. Look for a rattly module or a telephoto that never locks.",
    "Thermals and radios: run Maps walking-style for a few minutes, then open Camera. A unit that is already throttling on a table is a unit to walk away from.",
    "Battery and AI: check cycle count if the seller’s region shows it. Confirm fingerprint + face unlock, and that Magic Editor actually opens — a wiped demo unit sometimes ships with half the models.",
  ],
  faqs: [
    {
      question: "Why does the Pixel get hot and the screen dim while I shoot?",
      answer:
        "Tensor plus a bright panel plus computational photography is a heater. It is expected under stacked load. Cool it, disable 4K60, and avoid MagSafe-style magnets that add warmth. Persistent heat at idle with no sun is a case or a failing unit — try a thin case and a reboot after a system update.",
    },
    {
      question: "Magic Editor made a sidewalk that looks fake. Did I break the photo?",
      answer:
        "You asked it to invent pixels. Undo, start from the original, and make a smaller change. If the original is gone, check Locked Folder / trash. For anything you would show a client, stay closer to crop and light than to “remove the building.”",
    },
    {
      question: "Is the telephoto usable at night?",
      answer:
        "Streetlight and dusk, yes if you brace. Living-room lamps, use `1x`. The preview will look braver than the file.",
    },
    {
      question: "Why is battery worse for a day after I updated?",
      answer:
        "Pixel drops download models and re-index photos. Give it `24–48` hours on Wi-Fi and charge. If it is still a two-hour phone after that, check a runaway app in Battery usage — often a bad messenger or a location-sharing leftover.",
    },
  ],
  closing:
    "The Pixel 10 Pro is the first Pixel in a while I would rather carry than explain. Night Sight is a grown-up default. The panel is finally bright. Magic Editor is a tool if you keep your hand on it. Tensor is still the asterisk, and it will remain the asterisk in summer traffic and long 4K. I recommend it to people who shoot in ugly light and live on software that does not fight them. I do not recommend it to people who want the coolest slab under load or the longest battery without a charger in the bag. That is not a dunk. That is the product.",
  pros: [
    "Best ugly-light stills in a compact body",
    "Magic Editor is useful when you inspect the result",
    "LTPO panel finally belongs outdoors",
    "Software coherence still feels like a grown-up Android",
  ],
  cons: [
    "Tensor heat under camera + maps + sun",
    "Battery is all-day-if-you-behave, not all-day-if-you-do-not",
    "AI composites can fail while looking finished",
    "Ultra-wide night and true macro are still compromises",
  ],
  specs: {
    Display: "LTPO OLED, bright outdoor mode, `120Hz`",
    Chip: "Google Tensor (current Pixel 10 Pro silicon)",
    "Rear cameras": "Wide, ultra-wide, telephoto with Night Sight stack",
    Battery: "All-day mixed use with a charger for travel",
    Charging: "`20–30W` USB-C PD class",
    Software: "Stock Android + on-device Gemini / editor tools",
  },
  toc: reviewToc("Camera & Display", "headline-features"),
  score: 8.8,
});
