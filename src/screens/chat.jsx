import Header from "../components/header";

const Chat = () => {
    const local = localStorage.getItem('token');
    if (local == null) {
        window.location.href = '/';
    }
    return (
        <div>
             <div class="container">
        <div class="row">
      <div class="col-1 mt-2"><a href="/direct" className="text-dark"><i class="fa-solid fa-arrow-left fa-2x"></i></a></div>
      <div class="col-1"><img style={{borderRadius: '50%'}} src="https://i.pinimg.com/736x/41/b3/e2/41b3e2324610c2b439a240f3ca2b4b9f.jpg" width={50}></img></div>
      <div class="col-1">
        <div class="row">
            <div class="col-12"><b>ya_sper</b></div>
            <div class="col-12"><p>chong</p></div>
        </div>
        </div>
        <div class="col-7"></div>
        <div class="col-1"><i class="fa-solid fa-phone fa-2x"></i></div>
        <div class="col-1"><i class="fa-solid fa-video fa-2x"></i></div>
        <div class="col-1 mt-2"><img style={{borderRadius: '50%'}} src="https://i.pinimg.com/736x/41/b3/e2/41b3e2324610c2b439a240f3ca2b4b9f.jpg" width="50"></img></div>
     <div style={{backgroundColor:'#000',borderRadius: '10px'}} clfass="col-1 text-light mt-2">Я дома</div><div class="co-10"></div>
     <div class="col-11"></div><div style={{backgroundColor:'#3908f', borderRadius:'10px'}} class="col-1 text-light mt-5">Ок</div>
     <div class="col-1 mt-5"><img style={{borderRadius: '50%'}} src="https://i.pinimg.com/736x/41/b3/e2/41b3e2324610c2b439a240f3ca2b4b9f.jpg" width="50"></img></div>
     <div style={{backgroundColor:'000',borderRadius:'10px'}} class="col-1 text-light mt-5">Ты кто ?</div><div class="co-10"></div>
     <div class="col-11"></div><div style={{backgroundColor:'#3908ff', borderRadius:'10px'}} class="col-1 text-light mt-5">А ты?</div>
     <div class="col-1 mt-5"><img style={{borderRadius: '50%'}} src="https://i.pinimg.com/736x/41/b3/e2/41b3e2324610c2b439a240f3ca2b4b9f.jpg" width="50"></img></div>
     <div style={{backgroundColor:'#000', borderRadius:'10px'}} class="col-1 text-light mt-5">Чимчонг</div><div class="co-10"></div>
     <div className="col-12 mt-5"></div>
     
     <div class="col-12 mt-5"><input class="form-control" placeholder="Отправить сообщение...."></input></div>

      </div>
                
        </div>

    </div>
            

    

    )
}
export default Chat;