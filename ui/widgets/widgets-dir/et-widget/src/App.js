import {getData} from "./integration/Integration";
import {useState} from "react";
import './App.css';


function App() {
    const [payload, setPayload] = useState("")

    async function callTheApi() {
        const responseObj = await getData();
        if (responseObj["response"]) {
            setPayload(responseObj.response.data.data)
        }else{
            setPayload(responseObj.error.message)
        }
    }

    // return (
    //     <>
    //         <div>
    //             <button onClick={callTheApi}>call the api react app</button>
    //         </div>
    //         <div>
    //             <span>{payload}</span>
    //         </div>
    //     </>
    // )

    return (
        <>
            <div>
                <button onClick={callTheApi}>call the api react app</button>
            </div>
            {!payload.length && <div>No payload to load</div>}
            {payload.length > 0 && <div>
                <h3>payload List</h3>
                <div>
                    {payload.map((cust) => (
                        <div className="card" key={cust.id}>
                            <h4><b>#{cust.id}</b></h4>
                            <h1>{cust.attributes.name}</h1>
                            <div>
                                <b>Email:</b> {cust.attributes.email}
                            </div>
                            <b>Created-At:</b> {cust.attributes.createdAt}
                            <p>{cust.attributes.address}</p>
                        </div>))}
                </div>
            </div>}
        </>
    );

}

export default App
