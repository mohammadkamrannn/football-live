var baseUrl = 'https://www.scorebat.com/api/competition/3/';
var flagTeam =  'https://s3.amazonaws.com/bookmkrs/img/logos/big/';
var leageRank = "";
var leageName = "";
var teamResults = "";
var teamResult = document.getElementById('teamResults');
// var dateTimes = 1649088000000;
var monthName = ["دی","بهمن","اسفند","فرودین","ادیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر"];
var dayName = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6,7,8,9,10];

function loadJSON(method, url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        callback(JSON.parse(this.response));
    };
};

xhr.send();
}   

window.onload = function() {
    getRank();
}

function getRank() {
    
    var leageNameSelect = document.getElementById("leageNameSelect").selectedIndex;
    if (leageNameSelect === 0) {
        leageRank = "";
        teamResults = "";
        leageName = "iran-gulf-pro-league";
    } else if (leageNameSelect === 1) {
        leageRank = "";
        teamResults = "";
        leageName = "spain-la-liga";
    } else if (leageNameSelect === 2) {
        leageRank = "";
        teamResults = "";
        leageName = "england-premier-league";
    } else if (leageNameSelect === 3) {
        leageRank = "";
        teamResults = "";
        leageName = "germany-bundesliga";
    } else if (leageNameSelect === 4) {
        leageRank = "";
        teamResults = "";
        leageName = "italy-serie-a";
    } else if (leageNameSelect === 5) {
        leageRank = "";
        teamResults = "";
        leageName = "france-ligue-1";
    }
    
    
loadJSON('GET', `${baseUrl}${leageName}/?_=1645601509026&sf=1`, function(req) {

    
    
    for(var i = 0; i < req.response.standings.rows.length; i++) {
        let nameTeam = req.response.standings.rows[i];
        if (nameTeam.team == "Persepolis") {
            nameTeam.team = "پرسپولیس";
        } else if (nameTeam.team == "Esteghlal") {
            nameTeam.team = "استقلال";
        } else if (nameTeam.team == "Sepahan") {
            nameTeam.team = "سپاهان";
        } else if (nameTeam.team == "Foolad") {
            nameTeam.team = "فولاد";
        } else if (nameTeam.team == "Mes Rafsanjan") {
            nameTeam.team = "مس رفسنجان";
        } else if (nameTeam.team == "Gol Gohar") {
            nameTeam.team = "گل گهر";
        } else if (nameTeam.team == "Paykan") {
            nameTeam.team = "پیکان";
        } else if (nameTeam.team == "Zob Ahan") {
            nameTeam.team = "ذوب آهن";
        } else if (nameTeam.team == "Sanat Naft") {
            nameTeam.team = "صنعت نفت";
        } else if (nameTeam.team == "Aluminium Arak") {
            nameTeam.team = "آلومینیوم اراک";
        } else if (nameTeam.team == "Havadar") {
            nameTeam.team = "هوادار";
        } else if (nameTeam.team == "Nassaji Mazandaran") {
            nameTeam.team = "نساجی مازندران";
        } else if (nameTeam.team == "Tractor Sazi") {
            nameTeam.team = "تراکتور سازی";
        } else if (nameTeam.team == "Naft Masjed Soleyman") {
            nameTeam.team = "نفت مسجد سلیمان";
        } else if (nameTeam.team == "Fajr Sepasi") {
            nameTeam.team = "فجر سپاسی";
        } else if (nameTeam.team == "Padideh Khorasan") {
            nameTeam.team = "شهر خودرو مشهد";
        } else if (nameTeam.team == "Real Madrid") {
            nameTeam.team = "رئال مادرید";
        } else if (nameTeam.team == "Barcelona") {
            nameTeam.team = "بارسلونا";
        } else if (nameTeam.team == "Sevilla") {
            nameTeam.team = "سویا";
        } else if (nameTeam.team == "Atletico Madrid") {
            nameTeam.team = "اتلتیک مادرید";
        } else if (nameTeam.team == "Real Betis") {
            nameTeam.team = "رئال بتیس";
        } else if (nameTeam.team == "Real Sociedad") {
            nameTeam.team = "رئال سوسیداد";
        } else if (nameTeam.team == "Villarreal") {
            nameTeam.team = "ویارئال";
        } else if (nameTeam.team == "Athletic Bilbao") {
            nameTeam.team = "اتلتیک بیبائو";
        } else if (nameTeam.team == "Valencia") {
            nameTeam.team = "والنسیا";
        } else if (nameTeam.team == "Osasuna") {
            nameTeam.team = "اوساسونا";
        } else if (nameTeam.team == "Espanyol") {
            nameTeam.team = "اسپانیول";
        } else if (nameTeam.team == "Celta Vigo") {
            nameTeam.team = "سلتاویگو";
        } else if (nameTeam.team == "Rayo Vallecano") {
            nameTeam.team = "رایو وایه کانو";
        } else if (nameTeam.team == "Getafe") {
            nameTeam.team = "ختافه";
        } else if (nameTeam.team == "Elche") {
            nameTeam.team = "لچه";
        } else if (nameTeam.team == "Granada CF") {
            nameTeam.team = "گراندا";
        } else if (nameTeam.team == "Mallorca") {
            nameTeam.team = "مایورکا";
        } else if (nameTeam.team == "Cadiz") {
            nameTeam.team = "کادیز";
        } else if (nameTeam.team == "Levante") {
            nameTeam.team = "لوانته";
        } else if (nameTeam.team == "Alaves") {
            nameTeam.team = "آلاوز";
        }
        leageRank +=
            `<tbody>
                <tr>
                    <th scope="row">${req.response.standings.rows[i].row}</th>
                    <td class="logo-team text-center"><img src="${flagTeam}${req.response.standings.rows[i].teamScId}.png" alt="${req.response.standings.rows[i].team}"></td>
                    <td><span class="teamResult">${req.response.standings.rows[i].team}</span></td>
                    <td class="text-center">${req.response.standings.rows[i].p}</td>
                    <td class="text-center">${req.response.standings.rows[i].w}</td>
                    <td class="text-center">${req.response.standings.rows[i].d}</td>
                    <td class="text-center">${req.response.standings.rows[i].l}</td>
                    <td class="text-center">${req.response.standings.rows[i].fa1}</td>
                    <td class="text-center">${req.response.standings.rows[i].fa2}</td>
                    <td class="text-center fa-dir">${req.response.standings.rows[i].fa1 - req.response.standings.rows[i].fa2}</td>
                    <td class="text-center">${req.response.standings.rows[i].pnt}</td>
                </tr>
            </tbody>`;
        
            let theLeageName = req.response;
            if ( theLeageName.slug == "iran-gulf-pro-league") {
                theLeageName.slug = "نتایج لیگ برتر خلیج فارس";
            } else if ( theLeageName.slug == "spain-la-liga") {
                theLeageName.slug = "نتایج لالیگا اسپانیا";
            } else if ( theLeageName.slug == "england-premier-league") {
                theLeageName.slug = "نتایج لیگ برتر انگلیس";
            } else if ( theLeageName.slug == "germany-bundesliga") {
                theLeageName.slug = "نتایج بوندسلیگا آلمان";
            } else if ( theLeageName.slug == "italy-serie-a") {
                theLeageName.slug = "نتایج سری آ ایتالیا";
            } else if ( theLeageName.slug == "france-ligue-1") {
                theLeageName.slug = "نتایج لیگ یک فرانسه";
            };
            document.getElementById('leageFlag').innerHTML = 
            `<div class="d-flex align-items-center mb-3">
            <h5 class="mx-3">${req.response.slug}</h5>
            </div>`;
    };
    for(var j = 0; j < (req.response.standings.rows.length / 2); j++) {
        var dateTimes = String(req.response.results[j].dt);
        var times = dateTimes + '000';
        var timeGame = new Date(Number(times));

        teamResults += 
        `<div class="d-flex justify-content-center align-items-center border-bottom mb-2 p-2 text-dark text-center h5">
            <div class="logo-team-result d-flex flex-column align-items-center mx-4 flex-basis-35">
            <img src="${flagTeam}${req.response.results[j].s1Id}.png"><span class="mt-2">${req.response.results[j].s1}</span>
            </div>
            <div class="">
            <div class="d-flex justify-content-center text-light">
                <div class="bg-warning p-3">${req.response.results[j].sc1}</div>
                <div class="bg-danger p-3">${req.response.results[j].sc2}</div>
            </div>
            <div class="bg-dark text-light day-result">${dayName[timeGame.getDate()]} ${monthName[timeGame.getMonth()]}</div>
            </div>
            

            <div class="logo-team-result d-flex flex-column align-items-center mx-4 flex-basis-35">
            <img src="${flagTeam}${req.response.results[j].s2Id}.png"><span class="mt-2">${req.response.results[j].s2}</span>
            </div>
            
        </div>
        `;
    }
    document.getElementById('leageRank').innerHTML = leageRank;
    teamResult.innerHTML = teamResults;
});
}
var toDay = new Date();
console.log(toDay.getDate());
console.log(toDay.getMonth());
console.log(toDay.getFullYear());
