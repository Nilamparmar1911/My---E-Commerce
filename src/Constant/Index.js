// export const productCart = [
//     {
//         id:"1",
//         img:"src/assets/phone.jpg",
//         title:"Iphone",
//         price:100000,
//         rating:3.5
//         additionalImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
//     },
//      {
//         id:"2",
//         img:"src/assets/printer3_vb5txl.avif",
//         title:"Printer",
//         price:24000,
//         rating:4.4
//     },
//      {
//         id:"3",
//         img:"src/assets/printer.jpg",
//         title:"Perfume",
//         price:13000,
//         rating:5.5
//     },
//      {
//         id:"4",
//         img:"src/assets/television.jpg",
//         title:"TeleVision",
//         price:30000,
//         rating:2.3
//     },
//       {
//         id:"5",
//         img:"src/assets/airpod.jpg",
//         title:"AirPods",
//         price:24500,
//         rating:0
//     },
//       {
//         id:"6",
//         img:"src/assets/shoes.jpg",
//         title:"Shoes",
//         price:3000,
//         rating:2.2
//     },
//       {
//         id:"7",
//         img:"src/assets/laddies_top.webp",
//         title:"Dress",
//         price:1751,
//         rating:8.4
//     },
//       {
//         id:"8",
//         img:"src/assets/shirt.jpg",
//         title:"Shirt",
//         price:2599,
//         rating:3.0
//     },
//        {
//         id:"9",
//         img:"src/assets/watch.jpg",
//         title:"Watch",
//         price:30000,
//         rating:8.3
//     },
//        {
//         id:"10",
//         img:"src/assets/kidsclothes.jpg",
//         title:"KidsCloth",
//         price:2500,
//         rating:7.3
//     },
//        {
//         id:"11",
//         img:"src/assets/laptop.jpg",
//         title:"Laptop",
//         price:100000,
//         rating:9.1
//     },
//        {
//         id:"12",
//         img:"src/assets/android-charger.jpeg",
//         title:"Andriod-Charger",
//         price:1000,
//         rating:1.1
//     },
// ]









// // export const productCart = [
// //   {
// //     id: 1,
// //     img: "src/assets/phone.jpg",
// //     title: "Product One",
// //     price: 499,
// //     rating: 4.5,
// //     // 🆕 Add additional images:
// //     additionalImages: [
// //       "src/assets/phone.jpg",
// //       "src/assets/phone.jpg",
// //       "src/assets/phone.jpg"
// //     ]
// //   },
// //   // ... other products
// // ];




import phone from '../assets/phone.jpg';
import phone2 from '../assets/phone2.jpg';
import phone3 from '../assets/phone3.jpg';
import buds from '../assets/buds.jpg';
import buds2 from '../assets/buds2.jpg';
import buds3 from '../assets/buds3.jpg';
import keyboard from '../assets/keyboard.jpg';  
import keyboard2 from '../assets/keyboard2.jpg';
import keyboard3 from '../assets/keyboard3.jpg';
import shirt from '../assets/shirt.jpg';
import shirt1 from '../assets/shirt1.jpg';
import shirt2 from '../assets/shirt2.jpg';
import shirt3 from '../assets/shirt3.jpg'; 
import printer1 from '../assets/printer1.jpg';
import printer2 from '../assets/printer2_vb5txl.avif';
import printer3 from '../assets/printer3.jpg';
import fridge from '../assets/fridge.jpg';
import fridge2 from '../assets/fridge2.jpg';
import fridge3 from '../assets/fridge3.jpg';
import kidsclothes from '../assets/kidsclothes.jpg';
import kidsclothes2 from '../assets/kidsclothes2.jpg';
import kidsclothes3 from '../assets/kidsclothes3.jpg';  
import shoes from '../assets/shoes.jpg';
import shoes2 from '../assets/shoes2.jpg';
import shoes3 from '../assets/shoes3.jpg'; 
import phonecase from '../assets/phonecase.jpeg';
import phonecase2 from '../assets/phonecase2.jpeg';
import phonecase3 from '../assets/phonecase3.jpeg'; 
import menshirt from '../assets/menshirt.jpg';
import menshirt2 from '../assets/menshirt2.jpg';
import menshirt3 from '../assets/menshirt3.jpg'; 
import watch from '../assets/watch.jpg';
import watch2 from '../assets/watch2.jpg';
import watch3 from '../assets/watch3.jpg';
import tv from '../assets/tv.jpg';
import tv2 from '../assets/tv2.jpg';
import tv3 from '../assets/tv3.jpg';
// import ladiesclothes from '../../assets/ladiesclothes.jpg';
// import ladiesclothes2 from '../../assets/ladiesclothes2.jpg';
// import iphonecharge from '../../assets/iphonecharge.jpg';
// import iphonecharge2 from '../../assets/iphonecharge2.jpg';
// import iphonecharge3 from '../../assets/iphonecharge3.jpg';

export const productCart = [
  {
    id: 1,
    img: phone,
    title: "iPhone",
    price: 200000,
    rating: 4.4,
    additionalImages: [phone2, phone3]
  },
  {
    id: 2,
    img: printer1,
    title: "Printer",
    price: 24000,
    rating: 4.4,
    additionalImages: [printer2, printer3]
  },
  {
    id: 3,
    img: fridge,
    title: "Fridge",
    price: 15000,
    rating: 4.4,
    additionalImages: [fridge2, fridge3]
  },
  {
    id: 4,
    img: buds,
    title: "Buds",
    price: 30000,
    rating: 1.5,
    additionalImages: [buds2, buds3]
  },
  {
    id: 5,
    img: keyboard,
    title: "Keyboard",
    price: 1000,
    rating: 1.5,
    additionalImages: [keyboard2, keyboard3]
  },
  {
    id: 6,
    img: shirt,
    title: "Shirt",
    price: 13000,
    rating: 4.5,
    additionalImages: [shirt1, shirt2, shirt3]
  },
  {
    id: 7,
    img: kidsclothes,
    title: "Kidsclothes",
    price: 13000,
    rating: 4.5,
    additionalImages: [kidsclothes2, kidsclothes3,]
  },
  {
    id: 8,
    img: shoes,
    title: "Shoes",
    price: 13000,
    rating: 4.5,
    additionalImages: [shoes2, shoes3,]
  },
  {
    id: 9,
    img: phonecase,
    title: "Phonecase",
    price: 13000,
    rating: 4.5,
    additionalImages: [phonecase2, phonecase3,]
  },
   {
    id: 10,
    img: menshirt,
    title: "Men-Shirt",
    price: 13000,
    rating: 4.5,
    additionalImages: [menshirt2, menshirt3,]
  },
  {
    id: 11,
    img: watch,
    title: "Watch",
    price: 13000,
    rating: 4.5,
    additionalImages: [watch2, watch3,]
  },
  {
    id: 11,
    img: tv,
    title: "Tv",
    price: 13000,
    rating: 4.5,
    additionalImages: [tv2, tv3,]
  },
  // {
  //   id: 12,
  //   img: iphonecharge,
  //   title: "iPhonecharge",
  //   price: 13000,
  //   rating: 4.5,
  //   additionalImages: [iphonecharge2, iphonecharge3,]
  // },
  // {
  //   id: 13,
  //   img: ladiesclothes,
  //   title: "Ladies-Clothes",
  //   price: 13000,
  //   rating: 4.5,
  //   additionalImages: [ladiesclothes2]
  // }
];
