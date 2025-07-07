let cin =document.getElementById("coin")

cin.addEventListener("click",function() {
    alert("Coin in Under Dvelopment")
    
})
// nav bar making start from hire

let li_one = document.getElementById("li-one");
let li_two = document.getElementById("li-two");
let li_three = document.getElementById("li-three");
let li_four = document.getElementById("li-foue");
let slidebox = document.getElementById("slidebox");


li_one.addEventListener("mouseover", function () {
  slidebox.style.display = "block";
});

li_one.addEventListener("mouseout", function () {
  slidebox.style.display = "none";
});

slidebox.addEventListener("mouseover", function () {
  slidebox.style.display = "block";
});

slidebox.addEventListener("mouseout", function () {
  slidebox.style.display = "none";
});


// products for wabe 
const products = [
  {
    name: "Dell Inspiron 15",
    category: "laptop",
    brand: "Dell",
    price: 54999,
    rating: 4.3,
    stock: 25,
    description: "15.6-inch FHD, Intel i5, 8GB RAM, 512GB SSD.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0JdILwrk60vQVothPor25v1lCxwnIUsI7B5OoHKpa9Zj4Bsm0iK3U8wDbdmLcodrCJ4&usqp=CAU",
  },
  {
    name: "Apple MacBook Air M2",
    category: "laptop",
    brand: "Apple",
    price: 114999,
    rating: 4.8,
    stock: 12,
    description: "13.6-inch Retina, M2 chip, 8GB RAM, 256GB SSD.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XpTeMGBZXZitJarodl59ZGUJZXt4qsL7mQ&s",
  },
  {
    name: "HP Pavilion x360",
    category: "laptop",
    brand: "HP",
    price: 63999,
    rating: 4.2,
    stock: 30,
    description: "2-in-1 Touchscreen, Intel i5, 16GB RAM, 512GB SSD.",
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715938431/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270528_0_zy4upa.png",
  },
  {
    name: "Lenovo IdeaPad Gaming 3",
    category: "laptop",
    brand: "Lenovo",
    price: 69999,
    rating: 4.5,
    stock: 18,
    description: "15.6-inch, Ryzen 5, 8GB RAM, GTX 1650.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHPj5d-4amVhmnML0_pYRwNh9XCQMu4mz-Q&s",
  },
  {
    name: "Asus ROG Strix G17",
    category: "laptop",
    brand: "Asus",
    price: 119999,
    rating: 4.6,
    stock: 10,
    description: "17.3-inch, Ryzen 7, 16GB RAM, RTX 3060.",
    image:
      "https://m.media-amazon.com/images/I/71Y9L4E+DWL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Acer Aspire 7",
    category: "laptop",
    brand: "Acer",
    price: 57999,
    rating: 4.0,
    stock: 22,
    description: "15.6-inch FHD, Ryzen 5, 8GB RAM, 512GB SSD.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWv5FNTZE-l28qmSG7YR0D6XRhk2X66IPuEQ&s",
  },
  {
    name: "Samsung Galaxy Tab S9",
    category: "tablet",
    brand: "Samsung",
    price: 84999,
    rating: 4.6,
    stock: 20,
    description: "11-inch AMOLED, Snapdragon Gen 2, 128GB.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuM0oEcbI4mUkAWfHVI69zdAAXTnNXmrwpA&s",
  },
  {
    name: "Apple iPad Air 5th Gen",
    category: "tablet",
    brand: "Apple",
    price: 69999,
    rating: 4.7,
    stock: 15,
    description: "10.9-inch Liquid Retina, M1 chip, 64GB.",
    image:
      "https://m.media-amazon.com/images/I/61JREs56sTL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Sony WH-1000XM5",
    category: "headphone",
    brand: "Sony",
    price: 29999,
    rating: 4.9,
    stock: 40,
    description: "Wireless Noise Cancelling Headphones, 30hr battery.",
    image: "https://m.media-amazon.com/images/I/51aXvjzcukL.jpg",
  },
  {
    name: "Boat Rockerz 450",
    category: "headphone",
    brand: "Boat",
    price: 1499,
    rating: 4.1,
    stock: 100,
    description: "Bluetooth Headphones, 15H playtime, light design.",
    image:
      "https://www.boat-lifestyle.com/cdn/shop/products/7499af44-9d7a-489c-80f0-51f7799289e4.png?v=1673002682",
  },
  {
    name: "Logitech MX Master 3S",
    category: "accessory",
    brand: "Logitech",
    price: 7499,
    rating: 4.9,
    stock: 60,
    description: "Advanced wireless mouse with ultra-fast scroll.",
    image:
      "https://m.media-amazon.com/images/I/71TN+wk-ZgL._UF350,350_QL80_.jpg",
  },
  {
    name: "Mi Power Bank 3i 20000mAh",
    category: "accessory",
    brand: "Xiaomi",
    price: 1999,
    rating: 4.4,
    stock: 80,
    description: "Fast-charging dual USB power bank, 18W output.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDbgxp03WJCIyEMyMIjW1glCrW6efiQdTaA&s",
  },

    {
      name: "OnePlus Nord CE 4 5G",
      category: "smartphone",
      brand: "OnePlus",
      price: 24999,
      rating: 4.4,
      stock: 35,
      description: "Snapdragon 7 Gen 3, 8GB RAM, 5000mAh Battery.",
      image: ""
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      category: "smartphone",
      brand: "Samsung",
      price: 124999,
      rating: 4.9,
      stock: 18,
      description: "200MP camera, S Pen, Snapdragon 8 Gen 2.",
      image: ""
    },
    {
      name: "Canon EOS 1500D DSLR",
      category: "camera",
      brand: "Canon",
      price: 42999,
      rating: 4.6,
      stock: 12,
      description: "24.1 MP, Full HD video, WiFi, 18-55mm lens.",
      image: ""
    },
    {
      name: "GoPro HERO12 Black",
      category: "camera",
      brand: "GoPro",
      price: 44999,
      rating: 4.7,
      stock: 20,
      description: "5.3K video, HyperSmooth 6.0, waterproof action cam.",
      image: ""
    },
    {
      name: "JBL Flip 6 Bluetooth Speaker",
      category: "speaker",
      brand: "JBL",
      price: 9999,
      rating: 4.5,
      stock: 50,
      description: "Portable waterproof speaker with 12h playtime.",
      image: ""
    },
    {
      name: "Amazon Echo Dot (5th Gen)",
      category: "smart-device",
      brand: "Amazon",
      price: 5499,
      rating: 4.3,
      stock: 60,
      description: "Smart speaker with Alexa, enhanced bass.",
      image: ""
    },
    {
      name: "Samsung 980 1TB NVMe SSD",
      category: "storage",
      brand: "Samsung",
      price: 7499,
      rating: 4.8,
      stock: 22,
      description: "PCIe 3.0, up to 3500MB/s read speed.",
      image: ""
    },
    {
      name: "TP-Link Archer AX55 Wi-Fi 6 Router",
      category: "network",
      brand: "TP-Link",
      price: 8999,
      rating: 4.4,
      stock: 30,
      description: "AX3000 Mbps dual band router, 4 antennas.",
      image: ""
    },
     {
        name: "Realme Buds Wireless 3",
        category: "earphone",
        brand: "Realme",
        price: 1699,
        rating: 4.2,
        stock: 80,
        description: "ANC neckband, 30h playback, Bluetooth 5.3.",
        image: ""
      },
      {
        name: "Fire-Boltt Phoenix Smartwatch",
        category: "smartwatch",
        brand: "Fire-Boltt",
        price: 1999,
        rating: 4.0,
        stock: 70,
        description: "1.39-inch display, BT calling, 120+ sports modes.",
        image: ""
      },
      {
        name: "WD Elements 2TB Portable HDD",
        category: "storage",
        brand: "Western Digital",
        price: 5499,
        rating: 4.5,
        stock: 45,
        description: "USB 3.0, compact and lightweight external drive.",
        image: ""
      },
      {
        name: "Zebronics Zeb-Transformer Gaming Keyboard & Mouse",
        category: "accessory",
        brand: "Zebronics",
        price: 1399,
        rating: 4.1,
        stock: 55,
        description: "RGB backlit USB gaming combo with metal body.",
        image: ""
      }
    
    
  
];


let box = document.getElementById("box");

display();

function display() {
  products.map(function (el) {
    let title = document.createElement("h2");
    title.innerText = el.name; 

    let price = document.createElement("h3");
    price.innerText = `₹${el.price}`;

    let image = document.createElement("img");
    image.src = el.image;
    image.style.width = "200px";

    let description = document.createElement("p");
    description.innerText = el.description;

    let addcartbtn = document.createElement("button");
    addcartbtn.innerText = "Add to Cart";
    addcartbtn.style.marginTop = "10px";

    let div = document.createElement("div");
    div.style.border = "1px solid gray";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.width = "220px";
    div.style.textAlign = "center";

    div.append(image, title, price, description, addcartbtn);
    box.append(div);
  });
}
