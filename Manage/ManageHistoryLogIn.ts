import {HistoryLogin} from "../Model/HistoryLogin";

export class ManageHistoryLogIn {
    listHistoryLogIn: HistoryLogin[] = [];
    addHistoryLogIn(historyLogIn: HistoryLogin) {
        this.listHistoryLogIn.push(historyLogIn)
    }
}