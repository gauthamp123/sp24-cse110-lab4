let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    racecars: 5,
    blackCars: 40, 
    rareCars: 2
};

for (var car in statistics){
    if (car[0] == 'r' || statistics[car]%2 == 1){
        console.log(statistics[car])
    } 
}
