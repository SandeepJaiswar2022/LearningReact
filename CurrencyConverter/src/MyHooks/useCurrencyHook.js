import { useState } from "react";
import { useEffect } from "react";

//CustomHooks 

function useCurrencyHook(currencyName) {
    const [currencyDataObject, setCurrencyDataObject] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currencyName}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok Error : ', res.statusText);
                }
                return res.json();
            })
            .then((parsedCurrencyData) => {
                setCurrencyDataObject(parsedCurrencyData[currencyName]);
            })
            .catch((errorMsg) => {
                console.log("Error in fetching Currency Api : ", errorMsg);
            })
    }, [currencyName])
    return currencyDataObject;
}

export default useCurrencyHook;