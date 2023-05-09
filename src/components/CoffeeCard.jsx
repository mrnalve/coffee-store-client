import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  // handle delete operation
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`,{
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter(cof => cof._id !== id)
              setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl text-left">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center gap-3 w-full">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p className="my-2">Quantity: {quantity}</p>
          <p className="my-2">Supplier: {supplier}</p>
          <p className="my-2">Category: {category}</p>
          <p className="my-2">Details: {details}</p>
        </div>
        <div className="card-actions justify-center">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
