# Asha Sweet Center (ASC) — Sanctuary Storefront & Asha Academy LMS

[![Deploy to GitHub Pages](https://github.com/CliffAD/ASC---LMS/actions/workflows/deploy.yml/badge.svg)](https://github.com/CliffAD/ASC---LMS/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen)](https://cliffad.github.io/ASC---LMS/)

> **"Tradition in Every Bite, Sanctuary in Every Smile."**  
> An integrated digital platform bringing together authentic Bengaluru culinary heritage (Est. 1951, Malleswaram), front-of-house POS operations (LS Retail + UrbanPiper), and an employee training & certification LMS.

---

## 🌐 24/7 Live Public Web App
* **Live Deployment URL:** **[https://cliffad.github.io/ASC---LMS/](https://cliffad.github.io/ASC---LMS/)**

---

## 🏛️ Platform Architecture

The application contains three unified environments accessible via the top navigation bar:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      ASHA SWEET CENTER PLATFORM                        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
1. CUSTOMER STOREFRONT         2. STAFF POS & KDS              3. ASHA ACADEMY LMS
   • Chaats & Street Food         • LS POS Showroom Flow          • 5 Core SOP Modules
   • Artisanal Bakery             • UrbanPiper Aggregator         • Interactive Flashcards
   • Farm-Fresh Milk Products     • KDS Dispatch ("ONLINE CHAATS")• Knowledge Check Quiz
   • Pure Desi Ghee Mithai        • Food Ready & Rider Handover   • Printable Certificate
   • Festive Gift Hampers         • Audio-Visual Feedback         • Store ASC-024 Audit
```

---

## 🚀 Key Features

### 1. 🛍️ Customer Storefront (Hospitality as Sanctuary)
* **Authentic Heritage Menu:** Curated categories reflecting Asha's flagship catalog:
  * **🌶️ Chaats:** Freshly fried Aloo Samosas, Special Raj Kachori, Dahi Puri.
  * **🥐 Bakery:** Traditional Butter Khari, Cashew Cookies, Veg Puffs, Rusks.
  * **🥛 Milk Products:** 100% Pure A2 Malai Paneer, Kesar Rasmalai, Rabdi, Pure Cow Ghee.
  * **🍯 Pure Ghee Sweets:** Royal Mysore Pak, Diamond Kaju Katli, Motichoor Laddus.
  * **🎁 Festive Gifting:** Keepsake gift hampers with nationwide delivery options.
* **Interactive Shopping Bag:** Real-time quantity adjustments, GST (5%) calculations, and direct dispatch to the simulated kitchen display.
* **Web Audio Sound Effects:** Soft ambient *Namaste* chime, tactile POS register beeps, and order confirmation sounds.

### 2. 🖥️ POS & UrbanPiper Aggregator Terminal
* **Live Software Replication:** Built directly from store `ASC024` operational standard operating procedures.
* **UrbanPiper Integration:** Simulates real-time incoming Zomato & Swiggy orders (verifying special instructions like *"Send cutlery"*).
* **Two-Click Kitchen Dispatch:**
  1. `Accept Order (Ctrl+A)` $\rightarrow$ Dispatches digital ticket to KDS station: `ONLINE CHAATS`.
  2. `Mark Food Ready` $\rightarrow$ Generates rider dispatch slip and clears queue.

### 3. 🎓 Asha Academy LMS (Learning Management System)
* **The 5-Step Customer Journey:**
  1. *Greet immediately with folded hands ("Namaste") and direct eye contact.*
  2. *Understand customer requirements and occasion.*
  3. *Take order using exact item codes, names, and weights—zero guesswork.*
  4. *Confirm complete order before punching into LS POS.*
  5. *Suggest delightful pairings without pressure; thank and hand over with both hands.*
* **Conflict Resolution & Recovery:** Sincere apology, order replacement, manager dine-in chaat hospitality, and the paramount rule: **"NEVER ARGUE WITH A CUSTOMER."**
* **Instant Mastery Quiz & Certification:** Interactive assessment validating cashier readiness and generating a printable official credential.
* **Store Manager Audit Console:** Real-time tracking of branch compliance, incident reductions, and staff qualifications.

---

## 🛠️ Local Development & Build

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* npm

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/CliffAD/ASC---LMS.git
cd ASC---LMS

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# Running at: http://localhost:3000/

# 4. Build for production
npm run build
```

---

## 📄 License & Heritage
© 1951 – 2026 **Asha Sweet Center (ASC)**. All rights reserved.  
*Malleswaram, Bengaluru, Karnataka, India.*
