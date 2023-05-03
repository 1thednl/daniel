import { post, stories } from "../api/api";
import Navbar from "../components/footer";
import Header from "../components/header";

const Lenta = () => {
	const local = localStorage.getItem('token');
	if (local == null) {
		window.location.href = '/';
	}
	const products = post;
	return (
		<div>
			<div class="container">
				<div class="row">
					<div class="col-2">
						<div class="dropdown">
							<a class="btn  dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
								<img src="https://sallykidd.co.uk/wp-content/uploads/2022/02/2560px-Instagram_logo.svg_.png" width="100%"></img>
							</a>

							<div class="dropdown-menu">
								<a class="dropdown-item" href="#">Подписки<i class="fa-solid fa-users text-dark"></i></a>
								<a class="dropdown-item" href="#">Избранное <i class="fa-regular fa-star text-darkd "></i></a>
							</div>
						</div>
					</div>
					<div class="col-8"></div>
					<div class="col-2">
					<a href="/direct" className="text-dark"><i class="fa-solid fa-comment fa-2x mt-3"></i></a>
					</div>
					<div class="col-2"></div>
					{stories.map((item) =>
					<div class="col-1">
						<a href={"/stories/"+item.id} className="text-dark"><img style={{ borderRadius: '50%' }} src={item.avatar} width="100%"></img></a>
						<p>{item.username}</p>
					</div>
					)}
					{products.map((item) =>
						<div class="col-12 text-center">
							<div class="row">
								<div class="col-1">
									<a href={"/publ/" + item.user_id}><img style={{ 'borderRadius': '50%' }} src={item.avatar} width="100%"></img></a>
								</div>
								<div class="col-1 mt-4"><a href={"/publ/" + item.user_id} className="text-dark">{item.username}</a></div>
								<div class="col-8"></div>
								<div class="col-1"><i class="fa-solid fa-ellipsis-vertical fa-2x"></i></div>
								<div class="col-1"></div>
								<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
									<div class="carousel-inner">
										<div class="carousel-item active">
											<a href={"/profile2/" + item.user_id}><img src={item.photo} width="100%" class="d-block w-100" alt="..."></img></a>
										</div>
										<div class="carousel-item">
											<a href={"/profile2/" + item.user_id}><img src={item.photo} width="100%" class="d-block w-100" alt="..."></img></a>
										</div>
										<div class="carousel-item">
											<a href={"/profile2/" + item.user_id}><img src={item.photo} width="100%" class="d-block w-100" alt="..."></img></a>
										</div>
									</div>
									<button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
										<span class="carousel-control-prev-icon" aria-hidden="true"></span>
										<span class="sr-only">Previous</span>
									</button>
									<button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
										<span class="carousel-control-next-icon" aria-hidden="true"></span>
										<span class="sr-only">Next</span>
									</button>
								</div>
								<div class="col-1"><i class="fa-regular fa-heart fa-3x"></i></div>
								<div class="col-1"><i class="fa-regular fa-comment fa-3x"></i></div>
								<div class="col-1"><i class="fa-solid fa-share fa-3x"></i></div>
								<div class="col-8"></div>
								<div class="col-1"><i class="fa-regular fa-bookmark fa-3x"></i></div>
								<div class="col-1 mt-2"><h1>Нравится:456</h1></div>
								<div class="col-11"></div>
								<div className="col-12 text-start"><h5>{item.text}</h5></div>
								<div class="col-3 text-secondary">смотреть все коментарии (5)</div>
								<div class="col-9"></div>
								<div class="col-1 mr-5">
									<img style={{ borderRadius: '50%' }} src={item.avatar2} width="100%"></img>
								</div>
								<div class="col-12"></div>
								<div class="col-2 text-secondary mt-2">7 часов назад</div>
							</div>
						</div>
					)}
				</div>

			</div>
			<Navbar />

		</div>
	)
}
export default Lenta;