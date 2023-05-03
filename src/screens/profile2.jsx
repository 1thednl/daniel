import { post, users } from "../api/api";
import Navbar from "../components/footer";
import Header from "../components/header";

const Profile2=()=>{
    const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    const posts = post.filter(i =>i.id == local);
    return(
        <div>
        <div class="container">
		<div class="row">
            <div class="col-1"><a href="profile" className="text-black"><i class="fa-solid fa-arrow-left fa-2x mt-3"></i></a></div><div class="col-3 mt-2"><b  style={{'font-size':'30px'}}>Публикации</b></div><div class="col-8"></div>
            {posts.map((item)=>
    <div class="col-1 mt-4"><img style={{'border-radius': '50%'}} src={item.avatar} width="50"></img></div>	
    )}
     {posts.map((item)=>
    <div class="col-1 mt-4"><b>{item.username}</b></div>
    )}
    <div class="col-9"></div>
    <div class="col-1"><i class="fa-solid fa-ellipsis-vertical fa-2x mt-4"></i></div>
    {posts.map((item)=>
    <div class="col-12">
        <img src={item.photo} width="100%"></img>
    </div>
      )}
    <div class="col-1"><i class="fa-regular fa-heart fa-3x"></i></div>
    <div class="col-1"><i class="fa-regular fa-comment fa-3x"></i></div>
    <div class="col-1"><i class="fa-solid fa-share fa-3x"></i></div>
    <div class="col-8"></div>
    <div class="col-1"><i class="fa-regular fa-bookmark fa-3x"></i></div>
    <div class="col-1 mt-2"><h1>Нравится:456</h1></div>
    <div class="col-11"></div>
    <div class="col-3 text-secondary">смотреть все коментарии (5)</div>
    <div class="col-9"></div>
    {posts.map((item)=>
    <div class="col-1 mt-4"><img style={{'border-radius': '50%'}} src={item.avatar} width="50"></img></div>	
    )}
  <div class="col-12"></div>
  <div class="col-2 text-secondary mt-2">7 часов назад</div>
    </div>
	</div>
   

        <Navbar/>
    

        </div>
    )
}
export default Profile2