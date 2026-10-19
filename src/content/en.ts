import { PRICES, SAVINGS, taka } from "@/config/site";
import type { Content } from "./types";

const L = "en" as const;

export const en: Content = {
  locale: L,
  ogLocale: "en_US",
  meta: {
    title:
      "Trade Hishab — Shop POS, Due Book & Stock App for Bangladesh | 1 Month Free",
    description:
      "Trade Hishab runs your shop on your phone: POS, due book (baki khata), stock and money in/out. No Play Store needed, works offline. First month completely free, then just ৳599.",
    keywords: [
      "shop management software Bangladesh",
      "POS software Bangladesh",
      "offline POS app",
      "due book app",
      "baki khata app",
      "inventory management software",
      "stock management app",
      "shop accounting app",
      "Trade Hishab",
      "hishab trade",
      "দোকানের হিসাব",
      "বাকি খাতা",
    ],
    ogAlt: "Trade Hishab — POS, due book and stock for your shop, 1 month free",
  },
  nav: {
    features: "Features",
    how: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    login: "Log in",
    cta: "Start 1 month free",
    ctaShort: "Start free",
    switchLabel: "বাংলা",
    switchTo: "এই পাতাটি বাংলায় দেখুন",
  },
  hero: {
    eyebrow: "Built for shopkeepers in Bangladesh",
    titleA: "Your whole shop's accounts,",
    titleB: "right on your phone",
    sub: "Sales, dues, stock, purchases and money in and out, all in one app. Open the link, install it, and start selling today. No app-store download.",
    cta: "Start 1 month free",
    ctaSecondary: "See how it works",
    note: "No card needed · Stop any time",
    chips: [
      { icon: "download", label: "No Play Store" },
      { icon: "wifi-off", label: "Works offline" },
      { icon: "sparkles", label: "First month free" },
    ],
    shotAlt: {
      pos: "Trade Hishab sales counter: pick products and make a bill",
      dashboard: "Trade Hishab dashboard: today's sales, profit and dues",
    },
  },
  install: {
    title: "No Play Store. Really.",
    sub: "Trade Hishab is a web app. Open it in your browser, add it to your home screen with one tap, and it runs like any other app.",
    steps: [
      {
        title: "Open the link",
        body: "Go to app.hishab.trade in your phone's browser and create a free account.",
      },
      {
        title: "Install it",
        body: "Tap “Install app”, or use “Add to Home screen” from the browser menu.",
      },
      {
        title: "Start selling",
        body: "Add products and make bills. Everything keeps working without internet.",
      },
    ],
    platforms: [
      { name: "Android", how: "Chrome → Install" },
      { name: "iPhone", how: "Safari → Share → Add to Home Screen" },
      {
        name: "Computer",
        how: "Chrome / Edge → install icon in the address bar",
      },
    ],
    perks: [
      { icon: "zap", label: "No download size" },
      { icon: "refresh", label: "New features arrive automatically" },
      { icon: "smartphone", label: "Same app on phone, tablet and computer" },
    ],
  },
  features: {
    title: "Everything a shop needs",
    sub: "No more notebooks and wrong totals. Built around how shopkeepers actually work, in Bangla and English.",
    items: [
      {
        icon: "cart",
        title: "Sales counter (POS)",
        body: "Scan a barcode or type a name to add products. Give a discount, take full or part payment, and the bill is ready in seconds. Hold a bill and finish it later.",
      },
      {
        icon: "book",
        title: "Due book (baki khata)",
        body: "Who owes how much, and since when, neatly kept. Each customer has a running statement, and a new bill shows the previous due on its own.",
      },
      {
        icon: "box",
        title: "Stock and inventory",
        body: "How much of each product you have, and every movement in and out. Low-stock warnings come early, and Bangla search finds products fast.",
      },
      {
        icon: "truck",
        title: "Suppliers and purchases",
        body: "Record what you buy and what you owe suppliers in one place. Stock goes up as soon as you record a purchase.",
      },
      {
        icon: "wallet",
        title: "Money in and out",
        body: "Cash, bKash, Nagad, Rocket, card or bank: see where money came in and went out on one page. Log expenses too.",
      },
      {
        icon: "chart",
        title: "Profit and reports",
        body: "Today's sales, profit, best sellers, dues and stock reports. Export to CSV when you need it.",
      },
      {
        icon: "printer",
        title: "Receipt printing",
        body: "58 mm or 80 mm thermal printers, or plain A4: Bangla receipts in every size.",
      },
      {
        icon: "share",
        title: "Share invoices",
        body: "Send a bill by WhatsApp or message in one tap, so every customer has a copy.",
      },
      {
        icon: "users",
        title: "Staff and permissions",
        body: "Owner, manager, cashier: each sees only what they need. Cashiers can't see purchase prices or profit. Unlock with a PIN.",
      },
      {
        icon: "shield",
        title: "Audit log",
        body: "Who changed what and when, with before and after figures. Cancelled sales are kept, not erased, so the books stay honest.",
      },
    ],
  },
  showcase: {
    title: "A look inside",
    sub: "Simple, clear, big buttons: so mistakes don't happen even in a rush. The same on your phone and on a computer.",
    desktopTitle: "On a computer",
    mobileTitle: "On your phone",
    desktop: [
      {
        src: "/shots/desktop-dashboard.png",
        alt: "Trade Hishab dashboard on a computer: sales, profit, cash drawer and shop worth",
        caption: "Dashboard",
      },
      {
        src: "/shots/desktop-pos.png",
        alt: "Sales counter on a computer: product list and cart side by side",
        caption: "Sales counter",
      },
    ],
    shots: [
      {
        src: "/shots/pos.png",
        alt: "Adding products at the sales counter to make a bill",
        caption: "Sales counter",
      },
      {
        src: "/shots/invoice.png",
        alt: "Invoice in Bangla showing the previous due",
        caption: "Invoice and previous due",
      },
      {
        src: "/shots/dashboard.png",
        alt: "Dashboard with today's sales, profit and dues",
        caption: "Dashboard",
      },
      {
        src: "/shots/stock.png",
        alt: "Product stock with low-stock warnings",
        caption: "Stock and warnings",
      },
      {
        src: "/shots/due.png",
        alt: "Customer due book and statements",
        caption: "Due book",
      },
      {
        src: "/shots/money.png",
        alt: "Money in and out by cash, bKash and Nagad",
        caption: "Money in and out",
      },
    ],
  },
  offline: {
    title: "No internet? No problem.",
    body: "Trade Hishab saves to your phone first and syncs on its own when the internet is back. A bad network never stops a sale.",
    points: [
      "Sales, dues and stock work with no internet",
      "Syncs by itself when you're online again",
      "Your data stays safe on the server if you lose your phone",
    ],
  },
  who: {
    title: "Made for every kind of shop",
    sub: "From grocery to pharmacy, clothing to electronics: wherever there are sales and stock, there's Trade Hishab.",
    items: [
      { icon: "wheat", name: "Grocery" },
      { icon: "pill", name: "Pharmacy" },
      { icon: "shirt", name: "Clothing" },
      { icon: "smartphone", name: "Mobile & electronics" },
      { icon: "wrench", name: "Hardware" },
      { icon: "sparkles", name: "Cosmetics" },
      { icon: "layers", name: "Wholesale" },
      { icon: "store", name: "Any retail shop" },
    ],
  },
  pricing: {
    title: "Simple pricing, no hidden costs",
    sub: "Every plan has every feature. The longer you stay, the more you save.",
    freeBanner: "First month completely free",
    freeBannerSub: "No card needed. Pay only if you like it.",
    plans: [
      { id: "m1", name: "1 month", period: "per month", per: "" },
      {
        id: "m6",
        name: "6 months",
        period: "for 6 months",
        per: `About ${taka(Math.round(PRICES.m6 / 6), L)} a month`,
        badge: "Most popular",
        save: `Save ${taka(SAVINGS.m6, L)}`,
        featured: true,
      },
      {
        id: "m12",
        name: "12 months",
        period: "for the full year",
        per: `About ${taka(Math.round(PRICES.m12 / 12), L)} a month`,
        badge: "Best value",
        save: `Save ${taka(SAVINGS.m12, L)}`,
      },
    ],
    includesTitle: "Every plan includes",
    includes: [
      "Sales counter and barcode",
      "Due book and customer statements",
      "Stock, purchases and suppliers",
      "Money in/out and reports",
      "Receipt printing and invoice sharing",
      "Staff accounts and audit log",
      "Work-offline mode",
      "All updates at no extra cost",
    ],
    pay: "Pay by bKash or Nagad",
    cta: "Start free",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do I need to download it from the Play Store or App Store?",
        a: "No. Trade Hishab opens in your browser. Go to app.hishab.trade, tap “Install app”, and it sits on your home screen like any other app. It works on Android, iPhone and computers.",
      },
      {
        q: "Can I sell without internet?",
        a: "Yes. Your data is saved on your phone first, so sales, dues and stock keep working with no connection. When the internet returns, everything syncs on its own.",
      },
      {
        q: "What do I get in the free trial? Do I need a card?",
        a: "The first month is completely free with every feature, and no card or advance payment. We'll tell you before it ends, and you only pay if you want to continue.",
      },
      {
        q: "How do I pay?",
        a: `Send money by bKash or Nagad and enter the transaction ID on the billing page inside the app. Choose monthly (${taka(PRICES.m1, L)}), 6 months (${taka(PRICES.m6, L)}) or yearly (${taka(PRICES.m12, L)}).`,
      },
      {
        q: "Is my shop's data safe?",
        a: "Yes. Each shop's data is kept separate and nobody else can see it. It's saved on your phone and synced to the server, so you won't lose your books if you lose your phone. Staff have their own permissions and PINs.",
      },
      {
        q: "Can I print receipts? Which printers?",
        a: "Yes. 58 mm and 80 mm thermal printers and normal A4 printers all work, with receipts in Bangla. You can also share an invoice on WhatsApp.",
      },
      {
        q: "Can my staff use it? Will they see my profit?",
        a: "They can. There are three roles: owner, manager and cashier. A cashier can sell but cannot see purchase prices or profit. The audit log records who did what and when.",
      },
      {
        q: "What if I want to stop?",
        a: "There's no contract. If you stop paying, the app locks when your period ends. Before that you can export your reports and data to CSV.",
      },
    ],
  },
  final: {
    title: "Get your books in order today",
    sub: "One month completely free. No Play Store, up and running in a minute.",
    cta: "Start 1 month free",
  },
  footer: {
    tagline: "Sales, dues and stock for your shop, in Bangla, on your phone.",
    product: "App",
    contact: "Contact",
    whatsapp: "WhatsApp",
    email: "Email",
    rights: "All rights reserved.",
  },
  schema: {
    appDescription:
      "Trade Hishab is a Bangla POS, due book, stock and accounting app for shops. It works offline and needs no Play Store.",
    featureList: [
      "Point of sale (POS) with barcode scanning",
      "Due book and customer statements",
      "Stock and inventory management",
      "Supplier and purchase records",
      "Money in and out (cash, bKash, Nagad)",
      "Profit and reports",
      "Thermal and A4 receipt printing",
      "Offline use without internet",
    ],
  },
};
