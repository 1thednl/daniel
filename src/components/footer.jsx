import { post, users } from "../api/api";

const Navbar=()=>{
	const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    const user = users.filter(i => i.id == local);
    const posts = post.filter(i => i.user_id == local);
    return(
        <div style={{'background-color':'white'}} class="col-12 fixed-bottom">
		<div class="row">
			<div class="col-2"></div>
		<div class="col-2"><a href="/lenta" className="text-dark"><i class="fa-solid fa-house fa-2x"></i></a></div>
		<div class="col-2"><a href="/poisk" className="text-dark"><i class="fa-solid fa-magnifying-glass fa-2x"></i></a></div>
		<div class="col-2"><i class="fa-regular fa-square-plus fa-2x"></i></div>
		<div class="col-2">< a href="/like" className="text-dark"><i class="fa-regular fa-heart fa-2x"></i></a></div>
		<div class="col-2"><a href="/profile" className="text-dark"><img style={{'border-radius':'50%'}} src={user[0].avatar} width="30"></img></a></div>
	</div>
	</div>
    );
}
export default Navbar;