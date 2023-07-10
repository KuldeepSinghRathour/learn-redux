import React from "react";
import "./Form1.css";

const Form1 = () => {
  return (
    <>
      <div className="container">
        <form action="">
          <div>
            <label htmlFor="username">Customer name</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="username">Mobile</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="username">Fullname</label>
            <input type="text" name="username" id="username" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form1;








// import React, { useState } from 'react';

// const servicesList = [
//   { id: 1, name: 'Service 1', price: 100 },
//   { id: 2, name: 'Service 2', price: 200 },
//   { id: 3, name: 'Service 3', price: 150 },
// ];

// const Form1 = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [country, setCountry] = useState('');
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');
//   const [paymentTerm, setPaymentTerm] = useState('');
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [discount, setDiscount] = useState(0);
//   const [tax, setTax] = useState(0);

//   const handleServiceChange = (e) => {
//     const { value } = e.target;
//     const service = servicesList.find((s) => s.id === parseInt(value));
//     if (service) {
//       setSelectedServices([...selectedServices, service]);
//     }
//   };

//   const handleServiceRemove = (serviceId) => {
//     const updatedServices = selectedServices.filter(
//       (service) => service.id !== serviceId
//     );
//     setSelectedServices(updatedServices);
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     selectedServices.forEach((service) => {
//       total += service.price;
//     });
//     return total;
//   };

//   const calculateNetTotal = () => {
//     const total = calculateTotal();
//     const discountedAmount = total - (total * discount) / 100;
//     const netTotal = discountedAmount + (discountedAmount * tax) / 100;
//     return netTotal;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const netTotal = calculateNetTotal();

//     // Do something with the form data and netTotal
//     console.log('Form submitted!', {
//       name,
//       email,
//       mobile,
//       country,
//       city,
//       address,
//       paymentTerm,
//       selectedServices,
//       discount,
//       tax,
//       netTotal,
//     });

//     // Reset the form
//     setName('');
//     setEmail('');
//     setMobile('');
//     setCountry('');
//     setCity('');
//     setAddress('');
//     setPaymentTerm('');
//     setSelectedServices([]);
//     setDiscount(0);
//     setTax(0);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Mobile:
//         <input
//           type="tel"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Country:
//         <input
//           type="text"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         City:
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Address:
//         <textarea
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         ></textarea>
//       </label>
//       <br />
//       <label>
//         Payment Term:
//         <input
//           type="text"
//           value={paymentTerm}
//           onChange={(e) => setPaymentTerm(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Services List:
//         <select onChange={handleServiceChange}>
//           <option value="">Select a service</option>
//           {servicesList.map((service) => (
//             <option key={service.id} value={service.id}>
//               {service.name} - ${service.price}
//             </option>
//           ))}
//         </select>
//       </label>
//       <ul>
//         {selectedServices.map((service) => (
//           <li key={service.id}>
//             {service.name} - ${service.price}
//             <button
//               type="button"
//               onClick={() => handleServiceRemove(service.id)}
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <br />
//       <label>
//         Total Amount: ${calculateTotal()}
//       </label>
//       <br />
//       <label>
//         Discount (%):
//         <input
//           type="number"
//           value={discount}
//           onChange={(e) => setDiscount(parseInt(e.target.value))}
//         />
//       </label>
//       <br />
//       <label>
//         Tax (%):
//         <input
//           type="number"
//           value={tax}
//           onChange={(e) => setTax(parseInt(e.target.value))}
//         />
//       </label>
//       <br />
//       <label>
//         Net Total: ${calculateNetTotal()}
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form1;
