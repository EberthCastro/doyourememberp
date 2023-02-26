import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm} from "react-hook-form";

const endpoint = "http://127.0.0.1:8000/api/remembers";

function Create() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const handleSubmitBook = async (formData) => {
          const { data } = await axios.post(endpoint,formData);
          console.log("response form ",data);
       };
    
      const customSubmit = (data) => {
      
        console.log("data antes de ser transformada",data)
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('image', data.image[0]);
        // formData.append('category', data.category);
        // formData.append('price', data.price);
        console.log('data',data)
        handleSubmitBook(formData);
        
        console.log("dataForm",formData);
        swal("Submitted form!", "Successful validation", "success");
      };
    
      return (
        <>
          <div className="form-book" id="form">
            <div className="container-formbook">
              <form onSubmit={handleSubmit(customSubmit)} className="form-react">
                <h2>Advertise your book</h2>
                <div className="form-control">
                  <label>Title</label>
                  <input
                    className="place"
                    placeholder="Enter name"
                    type="text"
                    {...register("title", {
                      required: true,
                      maxLength: 200,
                    })}
                  />
                  {errors.title?.type === "required" && (
                    <small className="fail">The field cannot be empty</small>
                  )}
                  {errors.title?.type === "maxLength" && (
                    <small className="fail">Maximum characters are eight</small>
                  )}
                </div>
    
                <div className="form-control">
                  <label>Description</label>
                  <input
                    className="place message"
                    placeholder="Enter your message"
                    type="text"
                    {...register("description", {
                      required: true,
                      minLength: 5,
                      maxLength: 1000,
                    })}
                  />
                  {errors.description?.type === "required" && (
                    <small className="fail">The field cannot be empty</small>
                  )}
                  {errors.description?.type === "minLength" && (
                    <small className="fail">The minimum characters must be 5</small>
                  )}
                  {errors.descri?.type === "maxLength" && (
                    <small className="fail">
                      The maximum characters should be 200
                    </small>
                  )}
                </div>
    
                {/* <div className="form-control">
                  <label>Category</label>
                  <input
                    className="place"
                    placeholder="Enter name"
                    type="text"
                    {...register("category", {
                      required: true,
                      maxLength: 200,
                    })}
                  />
                  {errors.category?.type === "required" && (
                    <small className="fail">The field cannot be empty</small>
                  )}
                  {errors.category?.type === "maxLength" && (
                    <small className="fail">Maximum characters are eight</small>
                  )}
                </div> */}
    
                {/* <div className="form-control">
                  <label>Price</label>
                  <input
                    className="place"
                    placeholder="Enter price"
                    type="number"
                    min='0'
                    {...register("price", {
                      required: true,
                    })}
                  />
                  {errors.price?.type === "required" && (
                    <small className="fail">The field cannot be empty</small>
                  )}
                  {errors.price?.type === "maxLength" && (
                    <small className="fail">Maximum characters are eight</small>
                  )}
                </div> */}
    
                <div className="form-control">
                  <label>Image</label>
                  <input
                    className="place"
                    placeholder="Enter price"
                    type="file"
                    {...register("image", {
                      required: true,
                    })}
                  />
                  {errors.image?.type === "required" && (
                    <small className="fail">The field cannot be empty</small>
                  )}
                  {errors.image?.type === "maxLength" && (
                    <small className="fail">Maximum characters are eight</small>
                  )}
                </div>
    
                <div className="form">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </>
      );
}

export default Create
