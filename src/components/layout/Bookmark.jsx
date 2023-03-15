import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/Auth.service";
import UserServices from "../services/user.service";

const Bookmark = (props) => {
  const [isExists, setIsExists] = useState(false);

  useEffect(() => {
    const data = props.data;
    const userExist = AuthService.getCurrentUser();
    if (userExist) {
      const user = AuthService.getCurrentUser().userData._id;
      // console.log(user, data._id);
      // UserServices.checkBookmark(data._id, user).then((res) => {
      //   setIsExists(res.data);
      //   console.log(res);
      // });
      const userlist = data.Bookmarks;
      const result = userlist.includes(user);
      setIsExists(result);
      return;
    }
  }, [props.data]);

  const navigate = useNavigate();
  const onClickHandler = async () => {
    const data = props.data;
    const userExists = AuthService.getCurrentUser();
    const user = AuthService.getCurrentUser().userData._id;

    if (userExists) {
      // const user = AuthService.getCurrentUser().userData._id;
      // alert(`id : ${data._id} \n isExist : ${isExists}`);
      // await UserServices.getUserWhishList(user).then((res) => {
      //   console.log(res);
      // });

      if (isExists) {
        alert(`id : ${data._id} \n isExist : ${isExists}`);
        await UserServices.removeBookmark(data._id, user).then(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
        await UserServices.removeWishlistItem(user, data._id).then(
          (res) => {
            console.log(res);
            if (res.status === 200) {
              window.location.reload();
            }
          },
          (error) => {
            console.log(error);
          }
        );
        return;
      } else {
        alert(`id : ${data._id} \n isExist : ${isExists}`);
        await UserServices.setBookmark(data._id, user).then(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.error(error);
          }
        );
        await UserServices.newuserWishlist(user, data._id).then(
          (res) => {
            console.log(res);
            if (res.status === 200) {
              window.location.reload();
            }
          },
          (error) => {
            console.error(error);
          }
        );
      }

      return;
    } else {
      alert("first you have Sign In or Sign Up");
      return navigate("/signIn");
    }

    // console.log(props.data)
  };
  return (
    <div>
      <div
        className="card-fav-icon position-relative z-index-40"
        onClick={onClickHandler}
      >
        {isExists ? (
          <AiFillHeart className="fs-4 text-white" />
        ) : (
          <AiOutlineHeart className="fs-4 text-white" />
        )}
      </div>
    </div>
  );
};
export default Bookmark;
