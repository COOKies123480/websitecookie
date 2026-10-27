# 🍪 COOKies - Website & Store Owner Guide

Welcome to your official website for **COOKies**! 

This website was built with a modern, fresh **Pastel Baby Blue, Crisp White, and Buttery Soft Yellow** aesthetic. It captures the warm, chunky, artisanal appeal of fresh-baked cookie counters (like Ben's Cookies) while maintaining a unique, modern boutique cloud bakery identity.

---

## 🚀 How to View Your Website Right Now

1. Open your File Explorer and go to:
   ```
   C:\Users\abuda\.gemini\antigravity\scratch\cookies-website
   ```
2. Double-click **`index.html`**.
3. It will immediately open in your web browser (Google Chrome, Microsoft Edge, Safari, etc.)!
   - No installation, no Node.js, and no command line required.

---

## ✏️ How You Can Edit the Website (Super Easy!)

You have **two easy ways** to edit your website:

### Method 1: Just Ask Me in Chat (Easiest!)
You don't have to touch any code if you don't want to. Simply ask me:
- *"Change the price of the Pistachio cookie to 19 AED"*
- *"Add a new S'mores Marshmallow cookie flavor"*
- *"Update the WhatsApp number to +971501234567"*
- *"Change the headline to 'Warm Cookies in Dubai'"*

And I will update the website for you immediately!

---

### Method 2: Edit `site-config.js` Yourself in Any Text Editor
All your menu items, prices, phone numbers, and text are stored inside **`site-config.js`**. 

You can open it with Notepad, VS Code, or any text editor:

#### 1. Change Your WhatsApp Phone Number:
Look for:
```javascript
whatsappNumber: "+971500000000",
```
Change it to your actual UAE mobile number (e.g., `"+971501234567"`). Any time a customer orders on the website, it will automatically send their order straight to your WhatsApp!

#### 2. Change or Add Cookie Flavors:
Look for the `cookies: [...]` section. You will see items like:
```javascript
{
  id: "classic-gold",
  name: "The Classic Chunky Gold",
  category: "classic",
  badge: "Best Seller",
  price: 16,
  shortDesc: "Thick golden vanilla dough stuffed with giant melted Belgian chocolate...",
  ...
}
```
You can change the price, name, or description. Save the file and refresh your browser to see the changes live!

#### 3. Change Box Deals:
Under `boxBundles: [...]`, you can adjust the prices and sizes for the **Single**, **Quad Box (4)**, **The Baker's Box (7)**, or **The Party Dozen (12)**.

---

## 🌟 Key Features Built Into Your Website

- **Interactive "Build Your COOKies Box" Builder**: Customers can pick a box bundle (e.g. 7-pack) and click cookies to watch their pastel blue box fill up with animated slots.
- **WhatsApp Instant Order Generator**: Formats the customer's cart, flavors, quantities, promo code discount, and delivery fee into a polite message ready to send with one tap.
- **Interactive Flavor Modal**: Customers can view chocolate richness meters (🍫), sweetness meters, and allergen badges.
- **Live Cart & Promo Code**: Includes the promo code `FIRSTBITE` for 10% off.
- **Reheat & Freshness Guide**: Instructions for customers on how to microwave or oven-warm their cookies at home for maximum molten goodness.
- **Mobile Responsive**: Looks stunning on iPhones, Android phones, tablets, and desktop computers.

---

## 🌐 How to Publish Online (Free Hosting)

When you are ready to put this online for customers:
1. Go to **[Netlify Drop](https://app.netlify.com/drop)** or **[Vercel](https://vercel.com)**.
2. Drag and drop the `cookies-website` folder onto their website.
3. Within 10 seconds, you will have a live URL (e.g. `cookies-uae.netlify.app`) that you can connect to your own `.ae` or `.com` domain!
