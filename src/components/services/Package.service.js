import api from "./Api";

const getAllPackages = async () => {
  return await api.get("api/package/Tour");
};

const getPackageById = async (_id) => {
    return await api.get(`api/package/${_id}`).then((res)=>{
        return res.data
    },(error)=>{
        console.log(error)
    })
}

const PackageService = {
  getAllPackages,
  getPackageById,
};

export default PackageService;
