import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/reducers/userSlice";

export default function Home() {
  const { userList } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };
  return (
    <div className="container">
      <div className="  d-md-flex my-4 justify-content-start">
        <Link to="/create">
          <button type="button" className="btn btn-success ">
            + Create
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">What to do</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.todo}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </Link>

                  <button
                    className="btn btn-sm btn-danger my-2  my-md-0 ms-md-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
