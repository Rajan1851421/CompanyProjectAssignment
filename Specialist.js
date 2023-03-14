import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import Spinner from './component/Spinner'



function Specialist() {
    const [drName, setDrName] = useState([])
    const [rating, setRating] = useState([])
    const [loader,setLoader] =useState(false)

    useEffect(() => {
        setLoader(true)
        axios.get('https://admin.tomedes.com/api/v1/get-reviews')
            .then(response => {
                setLoader(false)
                console.log(response.data.data);
                console.log("Chechk::", response.data.data.rating);
                setDrName(response.data.data)
                setRating(response.data.data)
                
            })
            .catch(error => {
                console.error(error);
            });

    }, []);



    return (
        <>
            <main>
              
                <div className="row   d-flex justify-content-center">                  
                    
                    <div className="col-md-12 container ">
                        <h1 className='text-center ' style={{ color: 'darkblue' }}>We Have The Best Specialist</h1>
                        <h5 className='text-center text-primary'>We have a wide experience in experience design and strategy,<br /> with locally-rooted knowledge.</h5>
                    </div>

                    <div className="row container">
                        {                           
                           loader ? <Spinner/> :
                           drName.map((item) => {
                                return (
                                    
                                      <div className="col-md-4 my-3">
                                        <div class="card" style={{ backgroundColor: '#e0fcae' }} >
                                            <h6 class="card-title text-center my-3 border"><b>Company:</b>{item.Company}</h6>
                                            <div class="card-body">
                                                <p class="card-title" ><b>ID:</b>{item.ID}</p>
                                                <p className='card-text'><b>Name:</b> {item.Name}</p>
                                                <p className='card-text'><b>Email:</b> {item.Email}</p>
                                                <p className='card-text'><b>Language: </b>{item.Language}</p>
                                                <p className='card-text'><b>Status: </b>{item.Status}</p>
                                                <p className='card-text'><b>Date:</b> {item.datecreated}</p>
                                                
                                                <p className='card-text'><b>Rating:</b>
                                                {
                                                    rating.map(()=>{
                                                        return(
                                                           <span>{<AiFillStar style={{color:'#EAF503 '}} /> }</span> 
                                                        )
                                                    })
                                                }
                                                </p>
                                                <p> <b>Reviews:</b>  <br />{item.Reviews.substring(0, 50) + "..." }</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>


        </>
    )
}

export default Specialist