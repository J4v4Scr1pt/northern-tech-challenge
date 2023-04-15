interface Weather {
    id: number;
    icon: string;
    main: string;
    description: string;
};

interface Coordinates {
    lat: number;
    lon: number;
};

interface City {
    name: string;
};

interface Main {
    temp_max: string;
    temp_min: string;
};

interface CurrentWeather {
    name: string;
    city: City;
    weather: Array<Weather>;
    coord: Coordinates;
    list: Array<any>;
    main: Main;
};