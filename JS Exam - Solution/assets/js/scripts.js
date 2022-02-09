// SOLUTION BY LECTURER
fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => errorFunction(error));

function showData(data) {
    let tab =
        `<caption id="hero">COVID-19: Worldwide Statistics
        <p id="total">There is a total of ${data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} confirmed COVID-19 cases worldwide. So far, ${data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} people have died because of COVID-19. Data is updated automatically once a day.<br><br>Data updated on ${data.Global.Date}.</p></caption>
        <tr>
            <th>Country</th>
            <th>Total cases</th>
            <th>Total deaths</th>
            </tr>`;

    for (let i of data.Countries) {
        tab = tab + `<tr> 
                    <td>${i.Country} </td>
                    <td>${i.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
                    <td>${i.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>         
                    </tr>`;
    }
    document.getElementById("covid-data").innerHTML = tab;
}

function errorFunction(error) {
    document.getElementById("error").style.display = 'inherit';
    document.getElementById("error-message").innerHTML = `${error}`;
}