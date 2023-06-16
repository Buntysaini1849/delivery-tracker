import React,{useState,useEffect} from 'react'
import Sidebar from "./Sidebar"; 
import { addBanner } from '../state/actions/action';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { BANNER_API } from './apiUrls';
import axios from 'axios';

const Banner = () => {
const [form, setForm] = useState(false);
const [data,setData] = useState([]);
const [bannerformData, setBannerFormData] = useState([]);
const [formstyle, setFormStyle] = useState({ right: "-600px" });
const [code, setCode] = useState("");
const [image, setImage] = useState(null);
const [url, setUrl] = useState("");



const dispatch = useDispatch();

// const  bannerdatas = useSelector((state) => state.banner.banners);


const handleformdisplay = () => {
    setFormStyle({ right: "-600px" });
  };

    const handlebtn = () => {
        setForm(true);
       setFormStyle({ right: "0" });
      };


      const handledelete = (index) => {
        const updatedFormData = [...bannerformData];
        updatedFormData.splice(index, 1);
        setBannerFormData(updatedFormData);
        localStorage.setItem("bannerformData", JSON.stringify(updatedFormData));
      };

      // const handlebannersubmit = (e) => {
      //   e.preventDefault();
      //   // const banneritems = dispatch(
      //   //   addBanner({
      //   //     code,
      //   //     image,
      //   //     url,
     
      //   //   })
      //   // );
    
      //   // console.log(banneritems.payload);

        
      //   fetch('http://herbal.techiecy.com/banner/view/', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ code, image,url }),
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log('Banner data updated successfully:', data);
      //       // Perform any additional actions, such as updating state or displaying a success message
      //     })
      //     .catch((error) => {
      //       console.error('Error updating banner:', error);
      //       // Handle error, such as displaying an error message
      //     });

    

      //   setCode("");
      //   setImage(null);
      //   setUrl("");
    
      // };


      const handlebannersubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://herbal.techiecy.com/banner/view/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(code,image,url, ),
          });
    
          if (!response.ok) {
            throw new Error('Failed to submit form data');
          }else{
            console.log(response);
          }
    
          const responseData = await response.json();
          setData([...data, responseData]);
    
          // Clear form data
          setCode("");
          setUrl("");
          setImage(null);
        } catch (error) {
          console.error('Error:', error);
        }
      };


      useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = BANNER_API;
            const response = await fetch(apiUrl,{type:"view"});
    
            if (!response.ok) {
              throw new Error("Request failed with status " + response.status);
            }
    
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error("error");
          }
        };
    
        fetchData();
      }, []);
     
      
      
       

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };


  return (
    <div style={{display:"flex"}}>
        <Sidebar />
        
        <div className="container-fluid pro-topcont">
       
        <div
          className="container-fluid pro-leftsection"
          style={{ transition: "2s ease" }}
        >
          <div className="container-fluid mt-5">
            <div
              className="row d-flex shadow-sm"
              style={{
                background: "#fff",
                padding: "10px",
                width: "100%",
                justifyContent: "space-between",
                marginLeft:"0px",
              }}
            >
              <div className="col-md-6 col-sm-6">
                <div className="row d-flex">
                  <div className="col-md-6 col-sm-6">
                    <p
                      className="mt-3"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "rgb(70, 68, 68)",
                      }}
                    >
                      Total Banners :{" "}
                      <span style={{ fontWeight: "bold" }}> 5</span>
                    </p>
                  </div>

                </div>
              </div>
              <div className=" col-md-6 col-sm-6 text-end">
              <button
                      className="btn btn-sm btn-primary  buttons"
                      onClick={handlebtn}
                      style={{ marginTop: "9px" }}
                    >
                      Add Banner
                    </button>
              </div>
            </div>
          </div>


       
          <div
            className="container-fluid mt-3  table-responsive"
            style={{
              padding: "15px",
              // height: "75vh",
              overflowY: "scroll",
            }}
          >
            <div className="card main-card" style={{background: "#fff",height:"70vh",position:"relative"}}>
              <div className="card-header card-header-p" style={{ padding: "20px 30px",border:"0px",background:"#e4e4e4"}}>
                <h6 className="cb-font">Banners</h6>
              </div>
              <div className="card-body py-0 px-0">
                <table
                  className="table table-hover table-striped table-bordered table-responsive mt-0 "
                  style={{
                    width: "100%",
                    borderRadius:"0px",
                    color:"#888",
                    
                  }}
                >
                  <thead>
                    <tr>
                      <th scope="col">SN</th>
                      {/* <th scope="col">Image</th> */}
                      <th scope="col" style={{width:"17%"}}>Image</th>
                      <th scope="col">Code</th>
                      <th scope="col">Url</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.map((banner) => (
                      <tr key={banner.id}>
                        <td>{banner.id + 1}</td>
                        {/* <td>
                      <img src={items.image} alt={items.productname} style={{maxWidth:"100px"}} />
                    </td> */}
                    <td>
                    {banner.img && (
                         <img src={URL.createObjectURL(banner.img)} alt="Banner"  className='img-fluid' width={80} height={100}/>
                    )}
                    </td>
                   
                       
                        <td>{banner.id}</td>
                        <td>{banner.redirect}</td>
                       
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
                            style={{ height: "30px" }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            style={{ height: "30px" }}
                            onClick={() => handledelete(banner.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
         
        </div>
       

        <div className="container-fluid pro-rightsection mt-5" style={formstyle}>
          <form
          
            className="mt-5 p-4 shadow productform"
            style={{
              background: "#fff",
              borderRadius: "12px",
              display: form ? "block" : "none",
              transition: "2s ease !important",
              position: "relative",
            }}
           
          >
            <MdCancel className="close-icon" onClick={handleformdisplay} />
            <p
              className="d-flex"
              style={{
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "600",
                color: "#111",
              }}
            >
              ADD BANNER
            </p>

            <div className="row mt-2">
              <div className="col">
              <div className="form-group">
                  <label className="pro-label">Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bannercode"
                    name="bannercode"
                    placeholder="Enter code...."
                    style={{ fontSize: "13px" }}
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                  
                  />
                </div>
               
              </div>

              <div className="col">
                <div className="form-group">
                  <label className="pro-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>

        

            <div className="row mt-2">
     

              <div className="col-md-6 col-sm-6 mt-1">
              <div className='form-group'>
                <label className='pro-label'>Url</label>
                <input
                  type="url"
                  className="form-control"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                 
                />
              </div>
               
              </div>
            </div>

            <button
              type="submit"
              className="btn buttons mt-4 shadow-lg"
              style={{ width: "100%" }}
              onClick={handlebannersubmit}
    
            >
              Add
            </button>
          </form>
        </div>
      </div>
       
      
    </div>
  )
}

export default Banner
