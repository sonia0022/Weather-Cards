// 1) task pdf   (1 -20 chapters) >>>.  wednesday
// 2) weather card ( prompt --- if, else if , else)    >>>> sunday
// 3) Kidz Math Solution (
//   prompt(table, fCounting, bCounting)
//  --- if, else if , else)    >>>> friday


var weatherOption = prompt(`How is the weather today?
select one 
1.   Sunny 
2.   Cloudy
3.   PartlyCloudy
4.   Windy
5.   Rainy
6.   Stormy
7.   Snowy
8.   Foggy
9.   Tornado
10.  Lightning
11.  Hot
12.  Cold `
)

if (weatherOption === 'Sunny') {
    document.write(
        `
        <div class="main main1">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-02-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>58<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Sunny
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-02-removebg-preview.png" width="50px" height="50px">
                        <div>58 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )

} else if (weatherOption === 'Cloudy') {
    document.write(
        `
            <div class="main main2">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-03-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>24<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Cloudy
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                        <div>24 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )

} else if (weatherOption === 'PartlyCloudy') {
    document.write(
        `<div class="main">
        <div class="card">
            <div class="header">
                <div class="part1">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="part2">
                    karachi
                </div>
            </div>
            <div class="content">
                <div class="part1">
                    <img src="./images/pic-01-removebg-preview.png" alt="partly cloudy">
                </div>
                <div class="part2">
                    <div class="left">
                        <span>28<sup>o</sup></span>
                    </div>
                    <div class="right">
                        Partly Cloudy
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="part1">
                    <h4>Today</h4>
                    <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                    <div>51 <sup>0</sup></div>
                </div>
                <div class="part2">
                    <h4>10-Days forcast</h4>
                    <div class="mini-pics">
                        <div class="temp">
                            <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                            <div>51 <sup>0</sup></div>
                        </div>
                        <div class="temp">
                            <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                            <div>61 <sup>0</sup></div>
                        </div>
                        <div class="temp">
                            <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                            <div>61 <sup>0</sup></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
} else if (weatherOption === 'Windy') {
    document.write(
        `
             <div class="main  main3">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-04-removebg-preview (1).png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>30<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Windy
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-04-removebg-preview (1).png" width="50px" height="50px">
                        <div>30 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
} else if (weatherOption === 'Rainy') {
    document.write(`<div class="main main4">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-06-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>30<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Rainy
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-06-removebg-preview.png" width="50px" height="50px">
                        <div>30 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
} else if (weatherOption === 'Stormy') {
    document.write(`
            <div class="main  main5">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-11-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>-10<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Stormy
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-11-removebg-preview.png" width="50px" height="50px">
                        <div>-10 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)
} else if (weatherOption === 'Snowy') {
    document.write(
        `
            <div class="main  main6">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-07-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>-10<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Snowy
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-07-removebg-preview.png" width="50px" height="50px">
                        <div>-10 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
} else if (weatherOption === 'Foggy') {
    document.write(
        `
            <div class="main  main7">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic_-8-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>-10<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Foggy
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic_-8-removebg-preview.png" width="50px" height="50px">
                        <div>-10 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
} else if (weatherOption === 'Tornado') {
    document.write(
        `
            <div class="main  main8">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-10-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>-10<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Tornado
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-10-removebg-preview.png" width="50px" height="50px">
                        <div>-10 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
} else if (weatherOption === 'Lightning') {
    document.write(`
            <div class="main  main9">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-05-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>29<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Lightning
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-05-removebg-preview.png" width="50px" height="50px">
                        <div>29 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)
} else if (weatherOption === 'Hot') {
    document.write(
        `
        <div class="main  main10">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-9-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>62<sup>o</sup></span>
                        </div>
                        <div class="right">
                            Hot
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-9-removebg-preview.png" width="50px" height="50px">
                        <div>62 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
} else if (weatherOption === 'Cold') {
    document.write(`
            <div class="main  main11">
            <div class="card">
                <div class="header">
                    <div class="part1">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="part2">
                        karachi
                    </div>
                </div>
                <div class="content">
                    <div class="part1">
                        <img src="./images/pic-12-removebg-preview.png" alt="sunny">
                    </div>
                    <div class="part2">
                        <div class="left">
                            <span>62<sup>o</sup></span>
                        </div>
                        <div class="right">
                            cold
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="part1">
                        <h4>Today</h4>
                        <img src="./images/pic-12-removebg-preview.png" width="50px" height="50px">
                        <div>62 <sup>0</sup></div>

                    </div>
                    <div class="part2">
                        <h4>10-Days forcast</h4>
                        <div class="mini-pics">
                            <div class="temp">
                                <img src="./images/pic-01-removebg-preview.png" width="50px" height="50px">
                                <div>51 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                            <div class="temp">
                                <img src="./images/pic-03-removebg-preview.png" width="50px" height="50px">
                                <div>61 <sup>0</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)
} else (
    document.write(`
            <h2>
                Please input the valid option...Thanks!
            </h2>
        `)
)
