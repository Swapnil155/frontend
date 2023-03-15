import api from "./Api";

const getUserWhishList = async (_id) => {
  return await api.get(`/api/user/${_id}/wishlist`).then(
    (res) => {
      return res.data;
    },
    (error) => {
      console.log(error);
    }
  );
};

const checkBookmark = async (_id, userId) => {
  return await api.post(`/api/package/check/${_id}`, { userId: userId }).then(
    (res) => {
      return res;
    },
    (error) => {
      console.log(error);
    }
  );
};

// set Bookmark 
const newuserWishlist = async (_id, packageId) => {
  return api.post(`/api/user/${_id}/wishlist/${packageId}`, { packageId: packageId }).then(
    (res) => {
      console.log(res);
      return res;
    },
    (error) => {
      console.log(error);
    }
  );
};

//  add user Wishlist
const setBookmark = async (_id, userId) => {
  return api.post(`api/package/${_id}/Bookmark/${userId}`, { userId: userId }).then(
    (res) => {
      console.log(res);
      return res;
    },
    (error) => {
      console.log(error);
    }
  );
};

// remove bookmark
const removeBookmark = async (_id, userId) => {
  return api.delete(`api/package/${_id}/Bookmark/${userId}`).then((res)=>{
    console.log(res)
    return res
  },(error)=>{
    console.error(error)
  })
}

// remove to package in wishlist
const removeWishlistItem =  async(_id, packageId) => {
  return api.delete(`/api/user/${_id}/wishlist/${packageId}`).then(
    (res) => {
      console.log(res);
      return res;
    },
    (error) => {
      console.log(error);
    }
  );
}

const UserServices = {
  getUserWhishList,
  checkBookmark,
  newuserWishlist,
  setBookmark,
  removeBookmark,
  removeWishlistItem
};

export default UserServices;
