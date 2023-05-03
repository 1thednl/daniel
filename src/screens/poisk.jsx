import Navbar from "../components/footer";
import Header from "../components/header";

const Poisk=()=>{
    const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    return(
        <div>
             <div class="container">
        <div class="row">
            <div st class="col-12">
            <input  class="form-control"></input>
            </div>
            <div class="col-4"><img src="https://i.pinimg.com/originals/fc/a9/47/fca947700b506c676687a3c6a8b848e0.jpg" height="350"  width="100%"></img></div>
            <div class="col-4 mt-2"><img src="https://library.manga-sempai.ru/Berserk/Chapter301/10.jpg" height="350" width="100%"></img></div>
            <div class="col-4 mt-2"><img src="https://yt3.ggpht.com/ytc/AKedOLRwRE20eKZ6IjjCsnSJoiyu9eMFtyc8BT-5rzQtyw=s900-c-k-c0x00ffffff-no-rj" width="100%"></img></div>
            <div class="col-4 mt-2"><img src="https://i.pinimg.com/originals/48/86/9a/48869a449dcc507346b9943449540aa4.jpg" width="100%"></img></div>
            <div class="col-4"><img src="https://i.pinimg.com/originals/23/18/fc/2318fcc4ccdf95387676f5b94d82c992.jpg" width="100%"></img></div>
            <div class="col-4"><img src="https://i.pinimg.com/originals/27/56/c4/2756c40840a77498c939e6980eaf12c5.png" width="100%"></img></div>
             <div class="col-4"><img src="https://i.pinimg.com/originals/27/56/c4/2756c40840a77498c939e6980eaf12c5.png" width="100%"></img></div>             <div class="col-4"><img src="https://i.pinimg.com/originals/27/56/c4/2756c40840a77498c939e6980eaf12c5.png" width="100%"></img></div>
            <div class="col-4"><img src="https://i.pinimg.com/originals/27/56/c4/2756c40840a77498c939e6980eaf12c5.png" width="100%"></img></div>
            <div class="col-4"><img src="https://i.pinimg.com/originals/27/56/c4/2756c40840a77498c939e6980eaf12c5.png" width="100%"></img></div>
            <div class="col-4"><img src="https://i.pinimg.com/originals/27/56/c4/2756c40840a77498c939e6980eaf12c5.png" width="100%"></img></div>
            <div class="col-4"><img src="https://i.pinimg.com/originals/27/56/c4/2756c40840a77498c939e6980eaf12c5.png" width="100%"></img></div>
            
        </div>
    </div>
   <Navbar/>
        </div>
    )
}
export default Poisk;