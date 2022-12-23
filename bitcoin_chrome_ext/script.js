async function getData() {

    const options = {
        method: 'GET'
    };

    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const record = await res.json()

    console.log('record', record)

    document.getElementById('bitcoin').innerHTML = record.bpi.USD.rate
}

getData();