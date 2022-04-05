let lon;
let lat;
let temp = document.querySelectorAll(".temp");
let summary = document.querySelectorAll(".summary");
let loc = document.querySelectorAll(".location");
let icon = document.querySelectorAll(".icon");
const api = "c2ab6c0e983017cb096ed819c357cb19";

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
                `lon=${lon}&appid=${api}`;
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);

                    for (let i = 0; i < temp.length; i++) {
                        temp[i].textContent = Math.floor(data.main.temp - 273) + "°C";
                        let icon1 =
                            "http://openweathermap.org/img/w/" +
                            data.weather[0].icon +
                            ".png";
                        icon[i].innerHTML = `<img src="${icon1}" style= 'width: 100%'/>`;

                        summary[i].textContent = data.weather[0].description;
                        loc[i].textContent = data.name;
                    }
                });
        });
    }
});