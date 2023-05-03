import Navbar from "../components/footer";
import Header from "../components/header";

const Like=()=>{
    const local = localStorage.getItem('token');
	if(local == null){
		window.location.href = '/';
	}
    return(
        <div>
            <div class="container">
        <div class="row">
           <div class="col-12"><h1>Уведомения</h1></div>
          <div class="col-12"> <p><b>Новое</b></p></div>
          <div class="col-1"><img style={{'border-radius':'50%'}} src="https://pikuco.ru/upload/test_stable/4b7/4b7ce3f6ca3349aabf6ca8dce68f0e23.jpg" width="50"></img></div>
        <div class="col-8">
            <div class="row">
                <div class="col-12"><b>kakoito chel</b> подписался(-алась)</div>
                <div class="col-12">на ваши обновления. <b>1дн.</b></div>
            </div>
            </div>
            <div class="col-1"><button class="btn btn-primary">Подписаться</button></div>
            <div class="col-12 mt-5"> <p><b>На этой неделе</b></p></div>
            <div class="col-1"><img style={{'border-radius':'50%'}} src="https://i.pinimg.com/736x/24/2b/d5/242bd579366a6c2b6fc515f106e2f91e.jpg" width="50"></img></div>
        <div class="col-8">
            <div class="row">
                <div class="col-12"><b>bts fan1234</b> подписался(-алась)</div>
                <div class="col-12">на ваши обновления. <b>5дн.</b></div>
            </div>
            </div>
            <div class="col-3"><button class="btn btn-secondary">Подписки</button></div>

        <div class="col-1 mt-3"><img style={{'border-radius':'50%'}} src="https://i.pinimg.com/736x/bf/89/a3/bf89a30e6c649eff913b43eb0666b5cf.jpg" width="50"></img></div>
        <div class="col-8 mt-3">
            <div class="row">
                <div class="col-12"><b>prognoz-zzz</b> подписался(-алась)</div>
                <div class="col-12">на ваши обновления. <b>5дн.</b></div>
            </div>
            </div>
            <div class="col-3  mt-3"><button class="btn btn-secondary">Подписки</button></div>
            <div class="col-12 mt-3"> <p><b>Сегодня</b></p></div>
            <div class="col-1"><img style={{'border-radius':'50%'}} src="https://pbs.twimg.com/media/EJpdV-ZXkAAwvR4?format=jpg&name=900x900" width="50"></img></div>
            <div class="col-8">
                <div class="row">
                    <div class="col-12"><b>ya_sper</b> подписался(-алась)</div>
                    <div class="col-12">на ваши обновления. <b>5дн.</b></div>
                </div>
                </div>
                <div class="col-3"><button class="btn btn-secondary">Подписки</button></div>
    
            <div class="col-1 mt-3"><img style={{'border-radius':'50%'}} src="https://pbs.twimg.com/media/E1zeAJEWUAAHpJe?format=jpg&name=900x900" width="50"></img></div>
            <div class="col-8 mt-3">
                <div class="row">
                    <div class="col-12"><b>prognoz-zzz</b> подписался(-алась)</div>
                    <div class="col-12">на ваши обновления. <b>5дн.</b></div>
                </div>
                </div>
                <div class="col-3 mt-3"><button class="btn btn-secondary">Подписки</button></div>
                <div class="col-12 mt-3"> <p><b>На этой неделе</b></p></div>
                <div style={{'border-radius':'50%'}} class="col-12 fixed-bottom">
      <Navbar/>
    </div>


            


        </div>
        </div>
        </div>
    )
}
export default Like;