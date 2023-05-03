import Navbar from "../components/footer";
import Header from "../components/header";

const Password=()=>{
  const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    return(
        <div>
                <div class="container">
        <div class="row">
      <div class="col-1 mt-2"><a href="/setings"className="text-dark"><i class="fa-solid fa-arrow-left fa-2x"></i></a></div>
      <div class="col-2"><b style={{'font-size':'30px'}}>Пароль</b></div>
      <div class="col-12"><p>Пароль должен содержать не мнее шести символов, вклчая цифры, буквы, и специальные символы</p></div>
                <div class="col-12">Текущий пароль</div>
                <div class="col-12"><input class="form-control"></input></div>
                <div class="col-12">Новый пароль</div>
                <div class="col-12"><input class="form-control"></input></div>
                <div class="col-12">Введите новый пароль еще раз</div>
                <div class="col-12"><input class="form-control"></input></div>
                <h3 class="text-primary">Забыли пароль</h3>
        </div>

    </div>

   


   <Navbar/>
        </div>
        )
    }
    export default Password;