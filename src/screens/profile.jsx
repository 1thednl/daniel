import { post, users } from "../api/api";
import Navbar from "../components/footer";
import Header from "../components/header";


const Profile=()=>{
    const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    const user = users.filter(i => i.id == local);
    const posts = post.filter(i => i.user_id == local);
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
    <div class="col-11 text-center"><a href="/redactprofile"><button class="btn btn-secondary">Редактировать профиль</button></a></div><diV class="col-1 mt-2"><button class="btn btn-secondary"><i class="fa-solid fa-user-plus"></i></button></diV>
   <div class="col-1">
    <img style={{'border-radius':'70%'}} src="https://pbs.twimg.com/media/EJpdV-ZXkAAwvR4?format=jpg&name=900x900" width="100%"></img>
				
				<p>Актуальн...</p>
   </div>
   <div class="col-1 ml-5">
    <img style={{'border-radius':'70%'}} src="https://i.pinimg.com/originals/5e/61/11/5e6111515aacf00005d17007f91b8684.jpg" width="105%"></img>
				
				<p>Актуальн...</p>
   </div>
   <div class="col-10"></div>
   <div class="col-5"></div>
   <div class="col-1"><i class="fa-solid fa-table-cells fa-2x"></i></div>
   <div class="col-1"><i class="fa-solid fa-id-card-clip fa-2x"></i></div>
   <div class="col-5"></div>
    </div>
    {posts.map((item)=>
    <div class="col-4 mt-2"><a href="/profile2"><img src={item.photo} width="100%"></img></a></div>
    )}
     {posts.map((item)=>
    <div class="col-4 text-center"><a href="/profile2"><img src={item.photo} width="100%"></img></a></div>
    )}
    </div>
    
   

        <Navbar/>
    

        </div>
    )
}
export default Profile