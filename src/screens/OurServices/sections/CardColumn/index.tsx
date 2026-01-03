// import React, { useEffect, useState } from "react";
// import { Oval } from "react-loader-spinner";
// import { toast } from "react-toastify";
// import "./style.scss";

// interface ServiceCard {
//   _id?: string;
//   title: string;
//   description: string;
//   masterImage?: string;
// }

// const CardColumn: React.FC = () => {
//   const [cards, setCards] = useState<ServiceCard[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchVisibleServices = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`${baseUrl}/services/public`);
//         const data = await res.json();

//         if (!res.ok)
//           throw new Error(data.message || "Failed to fetch services");

//         setCards(data.services || []);
//       } catch (err: any) {
//         toast.error(err?.message || "An error occurred while loading services");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVisibleServices();
//   }, []);

//   if (loading) {
//     return (
//       <div className="loader-overlay">
//         <Oval
//           height={80}
//           width={80}
//           color="#007bff"
//           secondaryColor="#ccc"
//           strokeWidth={4}
//           strokeWidthSecondary={2}
//           visible
//         />
//       </div>
//     );
//   }

//   if (cards.length === 0) {
//     return (
//       <div className="no-results">
//         <h3>No Services Found</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="card-column">
//       {cards.map((card, index) => (
//         <div
//           className={`card-wrapper ${
//             index % 2 !== 0 ? "align-right" : "align-left"
//           }`}
//           key={card._id || index}
//         >
//           <div className="custom-card">
//             <div className="card-left">
//               <h2 className="card-title">{card.title || "Untitled"}</h2>
//               <div className="card-divider" />
//               <p className="card-description">
//                 {card.description || "No description available."}
//               </p>
//               <button className="card-button">Explore More</button>
//             </div>
//             <div className="card-right">
//               <img loading="lazy"
//                 src={
//                   card.masterImage ||
//                   "https://via.placeholder.com/300x200?text=No+Image"
//                 }
//                 alt={card.title}
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardColumn;

import React from "react";
import "./style.scss";
import img1 from "../../../../assets/aboutUs/services-1.jpg";
import img2 from "../../../../assets/aboutUs/services-2.jpg";
import img3 from "../../../../assets/aboutUs/service-3.jpg";
import img4 from "../../../../assets/aboutUs/service-4.jpg";
import img5 from "../../../../assets/aboutUs/service-3.jpg";

interface CardData {
  title: string;
  description: string;
  image: string;
}

const cards: CardData[] = [
  {
    title: "Financial Advisory",
    description:
      "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
    image: img1,
  },
  {
    title: "Insurance Services",
    description:
      "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
    image: img2,
  },
  {
    title: "Management Consultancy",
    description:
      "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
    image: img3,
  },
  {
    title: "Retirement Planning",
    description:
      "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
    image: img4,
  },
  {
    title: "Bussiness services",
    description:
      "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
    image: img3,
  },
];

const CardColumn: React.FC = () => {
  return (
    <div className="card-column">
      {cards.map((card, index) => (
        <div
          className={`card-wrapper ${
            index % 2 !== 0 ? "align-right" : "align-left"
          }`}
          key={index}
        >
          <div className="custom-card">
            <div className="card-left">
              <h2 className="card-title">{card.title}</h2>
              <div className="card-divider" />
              <p className="card-description">{card.description}</p>
              <button className="card-button">Explore More</button>
            </div>
            <div className="card-right">
              <img loading="lazy" src={card.image} alt={card.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardColumn;
