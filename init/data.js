const sampleItems = [
  {
    title: "Samsung Galaxy S25",
    description: "Latest Samsung flagship smartphone",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/l/f/-original-imahggewrzzd5sad.jpeg?q=70",
    price: 79999,
    category: "Mobile Phones",
    brand: "Samsung",
    stock: 15
  },
  {
    title: "iPhone 16",
    description: "Powerful Apple smartphone",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70",
    price: 69999,
    category: "Mobile Phones",
    brand: "Apple",
    stock: 12
  },
  {
    title: "OnePlus 13",
    description: "High performance smartphone",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/u/y/13-cph2649-oneplus-original-imahhj8yykpcpmhw.jpeg?q=70",
    price: 64999,
    category: "Mobile Phones",
    brand: "OnePlus",
    stock: 18
  },
  {
    title: "Google Pixel 9",
    description: "Advanced camera smartphone",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/v/s/-original-imahq6zyymhvjegk.jpeg?q=70",
    price: 74999,
    category: "Mobile Phones",
    brand: "Google",
    stock: 10
  },
  {
    title: "Vivo V40 5g",
    description: "Stylish smartphone with excellent camera",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/q/3/-original-imahfkvfzynqjjwz.jpeg?q=70",
    price: 34999,
    category: "Mobile Phones",
    brand: "Vivo",
    stock: 20
  },
  {
    title: "HP Pavilion 15",
    description: "Powerful laptop for work and study",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/8/p/b/-original-imahg4utjwvr6bxs.jpeg?q=70",
    price: 64999,
    category: "Laptops",
    brand: "HP",
    stock: 10
  },
  {
    title: "Dell Inspiron 15",
    description: "Reliable everyday laptop",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/m/i/inspiron-15-thin-and-light-laptop-dell-original-imagwngekycgvgg4.jpeg?q=70",
    price: 58999,
    category: "Laptops",
    brand: "Dell",
    stock: 13
  },
  {
    title: "Lenovo IdeaPad Slim",
    description: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/b/w/-original-imahmfxkrtzgppug.jpeg?q=70",
    price: 52999,
    category: "Laptops",
    brand: "Lenovo",
    stock: 16
  },
  {
    title: "ASUS VivoBook",
    description: "Lightweight laptop for students",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/t/h/-original-imah9d7pgrdmv858.jpeg?q=70",
    price: 54999,
    category: "Laptops",
    brand: "ASUS",
    stock: 14
  },
  {
    title: "MacBook Air M3",
    description: "Apple laptop powered by M3 chip",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/n/k/-original-imagypv6nmqhh9fm.jpeg?q=70",
    price: 99999,
    category: "Laptops",
    brand: "Apple",
    stock: 8
  },
  {
    title: "Nike Air Max",
    description: "Comfortable running shoes",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/r/g/8-fz5486-101-8-nike-summit-white-racer-blue-vast-grey-college-original-imahg5zk9v8r7cxh.jpeg?q=70",
    price: 8999,
    category: "Shoes",
    brand: "Nike",
    stock: 25
  },
  {
    title: "Adidas Ultraboost",
    description: "Premium performance running shoes",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/i/4/-watermarked-original-imahgcs8qyx36a6n.jpeg?q=70",
    price: 10999,
    category: "Shoes",
    brand: "Adidas",
    stock: 18
  },
  {
    title: "Puma Sports Shoes",
    description: "Lightweight sports shoes",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/o/g/8-kj0633-8-adidas-cblack-owhite-lucpnk-original-imahpbmwmjavb32e.jpeg?q=70",
    price: 4999,
    category: "Shoes",
    brand: "Puma",
    stock: 30
  },
  {
    title: "Skechers Walking Shoes",
    description: "Comfortable daily walking shoes",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/w/h/-original-imahhnfaggqaqnxb.jpeg?q=70",
    price: 5999,
    category: "Shoes",
    brand: "Skechers",
    stock: 22
  },
  {
    title: "Reebok Training Shoes",
    description: "Sports shoes for workouts",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/8/o/1/-watermarked-original-imah8g86w6aeug2h.jpeg?q=70",
    price: 3999,
    category: "Shoes",
    brand: "Reebok",
    stock: 20
  },
  {
    title: "Nike Cotton T-Shirt",
    description: "Comfortable casual cotton t-shirt",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/v/0/xs-dz4686-010-nike-original-imagxfggcywx7gdt.jpeg?q=70",
    price: 1499,
    category: "Clothing",
    brand: "Nike",
    stock: 40
  },
  {
    title: "Adidas Sports T-Shirt",
    description: "Breathable sports t-shirt",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/g/v/m-sg01cr170049-sg-original-imah9jzy494zxy7v.jpeg?q=70",
    price: 1799,
    category: "Clothing",
    brand: "Adidas",
    stock: 35
  },
  {
    title: "Levi's Slim Fit Jeans",
    description: "Classic slim fit denim jeans",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/s/h/r/14-15-years-pb202082q03-pepe-jeans-enriched-transparent-original-imagsyee4wz3nprg.png?q=70",
    price: 2999,
    category: "Clothing",
    brand: "Levi's",
    stock: 25
  },
  {
    title: "Puma Hoodie",
    description: "Warm and comfortable hoodie",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/k/k/r/m-58668811-puma-original-imaghxgqr2srmnw4.jpeg?q=70",
    price: 2499,
    category: "Clothing",
    brand: "Puma",
    stock: 20
  },
  {
    title: "Allen Solly Formal Shirt",
    description: "Stylish formal shirt for office",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/u/t/xl-white-shirt-xl-magnum-original-imahpzvxscrwmgdy.jpeg?q=70",
    price: 1999,
    category: "Clothing",
    brand: "Allen Solly",
    stock: 16
  },
  {
    title: "Essence Mascara",
    description: "Volumizing and lengthening mascara",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/p/c/i/8-charming-mascara-jet-black-smudge-proof-waterproof-volume-original-imahf6afuv7j5p8n.jpeg?q=70",
    price: 899,
    category: "Makeup",
    brand: "Essence",
    stock: 60
  },
  {
    title: "Red Lipstick",
    description: "Long lasting red lipstick",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/a/d/7/-original-imahq86dfqc5fvgv.jpeg?q=70",
    price: 699,
    category: "Makeup",
    brand: "Chic Cosmetics",
    stock: 80
  },
  {
    title: "Foundation Makeup",
    description: "Smooth and natural finish foundation",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/e/4/f/50-matte-liquid-makeup-foundation-with-pump-for-all-skin-types-original-imahnntmwjdegqky.jpeg?q=70",
    price: 1299,
    category: "Makeup",
    brand: "Maybelline",
    stock: 50
  },
  {
    title: "Eyeshadow Palette",
    description: "Beautiful multi-color eyeshadow palette",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/eye-shadow/u/3/9/20-5-36-colors-catch-the-eyeshadow-palette-waterproof-high-original-imahhfmkaypyfga2.jpeg?q=70",
    price: 999,
    category: "Makeup",
    brand: "Lakme",
    stock: 45
  },
  {
    title: "Face Powder",
    description: "https://rukminim2.flixcart.com/image/612/612/xif0q/talc/q/e/i/600-0-hamilton-premium-talc-combo-pack-of-2-2-denver-enriched-transparent-original-imahch4h2pbhadqf.png?q=70",
    price: 599,
    category: "Makeup",
    brand: "Lakme",
    stock: 70
  },
  {
    title: "Calvin Klein CK One",
    description: "Classic unisex fragrance",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/s/n/xxl-40ec242410-calvin-klein-jeans-original-imah34z5shptm4km.jpeg?q=70",
    price: 3999,
    category: "Perfume",
    brand: "Calvin Klein",
    stock: 25
  },
  {
    title: "Chanel Coco Noir",
    description: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/v/6/g/100-noir-amber-and-coco-perfume-long-lasting-unisex-strong-original-imahdh7mrefrvaxe.jpeg?q=70",
    price: 8999,
    category: "Perfume",
    brand: "Chanel",
    stock: 15
  },
  {
    title: "Dior J'adore",
    description: "Premium floral perfume",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/attar/a/n/n/attarjadore-6ml-al-umar-perfume-6-original-imahzhjx94djfggk.jpeg?q=70",
    price: 7999,
    category: "Perfume",
    brand: "Dior",
    stock: 20
  },
  {
    title: "Gucci Bloom",
    description: "Floral and romantic perfume",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/deodorant/f/k/d/100-brightening-underarm-roll-50ml-prevents-dark-underarms-odour-original-imahdtdgyervzvha.jpeg?q=70",
    price: 6999,
    category: "Perfume",
    brand: "Gucci",
    stock: 18
  },
  {
    title: "Versace Eros",
    description: "Fresh and powerful men's fragrance",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/w/q/d/100-svs-london-perfume-sophisticated-fragrance-inspired-by-original-imahdgms3zqgcfxt.jpeg?q=70",
    price: 5999,
    category: "Perfume",
    brand: "Versace",
    stock: 22
  },
  {
    title: "Face Moisturizer",
    description: "Hydrating daily face moisturizer",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/m/y/x/100-ceramides-hyaluronic-barrier-repair-moisturizer-with-original-imahh9xbzgxteabc.jpeg?q=70",
    price: 599,
    category: "Skincare",
    brand: "CeraVe",
    stock: 60
  },
  {
    title: "Face Wash",
    description: "Gentle daily face cleanser",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/h/r/v/-enriched-transparent-original-imahn6zr2j3hzduj.png?q=70",
    price: 399,
    category: "Skincare",
    brand: "Neutrogena",
    stock: 70
  },
  {
    title: "Body Lotion",
    description: "Moisturizing body lotion",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/9/y/t/100-aha-body-lotion-with-niacinamide-shea-butter-moisturizer-for-original-imahggtgtn6fdtsw.jpeg?q=70",
    price: 499,
    category: "Skincare",
    brand: "Nivea",
    stock: 55
  },
  {
    title: "Sunscreen SPF 50",
    description: "Broad spectrum sunscreen",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunscreen/f/k/x/50-lightweight-niacinamide-broad-spectrum-suncream-no-white-cast-original-imahzn67guwpffvh.jpeg?q=70",
    price: 699,
    category: "Skincare",
    brand: "Minimalist",
    stock: 80
  },
  {
    title: "Hair Shampoo",
    description: "Nourishing shampoo for daily use",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shampoo/o/x/x/-enriched-transparent-original-imahgv473puuggrh.png?q=70",
    price: 349,
    category: "Personal Care",
    brand: "Dove",
    stock: 90
  },
  {
    title: "Gold Necklace",
    description: "Elegant fashion necklace",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/precious-necklace/r/p/o/na-16-colourful-stones-design-necklace-colourful-stones-design-original-imahhgtn69rhfwtf.jpeg?q=70",
    price: 4999,
    category: "Jewellery",
    brand: "Jewellery House",
    stock: 12
  },
  {
    title: "Diamond Earrings",
    description: "Elegant sparkling earrings",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/earring/p/x/8/na-melli-zgmti-01-munsi-store-original-imahm8vdekgenhwc.jpeg?q=70",
    price: 7999,
    category: "Jewellery",
    brand: "Crystal Jewellery",
    stock: 8
  },
  {
    title: "Silver Bracelet",
    description: "Classic silver bracelet",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/d/d/d/2-8-8-na-1-chandak-2-layer-be-in-trend-original-imahk59dbm6tbjzx.jpeg?q=70",
    price: 2499,
    category: "Jewellery",
    brand: "Silver Craft",
    stock: 20
  },
  {
    title: "Fashion Ring",
    description: "Stylish elegant fashion ring",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ring/c/w/w/adjustable-1-ffrg161-ring-fashion-frill-resized-original-imahm6gvv7jgugc6.jpeg?q=70",
    price: 1499,
    category: "Jewellery",
    brand: "Fashion Jewellery",
    stock: 25
  },
  {
    title: "Women's Handbag",
    description: "Stylish everyday handbag",
    image: "https://rukminim2.flixcart.com/image/612/612/kqjtd3k0/hand-messenger-bag/v/r/h/women-hand-bag-sgm-0107-pista-shoulder-bag-sgm-fashion-original-imag4jqfwq3xjq6m.jpeg?q=70",
    price: 2999,
    category: "Bags",
    brand: "Fashion Bag",
    stock: 25
  },
  {
    title: "Leather Handbag",
    description: "Premium leather handbag",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/x/u/e/-watermarked-original-imahfttg5ee5yypd.jpeg?q=70",
    price: 4999,
    category: "Bags",
    brand: "Leather Craft",
    stock: 15
  },
  {
    title: "Travel Backpack",
    description: "Large backpack for travel",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/l/9/g/12-3lbackpack-19-001-backpack-lsr-fashion-35-19-original-imahzpbxzcsyw3ua.jpeg?q=70",
    price: 1999,
    category: "Bags",
    brand: "Wildcraft",
    stock: 40
  },
  {
    title: "School Backpack",
    description: "Spacious school backpack",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/p/c/5/7-0-35l-trendy-water-resistant-laptop-backpack-bag-with-pouch-resized-original-imahh4megnugzfxh.jpeg?q=70",
    price: 999,
    category: "Bags",
    brand: "American Tourister",
    stock: 50
  },
  {
    title: "Samsung Galaxy Watch",
    description: "Premium Samsung smartwatch",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/h/d/-original-imaherxuptxrhzen.jpeg?q=70",
    price: 24999,
    category: "Smart Watches",
    brand: "Samsung",
    stock: 12
  },
  {
    title: "Apple Watch Series 10",
    description: "Advanced Apple smartwatch",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/a/-enriched-transparent-original-imah4jndwgy9yfhz.png?q=70",
    price: 46999,
    category: "Smart Watches",
    brand: "Apple",
    stock: 9
  },
  {
    title: "Noise Smart Watch",
    description: "Affordable fitness smartwatch",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/g/n/5/-enriched-transparent-original-imaherxuggamz6zv.png?q=70",
    price: 2999,
    category: "Smart Watches",
    brand: "Noise",
    stock: 30
  },
  {
    title: "Wooden Bed",
    description: "Premium wooden bedroom bed",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed/a/r/4/-original-imahzqv2hvuxf4q5.jpeg?q=70",
    price: 49999,
    category: "Furniture",
    brand: "Home Centre",
    stock: 8
  },
  {
    title: "Comfort Sofa",
    description: "Modern comfortable living room sofa",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/r/2/d/symmetrical-78-black-78-jute-no-25-cm786-comfort-zone-32-black-original-imah4zhpuguc3e4t.jpeg?q=70",
    price: 34999,
    category: "Furniture",
    brand: "Urban Living",
    stock: 10
  },
  {
    title: "Office Chair",
    description: "Ergonomic office chair",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/1/q/l/1-wrought-iron-60-9-nova-grey-iafa-119-3-original-imahkq9tphdwhbe3.jpeg?q=70",
    price: 8999,
    category: "Furniture",
    brand: "Featherlite",
    stock: 15
  },
  {
    title: "Electric Kettle",
    description: "Fast boiling electric kettle",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/k/x/w/quick-boil-lifestyle-quick-boil-lifestyle-cello-original-imahzpkdz2yzm4rs.jpeg?q=70",
    price: 1299,
    category: "Kitchen",
    brand: "Prestige",
    stock: 35
  },
];
module.exports = { data: sampleItems};