import { useState } from "react";
import { users } from "../api/api";
import Header from "../components/header";

const Main=()=> {
	const local = localStorage.getItem('token');
	if(local != null){
		window.location.href = '/lenta';
	}
	const [login,setLogin] = useState();
	const [password, setPassword] = useState();
	const Login=()=>{
		const user = users.filter(i => i.username == login && i.password == password);
		if(user.length > 0){
			window.location.href = "/lenta";
			localStorage.setItem('token',user[0].id);
		}else{
			alert('Error!')
		}
	}
    return (
        <div>
            <div class="container">
		<div class="row">
			<div class="col-2"></div>
			<div class="col-8">
				<div class="row">
					<div class="col-5 mt-3">
						<img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" width="135%" height="600px"></img>
					</div>
					<div class="col-1"></div>
					<div class="col-6 mt-3" style={{'background-color':'#f0f0f0', 'border-radius': '10px'}}>
						<div class="row">
							<div class="col-12 text-center mt-3"><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img></div>
							<div class="col-12 text-center mt-5"><input type="text" class="form-control" onChange={(e)=>{setLogin(e.target.value)}} name="" placeholder="Phone number, username, or email"></input></div>
							<div class="col-12 text-center mt-3"><input type="text" class="form-control" onChange={(e)=>{setPassword(e.target.value)}} name="" placeholder="Pasword"></input></div>
							<div class="col-12 text-center mt-3"><button style={{'opacity':'0.5'}} class="btn btn-primary col-12" onClick={Login}>Log In</button></div>
							<div class="col-4 mt-4"><img src="https://www.freepnglogos.com/uploads/line-png/long-lines-straight-line-transparent-7.png" width="100%"></img></div>
							<div class="col-4 text-center mt-4	">OR</div>
							<div class="col-4 mt-4"><img src="https://www.freepnglogos.com/uploads/line-png/long-lines-straight-line-transparent-7.png" width="100%"></img></div>
							<div class="col-12 text-center"><i class="fa-brands fa-square-facebook text-primary fa-1x"></i><b class="text-primary">Войти через Facebook</b></div>
							<div class="col-12 text-center
							">Забыли пароль ?</div>
							<div class="col-12"></div>
							<div class="col-12"></div>
							<div class="col-12 text-center">У вас ещё нет аккаунта? <b class="text-primary">Зарегистрироваться</b></div>
							<div class="col-12 text-center mt-5">Установите приложение</div>
							<div class="col-6 mt-2"><img src="https://www.bmwclub.ru/images/available_on_apple.png" width="100%" alt=""></img></div>
							<div class="col-6 "><img src="https://slovesnik.org/images/gp.png" width="100%"></img></div>
						</div> 
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}
export default Main;