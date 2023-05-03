import { direct, post, stories } from "../api/api";
import Navbar from "../components/footer";
import Header from "../components/header";

const Direct = () => {
	const local = localStorage.getItem('token');
	if (local == null) {
		window.location.href = '/';
	}
	const products = post;
	return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-3"><a href="/lenta" className="text-dark"><h2>_thednl_</h2></a></div>
                    <div class="col-7"></div>
                    <div class="col-2"><i class="fa-solid fa-video fa-2x"></i>   <i class="fa-solid fa-plus fa-2x"></i></div>
                    <div class="col-12"><input class="form-control"></input></div>
                    <div class="col-2"><h1>Сообщения</h1></div>
                    <div class="col-8"></div>
                    <div class="col-2 mt-3"><h3 style={{ color: '#65a3eb;' }}>Запросы:100</h3></div>
                    {direct.map((item) =>
                    <div className="row">
                    <div class="col-1 mt-3"><img style={{ borderRadius: '50%' }} src={item.avatar} width="50"></img></div>
                    <div class="col-11 mt-3">
                        <div class="row">
                            <a href="/chat" className="text-dark"><div class="col-12"><b>{item.username}</b></div></a>
                            <div class="col-12">Привет, ты где ?</div>
                        </div>
                    </div>
                    </div>
                    )}



                </div>

            </div>
            

        </div>

    )
}
export default Direct;