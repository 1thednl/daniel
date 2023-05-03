import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { stories } from "../api/api";
import Header from "../components/header";
const Stories = () => {
    const params = useParams();
    const id = params.id;
    const [story,setStory] = useState(null);
    const fetchStory = ()=>{
        const data = stories.filter(i => i.id == id);
        console.log('data', data);
        if(data.length > 0){
            setStory(data[0]);
        }else{
            setStory(null);
        }
    }
   const local = localStorage.getItem('token');
    if (local == null) {
        window.location.href = '/';
    }
    useEffect(()=>{
        fetchStory();
    },[])
    return (
        <div>
            {story != null ?   
            <div style={{ backgroundColor: "black" }} class="container">
                <div class="row">
               
                    <div className="col-12"><img className=" aaa" src={story.photo} height={20} width={"100%"}></img></div>
                    <div className="col-1">
                        <img className=" aaa" style={{ borderRadius: '50%', position: 'fixed' }} src={story.avatar} height={100} width={100}></img>
                    </div>
                    <div style={{marginLeft:"110px",marginTop:"50px",position: 'fixed' }} className="col-1"><p className="text-white">{story.username}</p></div>
                    <div className="col-12 aaa">
                        <img className="aaa" src={story.photo} height={560} width={'100%'}></img>
                    </div>
                    <div className="col-10"><input className="form-control" style={{ opacity: "0.3" }} /></div>
                    <div className="col-1"><i class="fa-solid fa-heart fa-2x text-danger"></i></div>
                    <div className="col-1"><i class="fa-solid fa-share fa-2x text-primary"></i></div>
                
               </div>
            </div>
            :<></>
}
        </div>

    )
}
export default Stories;