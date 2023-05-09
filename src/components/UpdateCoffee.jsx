import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const UpdatedCoffee = {
      _id,
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <Header></Header>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">
          Update Coffee: <span className="text-pink-700">{name}</span>
        </h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity row */}
          <div className="md:flex justify-center">
            <div className="form-control md:w-1/2 mr-4">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  defaultValue={name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  defaultValue={quantity}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier and test row */}
          <div className="md:flex justify-center">
            <div className="form-control md:w-1/2 mr-4">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier Name"
                  defaultValue={supplier}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Taste"
                  defaultValue={taste}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex justify-center">
            <div className="form-control md:w-1/2 mr-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  defaultValue={category}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  defaultValue={details}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo url row */}
          <div className="md:flex justify-center">
            <div className="form-control md:w-full mr-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  defaultValue={photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            className="btn btn-block mt-8"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateCoffee;
