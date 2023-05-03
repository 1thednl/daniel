import Navbar from "../components/footer";
import Header from "../components/header";

const Redactprofile=()=>{
    const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    return(
        <div>
                <div class="container">
        <div class="row">
           <div class="col-1 mt-3"><a href="/profile"><i class="fa-solid fa-xmark fa-2x"></i></a></div>
           <div class="col-2"></div>
           <div class="col-8"><h1>Редактировать профиль</h1></div>
           <div class="col-1 mt-3"><a href="/profile"><i class="fa-solid fa-check text-primary fa-2x"></i></a></div>
           <div class="col-5"></div>
           <div class="col-2"><img style={{'border-radius':'50%'}} src="https://i.pinimg.com/originals/fa/12/00/fa12000ccb54b7a65210216e9f074941.jpg" width="100%"></img></div>
           <div class="col-5"></div>
           <div class="col-4"></div>
           <div class="col-4"><h3 class="text-primary">Изменить фото профиля</h3></div>
           <div class="col-4"></div>
           <div class="col-12">
            <div class="row">
                <div class="col-1">Имя</div><div class="col-11"></div>
                <div class="col-12"><input class="form-control"></input></div>
                <div class="col-2">Имя пользователя</div><div class="col-10"></div>
                <div class="col-12"><input class="form-control"></input></div>
                <div class="col-1">Биография</div><div class="col-11"></div>
                <div class="col-12"><input class="form-control"></input></div>
                <h3>Добавить ссылку</h3>
                <div class="col-12 text-primary"><b>Перекючиться на профессиональный аккаунт</b></div>
                <div class="col-12 text-primary mt-2"><b>Редактировать аватар</b></div>
                <div class="col-12 text-primary mt-2"><b>Настройки личной информации</b></div>
            </div>
           </div>


                
        </div>

    </div>

   


<Navbar/>
        </div>
)
}
export default Redactprofile;