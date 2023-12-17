const car = {
    brand: "Toyota",
    model: "Toyota Camry",
    year: "2001",
    color: "розовый",
    startEngine: function () {
        console.log("Автомобиль " + this.brand + " " + this.year + " года выпуска");
        alert("Запущен двигатель автомобиля бренда " + this.brand + ", модели " + this.model);
    },
};

car.startEngine();

