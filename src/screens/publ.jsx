import { useParams } from "react-router-dom";
import { post, users } from "../api/api";
import Navbar from "../components/footer";
import Header from "../components/header";

const Publ=()=>{
    const param = useParams();
    const userid = param.id;
    const user = users.filter(i => i.id == userid);
    const local = localStorage.getItem('token');
    const posts = post.filter(i => i.user_id == userid);
	if(local == null){
		window.location.href = '/';
	}
    return(
        <div>
      <div class="container">
       <div class="row">
        <div class="col-3"><h2>{user[0].username}</h2></div>
        <div class="col-6"></div>
        <div class="col-3"><i class="fa-regular fa-square-plus fa-2x"></i>   <a href="/setings" className="text-dark"><i class="fa-solid fa-grip-lines fa-2x"></i></a></div>
    </div>
    <div class="row">
    <div class="col-3"><img style={{'border-radius':'60%'}} src={user[0].avatar} width="50%"></img></div>   
	<div class="col-3"><h4>1</h4><h4>Публикации</h4></div>
    <div class="col-3"><h4>227</h4><h4>Подписч...</h4></div>
    <div class="col-3"><h4>152</h4><h4>Подписки</h4></div>
    <div class="col-12"><h5>if it makes you happy, it is not a waste</h5></div>
    <div className="col-3"></div><div class="col-4 text-center"><button class="btn btn-primary">Подписаться</button></div><div className="col-4 "><button class="btn btn-secondary">Сообщение</button></div><diV class="col-1 mt-2"><button class="btn btn-secondary"><i class="fa-solid fa-user-plus"></i></button></diV>
   <div class="col-1">
    <img style={{'border-radius':'70%'}} src="https://i.pinimg.com/564x/98/d7/96/98d7961a352313a0b2bc8cc64adf8d40.jpg" width="100%"></img>
				
				<p>Актуальн...</p>
   </div>
   <div class="col-1 ml-5">
    <img style={{'border-radius':'70%'}} src="https://i.pinimg.com/564x/ac/da/c0/acdac02c455f6cfe04c5ebd837cf8091.jpg" width="105%"></img>
				
				<p>Актуальн...</p>
   </div>
   <div class="col-10"></div>
   <div class="col-5"></div>
   <div class="col-1"><i class="fa-solid fa-table-cells fa-2x"></i></div>
   <div class="col-1"><i class="fa-solid fa-id-card-clip fa-2x"></i></div>
   <div class="col-5"></div>
    </div>
    {posts.map((item)=>
    <div class="col-4 mt-2">
        <img src={item.photo} width="100%"></img>
    </div>
    )}
    </div>
    <Navbar/>
    
        </div>
    )
}
export default Publ;