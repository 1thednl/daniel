import Navbar from "../components/footer";
import Header from "../components/header";
const Setings=()=>{
    const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    
    const Logout=()=>{
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return(
        <div>
            <div class="container">
        <div class="row">
         <div class="col-1"><a href="/profile"className="text-dark"><i class="fa-solid fa-arrow-left fa-2x"></i></a></div><div class="col-3 mt-2"><b style={{'font-size':'30px'}} >Настройки</b></div><div class="col-8"></div>
        <div class="col-12"><input class="form-control"></input></div>
         <div class="col-1"><i class="fa-solid fa-user-plus fa-2x mt-2"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Подписки и приглашения</b></div>
         <div class="col-1"><i class="fa-regular fa-bell fa-2x mt-2"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Уведомления</b></div>
         <div class="col-1"><i class="fa-solid fa-lock mt-2 fa-2x"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Конфидециальность</b></div>
         <div class="col-1"><i class="fa-solid fa-users mt-2 fa-2x"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Контроль</b></div>
         <div class="col-1"><i class="fa-solid fa-shield mt-2 fa-2x"></i></div><div class="col-11"><a href="/password"className="text-dark"><b style={{'font-size':'30px'}}>Безопасонсть</b></a></div>
         <div class="col-1"><i class="fa-solid fa-rectangle-ad mt-2 fa-2x"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Реклама</b></div>
          <div class="col-1"><i class="fa-regular fa-circle-user mt-2 fa-2x"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Аккаунт</b></div>
          <div class="col-1"><i class="fa-solid fa-palette mt-2 fa-2x"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Тема</b></div>
          <div class="col-1"><i class="fa-brands fa-meta mt-2 fa-2x"></i></div><div class="col-11"><b style={{'font-size':'30px'}}>Meta</b></div>
          <h3 class="text-primary">Центр аккаунтов</h3>
          <div class="col-1"><a href="#" className="text-dark" onClick={Logout}><h4>Выйти</h4></a></div>
          <p>Управляйте кросс-сервисными функциями в приложениях Instagram, Facebook и Messenger, например входом в аккаунт и размещением историй и публикаций.</p>
          

                
        </div>

    </div>

   


   <Navbar/>
        </div>
    )
}
export default Setings;