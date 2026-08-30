const sampleItems = [

  {
    title: "Samsung Galaxy S24",
    description: "Premium smartphone with AMOLED display, powerful processor and advanced camera system.",
    image: [
      { url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf", filename: "samsung-galaxy-s24-1" },
      { url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97", filename: "samsung-galaxy-s24-2" },
      { url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", filename: "samsung-galaxy-s24-3" }
    ],
    price: 74999,
    category: "Electronics",
    brand: "Samsung",
    stock: 25
  },

  {
    title: "Apple iPhone 15",
    description: "Modern Apple smartphone featuring a bright display, powerful performance and excellent cameras.",
    image: [
      { url: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd", filename: "iphone-15-1" },
    ],
    price: 69999,
    category: "Electronics",
    brand: "Apple",
    stock: 18
  },

  {
    title: "OnePlus 12R",
    description: "High-performance smartphone with smooth display, fast charging and powerful hardware.",
    image: [
      { url: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb", filename: "oneplus-12r-4" },
      { url: "https://images.unsplash.com/photo-1580910051074-3eb694886505", filename: "oneplus-12r-2" },
      { url: "https://images.unsplash.com/photo-1556656793-08538906a9f8", filename: "oneplus-12r-3" },
      
    ],
    price: 42999,
    category: "Electronics",
    brand: "OnePlus",
    stock: 22
  },

  {
    title: "Google Pixel 8",
    description: "Smart Android phone with an intelligent camera system and clean software experience.",
    image: [
      { url: "https://images.unsplash.com/photo-1567581935884-3349723552ca", filename: "google-pixel-8-2" },
      { url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=pixel8", filename: "google-pixel-8-1" },
      
    ],
    price: 58999,
    category: "Electronics",
    brand: "Google",
    stock: 16
  },

  {
    title: "Xiaomi Redmi Note 13 Pro",
    description: "Feature-packed smartphone with high-resolution camera and large AMOLED screen.",
    image: [
      { url: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48", filename: "redmi-note-13-pro-3" },
      { url: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2", filename: "redmi-note-13-pro-1" },
      { url: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7", filename: "redmi-note-13-pro-2" },
      
    ],
    price: 29999,
    category: "Electronics",
    brand: "Xiaomi",
    stock: 35
  },

  {
    title: "Nothing Phone 2",
    description: "Distinctive smartphone with transparent-inspired design, smooth performance and dual cameras.",
    image: [
      { url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?variant=nothing", filename: "nothing-phone-2-2" },
    ],
    price: 39999,
    category: "Electronics",
    brand: "Nothing",
    stock: 20
  },

  {
    title: "Motorola Edge 50",
    description: "Stylish smartphone offering a vibrant display, reliable cameras and smooth everyday performance.",
    image: [
      { url: "https://images.unsplash.com/photo-1567581935884-3349723552ca?phone=edge", filename: "motorola-edge-50-2" },
      { url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?phone=motorola", filename: "motorola-edge-50-1" },
      { url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?phone=edge50", filename: "motorola-edge-50-3" },
    ],
    price: 34999,
    category: "Electronics",
    brand: "Motorola",
    stock: 24
  },

  {
    title: "Realme GT Neo 6",
    description: "Performance-focused smartphone designed for gaming, entertainment and multitasking.",
    image: [
      { url: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?model=realme", filename: "realme-gt-neo-6-2" },
      { url: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?model=realme", filename: "realme-gt-neo-6-1" },
    ],
    price: 31999,
    category: "Electronics",
    brand: "Realme",
    stock: 28
  },

  {
    title: "Vivo V30 Pro",
    description: "Elegant smartphone with premium design, high-quality display and advanced portrait photography.",
    image: [
      { url: "https://images.unsplash.com/photo-1605236453806-6ff36851218e", filename: "vivo-v30-pro-3" },
      { url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17", filename: "vivo-v30-pro-2" },
      
    ],
    price: 44999,
    category: "Electronics",
    brand: "Vivo",
    stock: 17
  },

  {
    title: "Oppo Reno 11",
    description: "Camera-focused smartphone with premium styling and fast charging technology.",
    image: [
      { url: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0", filename: "oppo-reno-11-1" },
      { url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?oppo=reno11", filename: "oppo-reno-11-2" },
      { url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?oppo=reno", filename: "oppo-reno-11-3" }
    ],
    price: 38999,
    category: "Electronics",
    brand: "Oppo",
    stock: 19
  },

  {
    title: "HP Pavilion 15 Laptop",
    description: "Versatile laptop for students and professionals with a large display and dependable performance.",
    image: [
      { url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", filename: "hp-pavilion-15-1" },
      { url: "https://images.unsplash.com/photo-1484788984921-03950022c9ef", filename: "hp-pavilion-15-2" },
    ],
    price: 62999,
    category: "Laptops",
    brand: "HP",
    stock: 14
  },

  {
    title: "Dell Inspiron 14",
    description: "Compact everyday laptop with comfortable keyboard and efficient performance for work.",
    image: [
      { url: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6", filename: "dell-inspiron-14-1" },
      { url: "https://images.unsplash.com/photo-1593642532400-2682810df593", filename: "dell-inspiron-14-2" }
    ],
    price: 57999,
    category: "Laptops",
    brand: "Dell",
    stock: 18
  },

  {
    title: "Lenovo IdeaPad Slim 5",
    description: "Slim and lightweight laptop built for productivity, study and entertainment.",
    image: [
      { url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef", filename: "lenovo-ideapad-slim5-4" },
      { url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?lenovo=slim5", filename: "lenovo-ideapad-slim5-1" },
      { url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2", filename: "lenovo-ideapad-slim5-2" },
      { url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", filename: "lenovo-ideapad-slim5-3" },
      
    ],
    price: 65999,
    category: "Laptops",
    brand: "Lenovo",
    stock: 13
  },

  {
    title: "Asus Vivobook 16",
    description: "Large-screen laptop offering a balance of productivity, entertainment and portability.",
    image: [
      { url: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed", filename: "asus-vivobook-16-1" },
      { url: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf", filename: "asus-vivobook-16-2" }
    ],
    price: 71999,
    category: "Laptops",
    brand: "Asus",
    stock: 11
  },

  {
    title: "Acer Aspire 7",
    description: "Powerful laptop designed for demanding applications, gaming and everyday productivity.",
    image: [
      { url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302", filename: "acer-aspire-7-1" },
      { url: "https://images.unsplash.com/photo-1544099858-75feeb57f01b", filename: "acer-aspire-7-3" }
    ],
    price: 54999,
    category: "Laptops",
    brand: "Acer",
    stock: 15
  },

  {
    title: "Apple MacBook Air M3",
    description: "Slim premium laptop powered by Apple silicon for fast and efficient everyday computing.",
    image: [
      { url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9", filename: "macbook-air-m3-2" },
      { url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?macbook=air", filename: "macbook-air-m3-3" }
    ],
    price: 114999,
    category: "Laptops",
    brand: "Apple",
    stock: 8
  },

  {
    title: "Sony WH-1000XM5",
    description: "Premium wireless headphones with immersive sound and advanced noise cancellation.",
    image: [
      { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", filename: "sony-wh1000xm5-1" },
      { url: "https://images.unsplash.com/photo-1484704849700-f032a568e944", filename: "sony-wh1000xm5-2" },
      { url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b", filename: "sony-wh1000xm5-3" }
    ],
    price: 29999,
    category: "Audio",
    brand: "Sony",
    stock: 21
  },

  {
    title: "JBL Tune 770NC",
    description: "Wireless over-ear headphones with active noise cancellation and powerful bass.",
    image: [
      { url: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc", filename: "jbl-tune-770nc-1" },
      { url: "https://images.unsplash.com/photo-1599669454699-248893623440", filename: "jbl-tune-770nc-2" }
    ],
    price: 5999,
    category: "Audio",
    brand: "JBL",
    stock: 40
  },

  {
    title: "Boat Rockerz 550",
    description: "Affordable wireless headphones offering deep bass and comfortable long-hour listening.",
    image: [
      { url: "https://images.unsplash.com/photo-1578319439584-104c94d37305", filename: "boat-rockerz-550-3" },
      { url: "https://images.unsplash.com/photo-1583394838336-acd977736f90", filename: "boat-rockerz-550-1" },
      { url: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29", filename: "boat-rockerz-550-2" },
      
    ],
    price: 1999,
    category: "Audio",
    brand: "Boat",
    stock: 55
  },

  {
    title: "Sennheiser HD 450BT",
    description: "Wireless headphones delivering detailed audio with convenient Bluetooth connectivity.",
    image: [
      { url: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a", filename: "sennheiser-hd450bt-2" },
      { url: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb", filename: "sennheiser-hd450bt-1" },
      
    ],
    price: 8999,
    category: "Audio",
    brand: "Sennheiser",
    stock: 24
  },

  {
    title: "Apple AirPods Pro 2",
    description: "Premium true wireless earbuds with active noise cancellation and spatial audio.",
    image: [
        { url: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77", filename: "airpods-pro-2-2" },
      { url: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434", filename: "airpods-pro-2-1" },
    ],
    price: 24999,
    category: "Audio",
    brand: "Apple",
    stock: 20
  },

  {
    title: "Samsung Galaxy Buds FE",
    description: "Comfortable wireless earbuds with clear audio and convenient touch controls.",
    image: [
      { url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df", filename: "galaxy-buds-fe-1" },
      { url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1", filename: "galaxy-buds-fe-2" }
    ],
    price: 6999,
    category: "Audio",
    brand: "Samsung",
    stock: 32
  },

  {
    title: "boAt Airdopes 141",
    description: "Budget-friendly wireless earbuds with long battery life and compact charging case.",
    image: [
      { url: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46", filename: "boat-airdopes-141-2" },
      { url: "https://images.unsplash.com/photo-1598331668826-20cecc596b86", filename: "boat-airdopes-141-1" },
    ],
    price: 1299,
    category: "Audio",
    brand: "Boat",
    stock: 70
  },

  {
    title: "Fossil Gen 6 Smartwatch",
    description: "Premium smartwatch combining classic styling with fitness and smart notification features.",
    image: [
      { url: "https://images.unsplash.com/photo-1547996160-81dfa63595aa", filename: "fossil-gen6-3" },
      { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", filename: "fossil-gen6-1" },
      { url: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1", filename: "fossil-gen6-2" },
      
    ],
    price: 18999,
    category: "Wearables",
    brand: "Fossil",
    stock: 12
  },

  {
    title: "Garmin Forerunner 255",
    description: "Advanced sports smartwatch designed for runners with detailed fitness tracking.",
    image: [
      { url: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d", filename: "garmin-forerunner-255-2" },
      { url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?garmin=255", filename: "garmin-forerunner-255-1" },
      
    ],
    price: 29999,
    category: "Wearables",
    brand: "Garmin",
    stock: 9
  },

  {
    title: "Amazfit GTR 4",
    description: "Feature-rich smartwatch with health monitoring, sports modes and a premium round display.",
    image: [
      { url: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a", filename: "amazfit-gtr4-1" },
      { url: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6", filename: "amazfit-gtr4-2" },
      { url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade", filename: "amazfit-gtr4-3" }
    ],
    price: 15999,
    category: "Wearables",
    brand: "Amazfit",
    stock: 17
  },

  {
    title: "Noise ColorFit Pro 5",
    description: "Modern smartwatch with bright display, activity tracking and health monitoring tools.",
    image: [
      { url: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288", filename: "noise-colorfit-pro5-1" },
      { url: "https://images.unsplash.com/photo-1544117519-31a4b719223d", filename: "noise-colorfit-pro5-2" }
    ],
    price: 3999,
    category: "Wearables",
    brand: "Noise",
    stock: 42
  },

  {
    title: "Fastrack Reflex Vox",
    description: "Affordable fitness smartwatch with activity tracking and smart notifications.",
    image: [
      { url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d", filename: "fastrack-reflex-vox-3" },
      { url: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558", filename: "fastrack-reflex-vox-2" },
      
    ],
    price: 3499,
    category: "Wearables",
    brand: "Fastrack",
    stock: 35
  },

  {
    title: "Nike Air Max 270",
    description: "Stylish lifestyle sneakers with cushioned sole and comfortable everyday fit.",
    image: [
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", filename: "nike-air-max-270-1" },
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?view=side", filename: "nike-air-max-270-2" },
      { url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2", filename: "nike-air-max-270-3" }
    ],
    price: 10999,
    category: "Footwear",
    brand: "Nike",
    stock: 25
  },

  {
    title: "Adidas Ultraboost Light",
    description: "Performance running shoes with responsive cushioning and breathable construction.",
    image: [
      { url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2", filename: "adidas-ultraboost-light-1" },
      { url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5", filename: "adidas-ultraboost-light-2" }
    ],
    price: 14999,
    category: "Footwear",
    brand: "Adidas",
    stock: 18
  },

  {
    title: "Puma RS-X Sneakers",
    description: "Fashion-forward sneakers featuring bold styling and cushioned comfort.",
    image: [
      { url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519", filename: "puma-rsx-1" },
      { url: "https://images.unsplash.com/photo-1605348532760-6753d2c43329", filename: "puma-rsx-2" },
      { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a", filename: "puma-rsx-3" }
    ],
    price: 7999,
    category: "Footwear",
    brand: "Puma",
    stock: 22
  },

  {
    title: "Reebok Classic Leather",
    description: "Timeless casual shoes with a clean design and comfortable everyday construction.",
    image: [
      { url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86", filename: "reebok-classic-leather-2" },
      { url: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3", filename: "reebok-classic-leather-1" },
      
    ],
    price: 5999,
    category: "Footwear",
    brand: "Reebok",
    stock: 31
  },

  {
    title: "New Balance Fresh Foam 1080",
    description: "Comfortable running shoes with soft cushioning designed for long-distance workouts.",
    image: [
      { url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?nb1080", filename: "new-balance-1080-3" },
      { url: "https://images.unsplash.com/photo-1539185441755-769473a23570", filename: "new-balance-1080-1" },
      { url: "https://images.unsplash.com/photo-1552346154-21d32810aba3", filename: "new-balance-1080-2" },
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?nb1080", filename: "new-balance-1080-4" }
    ],
    price: 12999,
    category: "Footwear",
    brand: "New Balance",
    stock: 16
  },

  {
    title: "Levi's 511 Slim Jeans",
    description: "Classic slim-fit denim jeans designed for casual everyday styling.",
    image: [
      { url: "https://images.unsplash.com/photo-1475178626620-a4d074967452", filename: "levis-511-jeans-3" },
      { url: "https://images.unsplash.com/photo-1542272604-787c3835535d", filename: "levis-511-jeans-1" },
      { url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246", filename: "levis-511-jeans-2" },
      
    ],
    price: 3499,
    category: "Fashion",
    brand: "Levi's",
    stock: 45
  },

  {
    title: "Peter England Formal Shirt",
    description: "Smart formal shirt suitable for office meetings, workwear and professional occasions.",
    image: [
      { url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf", filename: "peter-england-shirt-1" },
      { url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c", filename: "peter-england-shirt-2" }
    ],
    price: 1899,
    category: "Fashion",
    brand: "Peter England",
    stock: 38
  },

  {
    title: "Allen Solly Polo T-Shirt",
    description: "Comfortable polo t-shirt with a smart casual design for everyday wear.",
    image: [
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c", filename: "allen-solly-polo-2" },
      { url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", filename: "allen-solly-polo-1" },
      { url: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d", filename: "allen-solly-polo-3" }
    ],
    price: 1599,
    category: "Fashion",
    brand: "Allen Solly",
    stock: 50
  },

  {
    title: "Van Heusen Blazer",
    description: "Elegant formal blazer designed for business meetings, events and special occasions.",
    image: [
      { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", filename: "van-heusen-blazer-1" },
      { url: "https://images.unsplash.com/photo-1555069519-127aadedf1ee", filename: "van-heusen-blazer-2" }
    ],
    price: 6999,
    category: "Fashion",
    brand: "Van Heusen",
    stock: 14
  },

  {
    title: "Roadster Casual Hoodie",
    description: "Soft casual hoodie designed for comfortable winter and streetwear styling.",
    image: [
      { url: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3", filename: "roadster-hoodie-1" },
      { url: "https://images.unsplash.com/photo-1578681994506-b8f463449011", filename: "roadster-hoodie-2" },
      { url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633", filename: "roadster-hoodie-3" }
    ],
    price: 1999,
    category: "Fashion",
    brand: "Roadster",
    stock: 42
  },

  {
    title: "Biba Printed Kurta",
    description: "Traditional printed kurta featuring a comfortable fit for casual and festive occasions.",
    image: [
      { url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1", filename: "biba-kurta-3" },
      { url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c", filename: "biba-kurta-1" },
    ],
    price: 2499,
    category: "Fashion",
    brand: "Biba",
    stock: 27
  },

  {
    title: "Manyavar Festive Kurta",
    description: "Traditional festive kurta with elegant detailing for celebrations and special occasions.",
    image: [
      { url: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc", filename: "manyavar-kurta-1" },
      { url: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab", filename: "manyavar-kurta-2" }
    ],
    price: 2999,
    category: "Fashion",
    brand: "Manyavar",
    stock: 21
  },

  {
    title: "Lavie Women's Handbag",
    description: "Stylish everyday handbag with spacious compartments and a modern fashion-forward design.",
    image: [
      { url: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c", filename: "lavie-handbag-2" },
      { url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3", filename: "lavie-handbag-1" },
      { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", filename: "lavie-handbag-3" },
      { url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d", filename: "lavie-handbag-4" }
    ],
    price: 2999,
    category: "Bags",
    brand: "Lavie",
    stock: 26
  },

  {
    title: "American Tourister Cabin Trolley",
    description: "Durable cabin-size trolley bag with smooth wheels and practical travel storage.",
    image: [
      { url: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87", filename: "american-tourister-cabin-1" },
      { url: "https://images.unsplash.com/photo-1553531384-397c80973a0b", filename: "american-tourister-cabin-2" },
      { url: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd", filename: "american-tourister-cabin-3" }
    ],
    price: 5999,
    category: "Bags",
    brand: "American Tourister",
    stock: 19
  },

  {
    title: "Wildcraft Laptop Backpack",
    description: "Strong laptop backpack with multiple compartments for office, college and travel.",
    image: [
      { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?wildcraft=laptop", filename: "wildcraft-laptop-backpack-1" },
      { url: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3", filename: "wildcraft-laptop-backpack-2" }
    ],
    price: 2499,
    category: "Bags",
    brand: "Wildcraft",
    stock: 34
  },

  {
    title: "Skybags Urban Backpack",
    description: "Modern lightweight backpack designed for students, commuters and everyday travel.",
    image: [
      { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?skybags=urban", filename: "skybags-urban-1" },
      { url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa", filename: "skybags-urban-3" }
    ],
    price: 1999,
    category: "Bags",
    brand: "Skybags",
    stock: 40
  },

  {
    title: "Prestige Electric Kettle",
    description: "Fast-boiling electric kettle with compact design for tea, coffee and hot water.",
    image: [
      { url: "https://images.unsplash.com/photo-1608354580875-30bd4168b351", filename: "prestige-kettle-2" }
    ],
    price: 1499,
    category: "Home Appliances",
    brand: "Prestige",
    stock: 36
  },

  {
    title: "Philips Air Fryer HD9252",
    description: "Compact air fryer designed for healthier cooking with less oil and easy temperature control.",
    image: [
      { url: "https://images.unsplash.com/photo-1585515320310-259814833e62", filename: "philips-airfryer-2" },
      { url: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", filename: "philips-airfryer-1" },
      { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f", filename: "philips-airfryer-3" }
    ],
    price: 8999,
    category: "Home Appliances",
    brand: "Philips",
    stock: 15
  },

  {
    title: "Bajaj Mixer Grinder GX8",
    description: "Powerful kitchen mixer grinder with multiple jars for grinding and blending.",
    image: [
      { url: "https://images.unsplash.com/photo-1570222094114-d054a817e56b", filename: "bajaj-mixer-1" },
      { url: "https://images.unsplash.com/photo-1601050690597-df0568f70950", filename: "bajaj-mixer-2" }
    ],
    price: 3299,
    category: "Home Appliances",
    brand: "Bajaj",
    stock: 28
  },

  {
    title: "Havells Electric Iron",
    description: "Efficient electric iron with adjustable temperature settings for different fabrics.",
    image: [
      { url: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce", filename: "havells-iron-1" },
      { url: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c", filename: "havells-iron-2" },
      { url: "https://images.unsplash.com/photo-1528712306091-ed0763094c98", filename: "havells-iron-3" }
    ],
    price: 1599,
    category: "Home Appliances",
    brand: "Havells",
    stock: 31
  },

  {
    title: "Whirlpool Single Door Refrigerator",
    description: "Energy-efficient refrigerator offering practical storage and reliable cooling for small families.",
    image: [
      { url: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5", filename: "whirlpool-refrigerator-1" },
      { url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30", filename: "whirlpool-refrigerator-2" }
    ],
    price: 22999,
    category: "Home Appliances",
    brand: "Whirlpool",
    stock: 10
  },

  {
    title: "LG 7kg Front Load Washing Machine",
    description: "Fully automatic washing machine with multiple wash programs and efficient motor technology.",
    image: [
      { url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1", filename: "lg-washing-machine-1" },
      { url: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c", filename: "lg-washing-machine-2" },
    ],
    price: 32999,
    category: "Home Appliances",
    brand: "LG",
    stock: 9
  },

  {
    title: "Milton Thermosteel Bottle",
    description: "Insulated stainless steel bottle designed to maintain beverage temperature for hours.",
    image: [
      { url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8", filename: "milton-thermosteel-1" },
    ],
    price: 899,
    category: "Home & Kitchen",
    brand: "Milton",
    stock: 65
  },

  {
    title: "Cello Lunch Box Set",
    description: "Leak-resistant lunch box set with separate compartments for organized meals.",
    image: [
      { url: "https://images.unsplash.com/photo-1547592180-85f173990554", filename: "cello-lunchbox-1" },
      { url: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7", filename: "cello-lunchbox-2" }
    ],
    price: 799,
    category: "Home & Kitchen",
    brand: "Cello",
    stock: 58
  },

  {
    title: "Borosil Glass Storage Set",
    description: "Premium glass storage containers suitable for kitchen organization and food storage.",
    image: [
       { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d", filename: "borosil-storage-3" },
      { url: "https://images.unsplash.com/photo-1604917877934-07d8d248d396", filename: "borosil-storage-2" },
     
    ],
    price: 1299,
    category: "Home & Kitchen",
    brand: "Borosil",
    stock: 33
  },

  {
    title: "Prestige Aluminium Pressure Cooker",
    description: "Durable pressure cooker designed for quick and efficient everyday cooking.",
    image: [
      { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?cooker=prestige", filename: "prestige-pressure-cooker-2" }
    ],
    price: 1899,
    category: "Home & Kitchen",
    brand: "Prestige",
    stock: 44
  },

  {
    title: "Canon EOS 1500D Camera",
    description: "Beginner-friendly DSLR camera suitable for photography, travel and creative projects.",
    image: [
      { url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd", filename: "canon-eos-1500d-3" },
      { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", filename: "canon-eos-1500d-1" },
      { url: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39", filename: "canon-eos-1500d-2" },
      
    ],
    price: 45999,
    category: "Cameras",
    brand: "Canon",
    stock: 7
  },

  {
    title: "Nikon D5600 DSLR",
    description: "Versatile DSLR camera offering excellent image quality for enthusiasts and creators.",
    image: [
      { url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", filename: "nikon-d5600-2" }
    ],
    price: 52999,
    category: "Cameras",
    brand: "Nikon",
    stock: 6
  },

  {
    title: "Sony Alpha A6400",
    description: "Compact mirrorless camera with fast autofocus and excellent video capabilities.",
    image: [
      { url: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9", filename: "sony-alpha-a6400-2" },
      { url: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c", filename: "sony-alpha-a6400-1" },
      { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?sony=alpha", filename: "sony-alpha-a6400-4" }
    ],
    price: 74999,
    category: "Cameras",
    brand: "Sony",
    stock: 8
  },

  {
    title: "GoPro Hero 12 Black",
    description: "Rugged action camera built for adventure, travel and high-quality stabilized video recording.",
    image: [
      { url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39", filename: "gopro-hero12-1" },
      { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "gopro-hero12-2" },
      { url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", filename: "gopro-hero12-3" }
    ],
    price: 44999,
    category: "Cameras",
    brand: "GoPro",
    stock: 11
  },

  {
    title: "Logitech MX Master 3S",
    description: "Premium wireless mouse designed for productivity with precise tracking and ergonomic comfort.",
    image: [
      { url: "https://images.unsplash.com/photo-1527814050087-3793815479db", filename: "logitech-mx-master-3s-1" },
      { url: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7", filename: "logitech-mx-master-3s-2" }
    ],
    price: 8999,
    category: "Computer Accessories",
    brand: "Logitech",
    stock: 19
  },

  {
    title: "Razer DeathAdder V2",
    description: "Ergonomic gaming mouse with precise sensor and responsive controls for competitive gaming.",
    image: [
      { url: "https://images.unsplash.com/photo-1563297007-0686b7003af7", filename: "razer-deathadder-v2-2" },
      { url: "https://images.unsplash.com/photo-1527814050087-3793815479db?razer=v2", filename: "razer-deathadder-v2-1" },
    ],
    price: 3999,
    category: "Computer Accessories",
    brand: "Razer",
    stock: 27
  },

  {
    title: "TP-Link Archer AX55",
    description: "Dual-band Wi-Fi router designed for fast and reliable home networking.",
    image: [
      { url: "https://images.unsplash.com/photo-1639152201720-5e536d254d81", filename: "tplink-archer-ax55-1" },
      { url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8", filename: "tplink-archer-ax55-2" }
    ],
    price: 7999,
    category: "Networking",
    brand: "TP-Link",
    stock: 23
  },

  {
    title: "JBL Flip 6 Speaker",
    description: "Portable Bluetooth speaker delivering powerful sound in a compact water-resistant design.",
    image: [
      { url: "https://images.unsplash.com/photo-1545454675-3531b543be5d", filename: "jbl-flip6-3" },
      { url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1", filename: "jbl-flip6-1" },
      { url: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4", filename: "jbl-flip6-2" },
      
    ],
    price: 9999,
    category: "Audio",
    brand: "JBL",
    stock: 26
  },
 // ==================== PART 2 ====================
// Products 51 - 100

{
    title: "LG 43 Inch 4K Smart TV",
    description: "4K smart television with vibrant picture quality, streaming apps and immersive sound.",
    image: [
      { url: "https://images.unsplash.com/photo-1461151304267-38535e780c79", filename: "lg-tv-43-2" },
      { url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1", filename: "lg-tv-43-1" },
      { url: "https://images.unsplash.com/photo-1593784991095-a205069470b6", filename: "lg-tv-43-3" }
    ],
    price: 38999,
    category: "Televisions",
    brand: "LG",
    stock: 12
  },

  {
    title: "Samsung Crystal 50 Inch TV",
    description: "Large 4K smart television with sharp visuals and a modern slim design.",
    image: [
      { url: "https://images.unsplash.com/photo-1577979749830-f1d742b96791", filename: "samsung-tv-50-2" },
      { url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?tv=samsung50", filename: "samsung-tv-50-1" },
      
    ],
    price: 45999,
    category: "Televisions",
    brand: "Samsung",
    stock: 10
  },

  {
    title: "Sony Bravia 55 Inch 4K TV",
    description: "Premium 4K television offering detailed visuals, smart features and cinematic entertainment.",
    image: [
      { url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?sony=bravia", filename: "sony-bravia-55-2" },
      { url: "https://images.unsplash.com/photo-1601944177325-f8867652837f", filename: "sony-bravia-55-1" },
      { url: "https://images.unsplash.com/photo-1540574163026-643ea20ade25", filename: "sony-bravia-55-3" }
    ],
    price: 69999,
    category: "Televisions",
    brand: "Sony",
    stock: 7
  },

  {
    title: "Mi Smart LED TV 43",
    description: "Affordable smart LED television with 4K resolution and popular streaming applications.",
    image: [
      { url: "https://images.unsplash.com/photo-1601944177325-f8867652837f?mi=43", filename: "mi-tv-43-1" },
      { url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?mi=tv", filename: "mi-tv-43-2" }
    ],
    price: 28999,
    category: "Televisions",
    brand: "Xiaomi",
    stock: 18
  },

  {
    title: "TCL 55 Inch QLED TV",
    description: "QLED smart television with rich colors, sharp 4K resolution and immersive entertainment.",
    image: [
      { url: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?tcl=55", filename: "tcl-qled-55-1" },
      { url: "https://images.unsplash.com/photo-1461151304267-38535e780c79?tcl=qled", filename: "tcl-qled-55-2" },
      { url: "https://images.unsplash.com/photo-1601944177325-f8867652837f?tcl=55", filename: "tcl-qled-55-3" }
    ],
    price: 41999,
    category: "Televisions",
    brand: "TCL",
    stock: 13
  },

  {
    title: "Philips LED Desk Lamp",
    description: "Compact LED desk lamp providing comfortable lighting for study and office work.",
    image: [
      { url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c", filename: "philips-desk-lamp-1" },
      { url: "https://images.unsplash.com/photo-1534073828943-f801091bb18c", filename: "philips-desk-lamp-2" }
    ],
    price: 1299,
    category: "Home Decor",
    brand: "Philips",
    stock: 37
  },

  {
    title: "IKEA Modern Table Lamp",
    description: "Minimal table lamp with contemporary styling suitable for bedrooms, desks and living rooms.",
    image: [
      { url: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22", filename: "ikea-table-lamp-1" },
      { url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15", filename: "ikea-table-lamp-2" },
      { url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ikea=lamp", filename: "ikea-table-lamp-3" }
    ],
    price: 1799,
    category: "Home Decor",
    brand: "IKEA",
    stock: 29
  },

  {
    title: "Wakefit Memory Foam Pillow",
    description: "Ergonomic memory foam pillow designed to provide comfortable head and neck support.",
    image: [
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "sleepycat-mattress-1" },
      { url: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2", filename: "wakefit-pillow-1" },
      
    ],
    price: 999,
    category: "Home Furnishing",
    brand: "Wakefit",
    stock: 46
  },

  {
    title: "SleepyCat Orthopedic Mattress",
    description: "Comfortable orthopedic mattress designed with supportive foam for restful sleep.",
    image: [
      
      { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304", filename: "sleepycat-mattress-2" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", filename: "sleepycat-mattress-3" }
    ],
    price: 14999,
    category: "Home Furnishing",
    brand: "SleepyCat",
    stock: 8
  },

  {
    title: "Solimo Cotton Bedsheet",
    description: "Soft cotton bedsheet featuring a comfortable fabric and attractive everyday design.",
    image: [
      { url: "https://images.unsplash.com/photo-1618220179428-22790b461013", filename: "solimo-bedsheet-1" },
      { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace", filename: "solimo-bedsheet-2" }
    ],
    price: 799,
    category: "Home Furnishing",
    brand: "Solimo",
    stock: 52
  },

  {
    title: "Home Centre Ceramic Vase",
    description: "Decorative ceramic vase designed to add an elegant touch to living spaces.",
    image: [
      { url: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c", filename: "home-centre-vase-1" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?vase=ceramic", filename: "home-centre-vase-2" },
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa", filename: "home-centre-vase-3" }
    ],
    price: 899,
    category: "Home Decor",
    brand: "Home Centre",
    stock: 24
  },

  {
    title: "Nike Dri-FIT Running T-Shirt",
    description: "Lightweight sports t-shirt made for running and active workouts with moisture management.",
    image: [
      { url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5", filename: "nike-running-shirt-1" },
      { url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55", filename: "nike-running-shirt-2" }
    ],
    price: 2299,
    category: "Sportswear",
    brand: "Nike",
    stock: 39
  },

  {
    title: "Adidas Training Track Pants",
    description: "Comfortable athletic track pants suitable for gym sessions, running and casual wear.",
    image: [
      { url: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea", filename: "adidas-track-pants-1" },
      { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438", filename: "adidas-track-pants-2" },
      { url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e", filename: "adidas-track-pants-3" }
    ],
    price: 2799,
    category: "Sportswear",
    brand: "Adidas",
    stock: 31
  },

  {
    title: "Puma Essential Gym Shorts",
    description: "Lightweight gym shorts designed for comfortable movement during workouts.",
    image: [
      { url: "https://images.unsplash.com/photo-1518611012118-696072aa579a", filename: "puma-gym-shorts-1" },
      { url: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26", filename: "puma-gym-shorts-2" }
    ],
    price: 1499,
    category: "Sportswear",
    brand: "Puma",
    stock: 44
  },

  {
    title: "HRX Performance Jacket",
    description: "Sporty lightweight jacket suitable for outdoor workouts, jogging and travel.",
    image: [
      { url: "https://images.unsplash.com/photo-1548883354-7622d03aca27", filename: "hrx-performance-jacket-1" },
      { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5", filename: "hrx-performance-jacket-2" },
    ],
    price: 2499,
    category: "Sportswear",
    brand: "HRX",
    stock: 28
  },

  {
    title: "Yonex Badminton Racket",
    description: "Lightweight badminton racket designed for recreational and competitive players.",
    image: [
      { url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea", filename: "yonex-racket-1" },
      { url: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6", filename: "yonex-racket-3" }
    ],
    price: 2499,
    category: "Sports",
    brand: "Yonex",
    stock: 20
  },

  {
    title: "Cosco Football",
    description: "Durable football suitable for training, recreational games and outdoor practice.",
    image: [
      { url: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c", filename: "cosco-football-2" },
      { url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?football=cosco", filename: "cosco-football-1" },
      
    ],
    price: 999,
    category: "Sports",
    brand: "Cosco",
    stock: 36
  },

  {
    title: "Nivia Basketball",
    description: "Grip-friendly basketball designed for indoor and outdoor recreational play.",
    image: [
      { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc", filename: "nivia-basketball-1" },
      { url: "https://images.unsplash.com/photo-1519861531473-9200262188bf", filename: "nivia-basketball-2" },
    ],
    price: 1199,
    category: "Sports",
    brand: "Nivia",
    stock: 29
  },

  {
    title: "Wilson Tennis Racket",
    description: "Balanced tennis racket designed for players looking for control and comfortable handling.",
    image: [
      { url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0", filename: "wilson-tennis-racket-1" },
      { url: "https://images.unsplash.com/photo-1530915365347-e35b749a0381", filename: "wilson-tennis-racket-2" }
    ],
    price: 5499,
    category: "Sports",
    brand: "Wilson",
    stock: 14
  },

  {
    title: "Decathlon Yoga Mat",
    description: "Non-slip exercise mat providing comfortable support for yoga, stretching and home workouts.",
    image: [
      { url: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f", filename: "decathlon-yoga-mat-2" },
      { url: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2", filename: "decathlon-yoga-mat-1" },
      { url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5", filename: "decathlon-yoga-mat-3" }
    ],
    price: 999,
    category: "Fitness",
    brand: "Decathlon",
    stock: 48
  },

  {
    title: "MuscleBlaze Gym Gloves",
    description: "Workout gloves designed to improve grip and provide hand protection during strength training.",
    image: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", filename: "muscleblaze-gloves-2" },
      { url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?gloves=mb", filename: "muscleblaze-gloves-1" }, 
    ],
    price: 799,
    category: "Fitness",
    brand: "MuscleBlaze",
    stock: 41
  },

  {
    title: "Cosco Adjustable Dumbbells",
    description: "Compact adjustable dumbbell set suitable for strength training at home.",
    image: [
      { url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61", filename: "cosco-dumbbells-1" },
      { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?dumbbell=cosco", filename: "cosco-dumbbells-2" },
    ],
    price: 2999,
    category: "Fitness",
    brand: "Cosco",
    stock: 17
  },

  {
    title: "L'Oreal Paris Face Serum",
    description: "Lightweight facial serum designed for daily skincare and a refreshed-looking complexion.",
    image: [
      { url: "https://images.unsplash.com/photo-1556228578-8c89e6adf883", filename: "loreal-face-serum-2" },
      { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be", filename: "loreal-face-serum-1" },
    ],
    price: 899,
    category: "Beauty",
    brand: "L'Oreal Paris",
    stock: 35
  },

  {
    title: "Maybelline Fit Me Foundation",
    description: "Everyday liquid foundation offering smooth coverage and a natural-looking finish.",
    image: [
      { url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796", filename: "maybelline-foundation-2" },
      { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348", filename: "maybelline-foundation-1" },
      { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9", filename: "maybelline-foundation-3" }
    ],
    price: 699,
    category: "Beauty",
    brand: "Maybelline",
    stock: 43
  },

  {
    title: "Lakme Eyeconic Kajal",
    description: "Smooth kajal designed for easy application and long-lasting everyday eye makeup.",
    image: [
      { url: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07", filename: "lakme-kajal-2" },
    ],
    price: 299,
    category: "Beauty",
    brand: "Lakme",
    stock: 60
  },

  {
    title: "Nivea Body Lotion",
    description: "Moisturizing body lotion designed for daily skin hydration and softness.",
    image: [
      { url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd", filename: "nivea-body-lotion-3" },
      { url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc", filename: "nivea-body-lotion-1" },
      { url: "https://images.unsplash.com/photo-1556228720-195a672e8a03", filename: "nivea-body-lotion-2" }, 
    ],
    price: 449,
    category: "Beauty",
    brand: "Nivea",
    stock: 55
  },

  {
    title: "Mamaearth Face Wash",
    description: "Gentle daily face wash formulated for a clean and refreshed skincare routine.",
    image: [
      { url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?skincare=facewash", filename: "mamaearth-facewash-2" }
    ],
    price: 399,
    category: "Beauty",
    brand: "Mamaearth",
    stock: 47
  },

  {
    title: "Philips Hair Dryer",
    description: "Compact hair dryer with multiple heat settings for convenient everyday styling.",
    image: [
      { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df", filename: "philips-hairdryer-2" },
      { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e", filename: "philips-hairdryer-1" },
      { url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f", filename: "philips-hairdryer-3" }
    ],
    price: 1799,
    category: "Personal Care",
    brand: "Philips",
    stock: 30
  },

  {
    title: "Dyson Airwrap Styler",
    description: "Premium multi-styler designed for versatile hair drying, curling and styling.",
    image: [
      { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?dyson=airwrap", filename: "dyson-airwrap-1" },
      { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?dyson=styler", filename: "dyson-airwrap-2" }
    ],
    price: 44999,
    category: "Personal Care",
    brand: "Dyson",
    stock: 5
  },

  {
    title: "Gillette Fusion Razor",
    description: "Precision shaving razor designed for a smooth and comfortable grooming experience.",
    image: [
      { url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033", filename: "gillette-fusion-1" },
      { url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908", filename: "gillette-fusion-3" }
    ],
    price: 599,
    category: "Personal Care",
    brand: "Gillette",
    stock: 51
  },

  {
    title: "Philips OneBlade Trimmer",
    description: "Versatile electric trimmer designed for comfortable beard trimming and grooming.",
    image: [
      { url: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814", filename: "philips-oneblade-1" },
      { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1", filename: "philips-oneblade-2" }
    ],
    price: 2299,
    category: "Personal Care",
    brand: "Philips",
    stock: 26
  },

  {
    title: "Himalaya Neem Face Pack",
    description: "Refreshing skincare face pack designed for a simple and clean beauty routine.",
    image: [
      { url: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?himalaya=neem", filename: "himalaya-facepack-1" },
      { url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?himalaya=pack", filename: "himalaya-facepack-2" }
    ],
    price: 199,
    category: "Beauty",
    brand: "Himalaya",
    stock: 68
  },

  {
    title: "American Tourister Laptop Bag",
    description: "Professional laptop bag with padded storage and organized compartments for work and travel.",
    image: [
      { url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?at=laptop", filename: "american-tourister-laptopbag-3" },
      { url: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3", filename: "american-tourister-laptopbag-1" },
      
    ],
    price: 2999,
    category: "Bags",
    brand: "American Tourister",
    stock: 23
  },

  {
    title: "Safari Large Travel Duffel",
    description: "Spacious duffel bag suitable for weekend trips, gym sessions and short travel.",
    image: [
      { url: "https://images.unsplash.com/photo-1553531384-397c80973a0b?safari=travel", filename: "safari-duffel-2" },
      { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?safari=duffel", filename: "safari-duffel-1" },
    ],
    price: 1899,
    category: "Bags",
    brand: "Safari",
    stock: 32
  },

  {
    title: "F Gear Military Backpack",
    description: "Rugged multi-compartment backpack designed for travel, outdoor activities and daily use.",
    image: [
      { url: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?fgear=military", filename: "fgear-backpack-1" },
      { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?fgear=bag", filename: "fgear-backpack-2" },
    ],
    price: 2199,
    category: "Bags",
    brand: "F Gear",
    stock: 27
  },

  {
    title: "Casio G-Shock GA2100",
    description: "Rugged analog-digital watch with durable construction and sporty styling.",
    image: [
      { url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?casio=ga2100", filename: "casio-gshock-ga2100-1" },
      { url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49", filename: "casio-gshock-ga2100-2" },
      { url: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8", filename: "casio-gshock-ga2100-3" }
    ],
    price: 9999,
    category: "Watches",
    brand: "Casio",
    stock: 13
  },

  {
    title: "Titan Neo Analog Watch",
    description: "Classic analog wristwatch with an elegant dial suitable for formal and casual occasions.",
    image: [
      { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?titan=neo", filename: "titan-neo-watch-1" },
      { url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?titan=watch", filename: "titan-neo-watch-2" }
    ],
    price: 5499,
    category: "Watches",
    brand: "Titan",
    stock: 18
  },

  {
    title: "Fossil Grant Chronograph",
    description: "Stylish chronograph watch featuring a classic design suitable for professional outfits.",
    image: [
      { url: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?fossil=grant", filename: "fossil-grant-1" },
      { url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?fossil=chronograph", filename: "fossil-grant-2" },
      { url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?fossil=watch", filename: "fossil-grant-3" }
    ],
    price: 12999,
    category: "Watches",
    brand: "Fossil",
    stock: 11
  },

  {
    title: "Casio Vintage Digital Watch",
    description: "Retro-inspired digital watch with a compact design and easy-to-read display.",
    image: [
      { url: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0", filename: "casio-vintage-digital-1" },
      { url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?casio=vintage", filename: "casio-vintage-digital-2" }
    ],
    price: 2999,
    category: "Watches",
    brand: "Casio",
    stock: 34
  },

  {
    title: "Ray-Ban Aviator Classic",
    description: "Iconic aviator sunglasses featuring a timeless frame designed for everyday style.",
    image: [
      { url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083", filename: "rayban-aviator-1" },
      { url: "https://images.unsplash.com/photo-1577803645773-f96470509666", filename: "rayban-aviator-3" }
    ],
    price: 8999,
    category: "Eyewear",
    brand: "Ray-Ban",
    stock: 15
  },

  {
    title: "Fastrack Wayfarer Sunglasses",
    description: "Trendy wayfarer sunglasses designed for casual everyday fashion and outdoor use.",
    image: [
      { url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", filename: "fastrack-wayfarer-2" },
      { url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?fastrack=wayfarer", filename: "fastrack-wayfarer-1" },
    ],
    price: 1299,
    category: "Eyewear",
    brand: "Fastrack",
    stock: 29
  },

  {
    title: "Wild Stone Eau De Parfum",
    description: "Long-lasting men's fragrance with a modern scent profile suitable for daily occasions.",
    image: [
      { url: "https://images.unsplash.com/photo-1594035910387-fea47794261f", filename: "wildstone-edp-2" },
      { url: "https://images.unsplash.com/photo-1541643600914-78b084683601", filename: "wildstone-edp-1" },
      { url: "https://images.unsplash.com/photo-1587017539504-67cfbddac569", filename: "wildstone-edp-3" }
    ],
    price: 699,
    category: "Fragrances",
    brand: "Wild Stone",
    stock: 45
  },

  {
    title: "Engage Amber Hues Perfume",
    description: "Elegant fragrance with a warm scent profile suitable for evening and special occasions.",
    image: [
      { url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539", filename: "engage-perfume-1" },
      { url: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc", filename: "engage-perfume-2" }
    ],
    price: 799,
    category: "Fragrances",
    brand: "Engage",
    stock: 37
  },

  {
    title: "The Man Company Beard Oil",
    description: "Lightweight beard oil designed to condition facial hair and maintain a groomed appearance.",
    image: [
      { url: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?beard=oil", filename: "man-company-beardoil-1" },
      { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?beard=product", filename: "man-company-beardoil-2" },
      { url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?beard=oil", filename: "man-company-beardoil-3" }
    ],
    price: 499,
    category: "Men's Grooming",
    brand: "The Man Company",
    stock: 42
  },

  {
    title: "Boat Wireless Keyboard",
    description: "Slim wireless keyboard designed for comfortable typing with computers, tablets and smart devices.",
    image: [
      { url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3", filename: "boat-wireless-keyboard-1" },
      { url: "https://images.unsplash.com/photo-1595225476474-87563907a212", filename: "boat-wireless-keyboard-2" }
    ],
    price: 1499,
    category: "Computer Accessories",
    brand: "Boat",
    stock: 33
  },

  {
    title: "Logitech K380 Keyboard",
    description: "Compact Bluetooth keyboard designed for convenient multi-device typing and portability.",
    image: [
      { url: "https://images.unsplash.com/photo-1595225476474-87563907a212?logitech=k380", filename: "logitech-k380-2" },
      { url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?logitech=k380", filename: "logitech-k380-1" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", filename: "logitech-k380-3" }
    ],
    price: 2999,
    category: "Computer Accessories",
    brand: "Logitech",
    stock: 21
  },

  {
    title: "SanDisk 128GB USB Drive",
    description: "Compact USB flash drive providing convenient storage for documents, photos and media.",
    image: [
      { url: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18", filename: "sandisk-128gb-usb-1" },
    ],
    price: 899,
    category: "Storage",
    brand: "SanDisk",
    stock: 57
  },

  {
    title: "Seagate 1TB External Hard Drive",
    description: "Portable external hard drive providing reliable additional storage for computers and backups.",
    image: [
      { url: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b", filename: "seagate-1tb-hdd-1" },
    ],
    price: 4499,
    category: "Storage",
    brand: "Seagate",
    stock: 16
  },

  {
    title: "Amazon Kindle Paperwhite",
    description: "Compact e-reader with a glare-free display designed for comfortable digital reading.",
    image: [
      { url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f", filename: "kindle-paperwhite-2" },
      { url: "https://images.unsplash.com/photo-1592496001020-d31bd830651f", filename: "kindle-paperwhite-1" },
      { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794", filename: "kindle-paperwhite-3" }
    ],
    price: 13999,
    category: "Books & Reading",
    brand: "Amazon",
    stock: 10
  },

  {
    title: "HP Ink Tank 415 Printer",
    description: "All-in-one ink tank printer designed for efficient home and small-office printing.",
    image: [
      { url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6", filename: "hp-ink-tank-415-1" },
    ],
    price: 12999,
    category: "Printers",
    brand: "HP",
    stock: 9
  },

  {
    title: "Canon Pixma E477 Printer",
    description: "Compact multifunction printer suitable for everyday document and photo printing at home.",
    image: [
      { url: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c", filename: "canon-pixma-e477-2" },
      { url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?canon=pixma", filename: "canon-pixma-e477-1" },
      { url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb", filename: "canon-pixma-e477-3" }
    ],
    price: 6499,
    category: "Printers",
    brand: "Canon",
    stock: 14
  },


  {
    title: "Portronics USB C Hub",
    description: "Multi-port USB-C hub designed to expand connectivity for laptops and compatible devices.",
    image: [
      { url: "https://images.unsplash.com/photo-1625842268584-8f3296236761", filename: "portronics-usbc-hub-1" },
      { url: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a", filename: "portronics-usbc-hub-3" }
    ],
    price: 1299,
    category: "Computer Accessories",
    brand: "Portronics",
    stock: 29
  },

  {
    title: "Anker Nano USB C Charger",
    description: "Compact fast charger designed for smartphones, tablets and other USB-C compatible devices.",
    image: [
      { url: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0", filename: "anker-nano-charger-1" },
    ],
    price: 2499,
    category: "Mobile Accessories",
    brand: "Anker",
    stock: 25
  },

  {
    title: "Spigen Rugged Armor Case",
    description: "Protective smartphone case with shock-resistant construction and a slim rugged design.",
    image: [
      { url: "https://images.unsplash.com/photo-1601593346740-925612772716", filename: "spigen-rugged-case-1" },
      { url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?case=spigen", filename: "spigen-rugged-case-2" },
      { url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?case=spigen", filename: "spigen-rugged-case-3" }
    ],
    price: 1299,
    category: "Mobile Accessories",
    brand: "Spigen",
    stock: 43
  },

  {
    title: "Urban Armor Gear Phone Case",
    description: "Heavy-duty protective phone case designed to help protect against everyday drops and impacts.",
    image: [
      { url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?uag=case", filename: "uag-phone-case-2" },
      { url: "https://images.unsplash.com/photo-1601593346740-925612772716?uag=case", filename: "uag-phone-case-1" },
      
    ],
    price: 1899,
    category: "Mobile Accessories",
    brand: "UAG",
    stock: 24
  },
]
module.exports = { data: sampleItems };