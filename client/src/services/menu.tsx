import axios from "axios";
import IDataList from "../model/IDataList";

export const getDataFromServer = () =>{

    return axios.get<IDataList[]>(`http://localhost:4002/items`)
            .then( (response: { data: any; }) => response.data );
}

export const pushDataFromUser = (newPurchase : Omit<IDataList,"id">) => {
    //http://localhost:4001/items
    // headers: {
    //     'Content-Type': 'application/json'
    // }
    return axios.post<IDataList>(
        `http://localhost:4001/items`,
        newPurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( (response: { data: any; }) => response.data )
}