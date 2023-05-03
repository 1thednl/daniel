import Header from "../components/header";

const Public=()=>{
    const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    return(
        <div>
            <div class="container">
		<div class="row">
            <div class="col-1"><i class="fa-solid fa-arrow-left fa-2x mt-3"></i></div><div class="col-3 mt-2"><b  style={{'font-size':'30px'}}>Публикации</b></div><div class="col-8"></div>
	<div class="col-1 mt-4"><img style={{'border-radius':'50%'}} src="https://sun9-61.userapi.com/s/v1/ig2/RRMBVVkYL403btpTNb4APHy4Jz3qniCYGhozjGJaIsNjpSZ45ZsGdRv5t9eAiRuOOT_fq_sGSA7sEGW2gvi1bDaH.jpg?size=200x200&quality=95&crop=0,0,735,735&ava=1" width="50"></img></div>	
	<div class="col-1 mt-4"><b>ya_sper</b></div>
    <div class="col-9"></div>
    <div class="col-1"><i class="fa-solid fa-ellipsis-vertical fa-2x mt-4"></i></div>
    <div class="col-12"><img src="https://pbs.twimg.com/media/FJt59OxXoAY7bU9.jpg" width="100%"></img></div>
    <div class="col-1"><i class="fa-regular fa-heart fa-3x"></i></div>
    <div class="col-1"><i class="fa-regular fa-comment fa-3x"></i></div>
    <div class="col-1"><i class="fa-solid fa-share fa-3x"></i></div>
    <div class="col-8"></div>
    <div class="col-1"><i class="fa-regular fa-bookmark fa-3x"></i></div>
    <div class="col-1 mt-2"><h1>Нравится:456</h1></div>
    <div class="col-11"></div>
    <div class="col-3 text-secondary">смотреть все коментарии (5)</div>
    <div class="col-9"></div>
    <div class="col-1 mr-5">
     <img style={{'border-radius':'50%'}} src="https://sun9-61.userapi.com/s/v1/ig2/RRMBVVkYL403btpTNb4APHy4Jz3qniCYGhozjGJaIsNjpSZ45ZsGdRv5t9eAiRuOOT_fq_sGSA7sEGW2gvi1bDaH.jpg?size=200x200&quality=95&crop=0,0,735,735&ava=1" width="50"></img>
      </div>
  <div class="col-12"></div>
  <div class="col-2 text-secondary mt-2">7 часов назад</div>
    </div>
	</div>
	<div style={{'background-color':'white'}} class="col-12 fixed-bottom">
		<div class="row">
			<div class="col-2"></div>
		<div class="col-2"><i class="fa-solid fa-house fa-2x"></i></div>
		<div class="col-2"><i class="fa-solid fa-magnifying-glass fa-2x"></i></div>
		<div class="col-2"><i class="fa-regular fa-square-plus fa-2x"></i></div>
		<div class="col-2"><i class="fa-regular fa-heart fa-2x"></i></div>
		<div class="col-2"><img style={{'border-radius':'50%'}}src="https://i.pinimg.com/originals/fa/12/00/fa12000ccb54b7a65210216e9f074941.jpg" width="30"></img></div>
	</div>
	</div>
        </div>
    )
}
export default Public;