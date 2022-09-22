import {HistoryBuyProduct} from "../Model/HistoryBuyProduct";

export class ManageHistoryBuyProduct {
    static listHistory: HistoryBuyProduct[] = [];

    static addHistory(history: HistoryBuyProduct) {
        ManageHistoryBuyProduct.listHistory.push(history)
    }

    static showAll() {
        this.listHistory.forEach((item, index)=>{
            console.log(`STT: ${index + 1} Thoi gian: ${item.time}, Tong tien: ${item.money}, Chi tiet san pham: ${item.cart.showAll()}`)
        })
    }
}