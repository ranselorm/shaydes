import { v4 as uuidv4 } from "uuid";

export const cardData = [
  {
    name: "Individual",
    categories: [
      {
        name: "Singular",
        options: [
          {
            id: "1",
            title: "Bridal Trial",
            subInfo: "bride only",
            price: 400,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "2",
            title: "Pre Wedding / Thanksgiving",
            subInfo: "bride only",
            price: 400,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "3",
            title: "Civil wedding ONLY",
            subInfo: "bride only",
            price: 600,
            subInfo: "bride only",
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "4",
            title: "Reception ONLY",
            subInfo: "bride only",
            price: 600,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "5",
            title: "White OR Trad Wedding ONLY",
            subtitle: "The best option for single event",
            price: 800,
            subInfo: "bride only",
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
        ],
      },
      {
        name: "Two Looks",
        options: [
          {
            id: "6",
            title: "Civil Wedding & Reception",
            subtitle: "The best option for a single day event",
            subInfo: "bride only",
            looks: 2,
            days: 2,
            // looksPrice: 200,
            // daysPrice: 50,
            price: 1100,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "7",
            title: "Civil Wedding & Reception",
            subtitle: "The best option for 2 days event",
            subInfo: "bride only",
            looks: 2,
            days: 2,
            // looksPrice: 200,
            // daysPrice: 50,
            price: 1150,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "8",
            title: "Trad & Civil Wedding",
            subtitle: "The best option for a single day event",
            subInfo: "bride only",
            looks: 2,
            days: 2,
            // looksPrice: 200,
            // daysPrice: 100,
            price: 1200,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "9",
            title: "Trad & Civil Wedding",
            subtitle: "The best option for 2 days event",
            subInfo: "bride only",
            looks: 2,
            days: 2,
            // looksPrice: 200,
            // daysPrice: 100,
            price: 1300,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "10",
            title: "Trad OR White & Reception",
            subtitle: "The best option for a single day event",
            subInfo: "bride only",
            looks: 2,
            // days: 2,
            // looksPrice: 200,
            // daysPrice: 100,
            price: 1300,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "11",
            looks: 2,
            title: "Trad & White Wedding",
            subtitle: "Best option for same day event  ",
            subInfo: "bride only",
            looksPrice: 650,
            price: 1450,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "12",
            title: "Trad & White Wedding",
            subtitle: "Best option for two days event",
            subInfo: "bride only",
            looks: 2,
            days: 2,
            // looksPrice: 200,
            // daysPrice: 150,
            price: 1500,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
        ],
      },
      {
        name: "Three Looks",
        options: [
          {
            id: "13",
            title: "Trad, White & Reception",
            subtitle: "The best option for a single day event",
            subInfo: "bride only",
            looks: 3,
            days: 2,
            // looksPrice: 200,
            // daysPrice: 100,
            price: 2000,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
          {
            id: "14",
            title: "Trad, White & Reception",
            subtitle: "The best option for 2 days event",
            subInfo: "bride only",
            looks: 3,
            days: 2,
            // looksPrice: 200,
            // daysPrice: 100,
            price: 2100,
            features: [
              {
                text: "Full face lasting make up",
              },
              {
                text: "Eye brow grooming",
              },
              {
                text: "Bridal skin prep",
              },
              {
                text: "Mink Lashes",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const bridalItems = [
  {
    id: "1",
    name: "Trad",
    img: "/t2.jpg",
    images: [
      "/t1.jpg",
      "/t2.jpg",
      "/t3.jpg",
      "/t4.jpg",
      "/t5.jpg",
      "/t6.jpg",
      "/t7.jpg",
      "/trad.jpg",
    ],
  },
  {
    id: "2",
    name: "White Wedding",
    img: "/wed.jpg",
    images: [
      "/w1.jpg",
      "/w2.jpg",
      "/w3.jpg",
      "/w4.jpg",
      "/w5.jpg",
      "/w6.jpg",
      "/w7.jpg",
      "/wed.jpg",
    ],
  },
  {
    id: "3",
    name: "Civil Princess",
    img: "/c2.jpg",
    images: ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/civil.jpg"],
  },
  {
    id: "4",
    name: "Reception",
    img: "/reception.jpg",
  },
];
export const sliderItems = [
  {
    img: "/n7.jpg",
  },
  {
    img: "/n3.jpg",
  },
  {
    img: "/n5.jpg",
  },
  {
    img: "/n2.jpg",
  },
  {
    img: "/n11.jpg",
  },
  {
    img: "/n6.jpg",
  },
  {
    img: "/n12.jpg",
  },
];

// export const courseItems = [
//   {
//     id: "1",
//     name: "Cosmetology",
//     backdrop: "/cos.jpg",
//     chapters: [
//       {
//         id: uuidv4(),
//         section: 1,
//         name: "Getting Started",
//         content: [
//           {
//             id: uuidv4(),
//             name: "Introduction",
//             videourl: "https://youtu.be/k6eE3c70hgg?si=KuyFAhz3KG4eF83q",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "What is Cosmetology:?",
//             videourl: "https://youtu.be/7b0ETFcWrgY?si=NMlYwa5EE3H6mSbu",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         section: 2,
//         name: "Continuation",
//         content: [
//           {
//             id: uuidv4(),
//             name: "Introduction",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "What is cosmotology?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         section: 2,
//         name: "Continuation",
//         content: [
//           {
//             id: uuidv4(),
//             name: "Introduction",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "What is cosmotology?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: uuidv4(),
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     name: "Fiction",
//     backdrop: "/cs.jpg",
//     chapters: [
//       {
//         id: "1",
//         section: 1,
//         name: "Getting Started",
//         content: [
//           {
//             id: "1",
//             name: "Introduction",
//             videourl: "https://youtu.be/k6eE3c70hgg?si=KuyFAhz3KG4eF83q",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "2",
//             name: "What is Cosmetology:?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "3",
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "4",
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//       {
//         id: "2",
//         section: 2,
//         name: "Getting Started",
//         content: [
//           {
//             id: "1",
//             name: "Introduction",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "2",
//             name: "What is cosmotology?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "3",
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "4",
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//       {
//         id: "3",
//         section: 3,
//         name: "Getting Started",
//         content: [
//           {
//             id: "1",
//             name: "Introduction",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "2",
//             name: "What is cosmotology?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "3",
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "4",
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     name: "Cosmetology",
//     backdrop: "/bt.jpg",
//     chapters: [
//       {
//         id: "1",
//         section: 1,
//         name: "Getting Started",
//         content: [
//           {
//             id: "1",
//             name: "Introduction",
//             videourl: "https://youtu.be/k6eE3c70hgg?si=KuyFAhz3KG4eF83q",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "2",
//             name: "What is Cosmetology:?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "3",
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "4",
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//       {
//         id: "2",
//         section: 2,
//         name: "Getting Started",
//         content: [
//           {
//             id: "1",
//             name: "Introduction",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "2",
//             name: "What is cosmotology?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "3",
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "4",
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//       {
//         id: "3",
//         section: 3,
//         name: "Getting Started",
//         content: [
//           {
//             id: "1",
//             name: "Introduction",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "2",
//             name: "What is cosmotology?",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "3",
//             name: "Various benefits",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//           {
//             id: "4",
//             name: "How to apply",
//             videourl: "helloworld.png",
//             overview: "This is the overview of the video",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const courseItems = [
  {
    id: "1",
    name: "Cosmetology Mastery",
    backdrop: "/cos.jpg",
    price: 47,
    chapters: [
      {
        id: "1",
        section: 1,
        name: "Introduction to Cosmetology",
        content: [
          {
            id: "1",
            name: "Understanding Cosmetology Basics",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview: "Explore the fundamental concepts of cosmetology.",
          },
          {
            id: "2",
            name: "History of Cosmetology",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Learn about the rich history and evolution of cosmetology practices.",
          },
          {
            id: "3",
            name: "Essential Tools and Techniques",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Get hands-on with the essential tools and techniques used in cosmetology.",
          },
          {
            id: "4",
            name: "Careers in Cosmetology",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Explore diverse career paths in the field of cosmetology.",
          },
        ],
      },
      {
        id: "2",
        section: 2,
        name: "Advanced Styling Techniques",
        content: [
          {
            id: "1",
            name: "Creative Hairstyling",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Master advanced hairstyling techniques for creative expressions.",
          },
          {
            id: "2",
            name: "Coloring and Highlights",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Dive into the world of hair coloring and highlights for a stunning look.",
          },
        ],
      },
      {
        id: "3",
        section: 3,
        name: "Nail Artistry",
        content: [
          {
            id: "1",
            name: "Basic Nail Care",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Learn essential techniques for basic nail care and maintenance.",
          },
          {
            id: "2",
            name: "Creative Nail Designs",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Explore creative and trendy nail art designs for various occasions.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Beauty Therapy Essentials",
    backdrop: "/cs.jpg",
    chapters: [
      {
        id: "1",
        section: 1,
        name: "Intro to Beauty Therapy",
        content: [
          {
            id: "1",
            name: "Skin Anatomy and Care",
            videourl:
              "https://www.youtube.com/watch?v=IGHpSGwZiHo&pp=ygUMY29zbWV0b2xvZ3kg",
            overview:
              "Understand the anatomy of the skin and essential skincare practices.",
          },
          {
            id: "2",
            name: "Facial Treatments",
            videourl: "https://youtu.be/beauty_therapy_facial",
            overview:
              "Explore rejuvenating facial treatments for radiant and healthy skin.",
          },
          {
            id: "3",
            name: "Makeup Artistry",
            videourl: "https://youtu.be/beauty_therapy_makeup",
            overview:
              "Learn the art of makeup application for various occasions.",
          },
        ],
      },
      {
        id: "2",
        section: 2,
        name: "Body and Wellness",
        content: [
          {
            id: "1",
            name: "Massage Techniques",
            videourl: "https://youtu.be/beauty_therapy_massage",
            overview:
              "Master the art of massage techniques for relaxation and wellness.",
          },
          {
            id: "2",
            name: "Holistic Wellness",
            videourl: "https://youtu.be/beauty_therapy_wellness",
            overview:
              "Explore holistic approaches to wellness for a balanced and healthy lifestyle.",
          },
        ],
      },
    ],
  },
];

export const isAuthenticated = false;
