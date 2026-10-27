/**
 * ====================================================================
 * 🍪 COOKies - Website Configuration & Data
 * ====================================================================
 */

const SITE_CONFIG = {
  // Brand Basics
  brand: {
    name: "COOKies",
    logoHighlight: "COOK",
    logoRest: "ies",
    tagline: "We use good chocolate and baked everyday.",
    subtitle: "Classic chocolate chip cookies baked fresh everyday with good chocolate. 1 for 5 AED, or 1 box of 5 for 20 AED.",
    currency: "AED",
    whatsappNumber: "+971547488993", // Official WhatsApp
    displayPhone: "+971 54 748 8993",
    instagramHandle: "@cookies.uae",
    email: "yazanmohti86@gmail.com",
    location: "Nad Al Sheba 3, Dubai",
    deliveryArea: "Nad Al Sheba 3, Dubai",
    openHours: "Baked everyday",
  },

  // Top Notice Bar
  announcement: {
    enabled: true,
    text: "🍪 Baked everyday with good chocolate! • 1 for 5 AED • Box of 5 for 20 AED • Delivery in Nad Al Sheba 3",
  },

  // Simple Pricing
  boxBundles: [
    {
      id: "single",
      name: "1 Single Cookie",
      size: 1,
      price: 5,
      badge: "5 AED",
      description: "One warm classic chocolate chip cookie.",
      popular: false,
    },
    {
      id: "box-of-5",
      name: "Box of 5 Cookies",
      size: 5,
      price: 20,
      savings: "Save 5 AED (1 Free!)",
      badge: "Best Value ⭐",
      description: "Includes 5 warm classic chocolate chip cookies packed in our baby blue box.",
      popular: true,
    },
  ],

  // Single Signature Flavor
  cookies: [
    {
      id: "classic-chocolate-chip",
      name: "Classic Chocolate Chip Cookie",
      category: "classic",
      badge: "Baked Everyday",
      badgeColor: "yellow",
      price: 5,
      shortDesc: "Classic chocolate chip cookie. We use good chocolate and baked everyday.",
      fullDesc: "Our classic chocolate chip cookie. We use good chocolate and baked everyday so it's fresh, warm, and tasty.",
      ingredients: [
        "Salted Butter",
        "All Purpose Flour",
        "Bread Flour",
        "Baking Soda",
        "Kosher Salt",
        "Dark Brown Sugar",
        "White Sugar",
        "Egg",
        "Vanilla Extract",
        "Dark Chocolate",
        "Chocolate Chips"
      ],
      richness: 4,
      sweetness: 4,
      allergens: ["Dairy (Milk)", "Gluten (Wheat)", "Eggs", "Soy (in chocolate)"],
      allergenNotice: "Nut-free recipe. Baked in a kitchen that may handle nuts.",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
      featured: true,
    },
  ],

  // 4 Simple Honest Points
  craftPillars: [
    {
      icon: "flame",
      title: "Baked Everyday",
      description: "We bake fresh batches everyday so your cookies are always soft and fresh.",
    },
    {
      icon: "droplet",
      title: "Good Chocolate",
      description: "We use good quality chocolate that melts nicely in every cookie.",
    },
    {
      icon: "map-pin",
      title: "Nad Al Sheba 3 Only",
      description: "Delivering right now exclusively in Nad Al Sheba 3, Dubai so your cookies arrive hot from the oven.",
    },
    {
      icon: "clock",
      title: "Great Price",
      description: "1 cookie for 5 AED, or get a box of 5 cookies for only 20 AED.",
    },
  ],

  // Frequently Asked Questions
  faq: [
    {
      q: "What ingredients do you use in your cookies?",
      a: "Our cookies are baked with: salted butter, all purpose flour, bread flour, dark brown sugar, white sugar, egg, vanilla extract, dark chocolate, chocolate chips, kosher salt, and baking soda. No preservatives or artificial ingredients!",
    },
    {
      q: "What allergens do your cookies contain?",
      a: "Our cookies contain: **Dairy (Milk)**, **Gluten (Wheat)**, **Eggs**, and **Soy (lecithin in chocolate)**. Our recipe is naturally nut-free, but please note they are baked in a kitchen that may handle nuts.",
    },
    {
      q: "Where do you deliver?",
      a: "Right now we deliver exclusively within **Nad Al Sheba 3, Dubai** to ensure your cookies arrive warm straight from our oven!",
    },
    {
      q: "How much are the cookies?",
      a: "It's 5 AED for 1 single cookie, or 20 AED for a box of 5 cookies (you save 5 AED!).",
    },
    {
      q: "How do I order?",
      a: "Tap 'Order via WhatsApp' or message us directly at **+971 54 748 8993** with your villa or street in Nad Al Sheba 3, and we will confirm your order immediately.",
    },
    {
      q: "How do I warm them at home?",
      a: "Put your cookie in the microwave for 10-15 seconds to melt the chocolate right up!",
    },
  ],
};
