/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "http://bntcoffee.com/wp-content/uploads/elementor/thumbs/Green-Coffee-Beans-p30biybj5af9cbwko4hz6u74lrkninlouev937yoww.jpeg";
const import_image="https://th.bing.com/th/id/R.a3070fdab01941f566d19ef039d81ad0?rik=PCpAn%2fUcADzVWw&riu=http%3a%2f%2fwww.jlrsa.net%2fimport1.jpg&ehk=eYROQnGF%2bH78zbAdCX9d6tJlSG80TW%2bSDCCzpAg9vNE%3d&risl=&pid=ImgRaw&r=0"
const agriculture="http://bntcoffee.com/wp-content/uploads/2021/03/DJI_0003.jpg"
const agro_processint="http://bntcoffee.com/wp-content/uploads/elementor/thumbs/464A6364-p3od5p632xvg5ua04e5pt10woad6lpjjzomjfyne74.jpg"
export default [
  {
    title: "Design Blocks",
    description: "Specially coffe. -> Washed-> Natural",
    items: [
      {
        image: `${imagesPrefix}`,
        name: "Export Specially coffe. -> Washed-> Natural",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${import_image}`,
        name: " IMPORTS ->Construction materials, ->< corrugated Iron Sheet; ->Reinforcement Iron Bars, ->Vehicles",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: `${agriculture}`,
        name: "Agricultural coffe plantaiton & Spice farming development.",
        count: 8,
        route: "/sections/page-sections/features",
        // pro: true,
      },
      {
        image: `${agro_processint}`,
        name: "Agro Processing coffe & warehouseing with well-established coffe-cupping laboratory.",
        count: 1,
        route: "/sections/page-sections/features",
        // pro: true,
      },
      
    ],
  },
  
]
