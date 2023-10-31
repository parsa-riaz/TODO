import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/reducers/userSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const { userList } = useSelector((state) => state.user);
  let currentUser = userList.filter((user) => user.id == id);
  console.log(currentUser);
  const [user, setUser] = useState({
    name: currentUser[0].name,
    email: currentUser[0].email,
    todo: currentUser[0].todo,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: user.name,
        email: user.email,
        todo: user.todo,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-start align-items-md-center">
      <div className=" w-md-50 border bg-success text-white p-5 ">
        <h3>Edit Details</h3>
        <form className="px-4  text-start ">
          <div className="mb-3">
            <label forhtml="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forhtml="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forhtml="action" className="form-label">
              To Do
            </label>
            <input
              type="text"
              className="form-control"
              id="action"
              onChange={handleChange}
              name="todo"
              value={user.todo}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary "
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
