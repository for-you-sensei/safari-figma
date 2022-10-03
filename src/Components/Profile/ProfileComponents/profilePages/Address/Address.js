// import React, { useState, useEffect, useContext } from "react";
// import { toast } from "react-toastify";
// import "./Address.css";
// import { ProductsData } from "../../../../Data/Data";

// export function Address() {
//   const [modal, setModal] = useState(false);
//   const openModal = () => {
//     setUser({
//       id: "",
//       name: "",
//       surname: "",
//       email: "",
//       address: "",
//       state: "",
//       city: "",
//       phone: "",
//     });
//     setModal(!modal);
//   };

//   const { user, setUser, data, setData1 } = useContext(ProductsData);

//   const dataYukla = () => {
//     if (localStorage.getItem("address")) {
//       setData1(JSON.parse(localStorage.getItem("address")));
//     } else {
//       localStorage.setItem("address", JSON.stringify(data));
//     }
//   };

//   const inputChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const send = (e) => {
//     e.preventDefault();
//     if (
//       user.id === "" &&
//       user.name !== "" &&
//       user.surname !== "" &&
//       user.address !== "" &&
//       user.email !== "" &&
//       user.state !== "" &&
//       user.city !== "" &&
//       user.phone !== ""
//     ) {
//       localStorage.setItem(
//         "address",
//         JSON.stringify([...data, { ...user, id: new Date().getTime() }])
//       );
//       setUser({
//         id: "",
//         name: "",
//         surname: "",
//         email: "",
//         address: "",
//         state: "",
//         city: "",
//         phone: "",
//       });
//       dataYukla();
//     } else {
//       let edit = [...data.map((item) => (item.id === user.id ? user : item))];
//       localStorage.setItem("address", JSON.stringify(edit));
//       setUser({
//         id: "",
//         name: "",
//         surname: "",
//         email: "",
//         address: "",
//         state: "",
//         city: "",
//         phone: "",
//       });
//       dataYukla();
//     }
//     openModal();
//     {
//       user.id === ""
//         ? toast.info("Add Your Address")
//         : toast.info("Edit Your Address");
//     }
//   };

//   const deleteData = (i) => {
//     let del = data.filter((item, index) => index !== i);
//     localStorage.setItem("address", JSON.stringify(del));
//     toast.error("Data was deleted");
//     dataYukla();
//   };

//   const editData = (item) => {
//     openModal();
//     setUser({
//       ...user,
//       id: item.id,
//       name: item.name,
//       surname: item.surname,
//       email: item.email,
//       address: item.address,
//       state: item.state,
//       city: item.city,
//       phone: item.phone,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("click", (e) => {
//       if (e.target.className === "modal activ") {
//         setModal(false);
//       }
//     });
//   });

//   return (
//     <div id="address">
//       <p id="address-t-1">Address Book</p>
//       <div id="addresses">
//         {data.map((item, index) => (
//           <div key={index} id="card-address">
//             <div id="c-add-t-1">{item.name}</div>
//             <div id="c-add-t-1">{item.surname}</div>
//             <div id="c-add-t-1">{item.address}</div>
//             <div id="c-add-t-1">{item.email}</div>
//             <div id="c-add-t-2">{item.state}</div>
//             <div id="c-add-t-2">{item.city}</div>
//             <div id="c-add-t-2">{item.phone}</div>
//             <div id="address-btns">
//               <button
//                 onClick={() => {
//                   editData(item);
//                 }}
//               >
//                 edit
//               </button>
//               <button
//                 onClick={() => {
//                   deleteData(index);
//                 }}
//               >
//                 del
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={openModal} id="addr-btn">
//         ADD NEW ADDRESS
//       </button>
//       <div className={modal ? "modal activ" : "modal"}>
//         <div className="modal_body">
//           <p className="modal_name">
//             {user.id === "" ? "ADD NEW ADDRESS" : "EDIT STUDENT"}
//           </p>
//           <form onSubmit={send} className="form">
//             <label id="label">
//               <p>Name</p>
//               <input
//                 type="text"
//                 id="input"
//                 name="name"
//                 value={user.name}
//                 onChange={inputChange}
//                 placeholder=""
//               />
//             </label>
//             <label id="label">
//               <p>Surname</p>
//               <input
//                 type="text"
//                 id="input"
//                 name="surname"
//                 value={user.surname}
//                 onChange={inputChange}
//                 placeholder=""
//               />
//             </label>
//             <label id="label">
//               <p>Address</p>
//               <textarea
//                 cols="36"
//                 rows="5"
//                 id="input"
//                 name="address"
//                 value={user.address}
//                 onChange={inputChange}
//                 placeholder=""
//               />
//             </label>
//             <label id="label">
//               <p>Email</p>
//               <input
//                 type="email"
//                 id="input"
//                 name="email"
//                 value={user.email}
//                 onChange={inputChange}
//                 placeholder=""
//               />
//             </label>

//             <label id="label">
//               <p>State/Province</p>
//               <input
//                 type="text"
//                 id="input"
//                 name="state"
//                 value={user.state}
//                 onChange={inputChange}
//                 placeholder=""
//               />
//             </label>

//             <label id="label">
//               <p>City</p>
//               <input
//                 type="text"
//                 id="input"
//                 name="city"
//                 value={user.city}
//                 onChange={inputChange}
//                 placeholder=""
//               />
//             </label>

//             <label id="label">
//               <p>Phone</p>
//               <input
//                 type="tel"
//                 id="input"
//                 value={user.phone}
//                 onChange={inputChange}
//                 name="phone"
//                 placeholder=""
//               />
//             </label>

//             <button id="addr-f-btn"> {user.id === "" ? "ADD" : "EDIT"}</button>
//           </form>
//           <div
//             className="close btn"
//             onClick={openModal}
//             style={{ cursor: "pointer" }}
//           >
//             X
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useContext, useEffect } from "react";
import "./Address.css";
// import { DataContext } from "./AddresContext";
import { ProductsData } from "../../../../Data/Data";

export function Address() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setUser({
      id: "",
      email: "",
      name: "",
      surname: "",
      address: "",
      state: "",
      city: "",
      phone: "",
    });
    setModal(!modal);
  };

  const inputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { data1, setData1, dataYukla, user, setUser } =
    useContext(ProductsData);
  const send = (e) => {
    e.preventDefault();
    if (
      user.id === "" &&
      user.email !== "" &&
      user.name !== "" &&
      user.surname !== "" &&
      user.address !== "" &&
      user.state !== "" &&
      user.city !== "" &&
      user.phone !== ""
    ) {
      setData1([...data1, { ...user, id: new Date().getTime() }]);
      localStorage.setItem(
        "data",
        JSON.stringify([...data1, { ...user, id: new Date().getTime() }])
      );
      setUser({
        id: "",
        email: "",
        name: "",
        surname: "",
        address: "",
        state: "",
        city: "",
        phone: "",
      });
      dataYukla();
    } else {
      let edit = [...data1.map((item) => (item.id === user.id ? user : item))];
      localStorage.setItem("data", JSON.stringify(edit));
      setUser({
        id: "",
        email: "",
        name: "",
        surname: "",
        address: "",
        state: "",
        city: "",
        phone: "",
      });
      dataYukla();
    }

    openModal();
  };
  const deleteData = (i) => {
    let del = data1.filter((item, index) => index !== i);
    localStorage.setItem("data", JSON.stringify(del));
    dataYukla();
  };
  const editData = (item) => {
    openModal();
    setUser({
      ...user,
      id: item.id,
      email: item.email,
      name: item.name,
      surname: item.surname,
      address: item.address,
      state: item.state,
      city: item.city,
      phone: item.phone,
    });
  };

  // WINDOW TOUCH FOR CLOSE HERE
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className === "modal activ") {
        setModal(false);
      }
    });
  });

  return (
    <div id="address">
      <p id="address-t-1">Address Book</p>
      <div id="addresses">
        {data1.map((item, index) => (
          <div key={index} id="card-address">
            <div id="c-add-t-1">{item.email}</div>
            <div id="c-add-t-2">{item.name}</div>
            <div id="c-add-t-2">{item.surname}</div>
            <div id="c-add-t-2">{item.state}</div>
            <div id="c-add-t-2">{item.address}</div>
            <div id="c-add-t-2">{item.city}</div>
            <div id="c-add-t-2">{item.phone}</div>
            <div id="address-btns">
              <button onClick={() => editData(item)}>edit</button>
              <button onClick={() => deleteData(index)}>del</button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={openModal} id="addr-btn">
        ADD NEW ADDRESS
      </button>

      <div className={modal ? "modal activ" : "modal"}>
        <div className={modal ? "modal_body activ" : "modal_body"}>
          <p className="modal_name">
            {user.id === "" ? "ADD NEW ADDRESS" : "EDIT STUDENT"}
          </p>
          <form onSubmit={send} className="form">
            <label id="label">
              <p>email</p>
              <input
                type="email"
                id="input"
                name="email"
                value={user.email}
                onChange={inputChange}
                placeholder=""
              />
            </label>

            <label id="label">
              <p>Name</p>
              <input
                type="text"
                id="input"
                name="name"
                value={user.name}
                onChange={inputChange}
                placeholder=""
              />
            </label>

            <label id="label">
              <p>Surname</p>
              <input
                type="text"
                id="input"
                name="surname"
                value={user.surname}
                onChange={inputChange}
                placeholder=""
              />
            </label>

            <label id="label">
              <p>Address</p>
              <textarea
                cols={37}
                rows={6}
                id="input"
                name="address"
                value={user.address}
                onChange={inputChange}
                placeholder=""
              />
            </label>

            <label id="label">
              <p>State/Province</p>
              <input
                type="text"
                id="input"
                name="state"
                value={user.state}
                onChange={inputChange}
                placeholder=""
              />
            </label>

            <label id="label">
              <p>City</p>
              <input
                type="text"
                id="input"
                name="city"
                value={user.city}
                onChange={inputChange}
                placeholder=""
              />
            </label>

            <label id="label">
              <p>Phone number</p>
              <input
                type="tel"
                id="input"
                value={user.phone}
                onChange={inputChange}
                name="phone"
                placeholder=""
              />
            </label>

            <button id="addr-f-btn">ADD</button>
          </form>
          <div className="close btn" onClick={openModal}>
            X
          </div>
        </div>
      </div>
    </div>
  );
}
