import {ManageHistoryLogIn} from "./Manage/ManageHistoryLogIn";
import {HistoryLogin} from "./Model/HistoryLogin";
import {User} from "./Model/User";
import {Product} from "./Model/Product";

let listHistoryLogIn = new ManageHistoryLogIn();
let user = new User("minh anh", "123", true)

user.add(new Product(12, "ip", 1,2))
let history = new HistoryLogin(user);
listHistoryLogIn.addHistoryLogIn(history)
listHistoryLogIn.listHistoryLogIn.forEach((item)=>{
    console.log(item.card)
})
listHistoryLogIn.listHistoryLogIn.forEach((item,index)=>{
    console.log((index + 1) +" "+ item.card)
})