import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Get, Post, Put } from "../../config/apimethods";

export default function AddProject() {
  const [model, setModel] = useState({});
  const baseApi = "https://jsonplaceholder.typicode.com/posts";
  const params = useParams();

  const getPostById = () => {
    Get('posts' , params.id)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
   Put('posts' , params.id, model)
      .then((res) => {
        console.log("Post Updated Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitPost = () => {
    model.userId = 11;
    Post('posts', model)
      .then((res) => {
        console.log("Post Added Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostById();
    }
  }, []);

  return (
    <>
      <div>
        <p>Add Project</p>
        <div className="p-2">
          <div>
            <input
              value={model.title}
              onChange={(e) => setModel({ ...model, title: e.target.value })}
              type="text"
              placeholder="Title"
              name=""
              id=""
            />
          </div>
          <div>
            <textarea
              value={model.body}
              onChange={(e) => setModel({ ...model, body: e.target.value })}
              placeholder="body"
            ></textarea>
          </div>
          <div>
            {params.id ? (
              <button onClick={updatePost}>Update</button>
            ) : (
              <button onClick={submitPost}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
