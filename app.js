document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const greeting = document.getElementById('greeting');

    if (username && greeting) {
        greeting.textContent = `Welcome, ${username}! 👋🏻 GGSEMP is your comprehensive solution for finding sustainable energy resources. Whether you're looking to reduce your carbon footprint, support local economies, or simply turn green, GGSEMP is here to guide you every step of the way. Your solution is just some steps away! 👀`;
    }
    else {
        window.location.href = 'index.html';
    }
});

const map = L.map('map').setView([51.1657, 10.4515], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data & copy; OpenStreetMap contributions',
}).addTo(map);

const providers = [

    { name: "💨 Breeze Tech Wind", coords: [53.5511, 9.9937], region: "Hamburg", resource: "Wind", price: 0.14, purpose: "Commercial" }, 
    { name: "💨 Sky Line Power", coords: [52.5200, 13.4050], region: "Berlin", resource: "Wind", price: 0.16, purpose: "Commercial" },
    { name: "💨 Green Breeze Energy", coords: [48.1351, 11.5820], region: "Bavaria", resource: "Wind", price: 0.14, purpose: "Donation" },
    { name: "💨 Eco Flow Turbines", coords: [50.1109, 8.6821], region: "Hessen", resource: "Wind", price: 0.18, purpose: "Donation" },
    { name: "💨 Wind Edge Solutions", coords: [49.4521, 11.0767], region: "Bavaria", resource: "Wind", price: 0.12, purpose: "Residential" },
    { name: "💨 Zephyr Power", coords: [49.8500, 7.3330], region: "Rhineland - Palatinate", resource: "Wind", price: 0.20, purpose: "Commercial" },
    { name: "💨 Aero Gen Energy", coords: [51.1351, 6.6820], region: "North Rhine - Westphalia", resource: "Wind", price: 0.15, purpose: "Donation" },
    { name: "💨 Wind Vantage", coords: [54.4700, 8.4900], region: "Schleswig - Holstein", resource: "Wind", price: 0.13, purpose: "Industrial" },
    { name: "💨 Borealis Wind Tech", coords: [48.7758, 9.1829], region: "Baden - Württemberg", resource: "Wind", price: 0.17, purpose: "Donation" },
    { name: "💨 Nordica Energy", coords: [52.3792, 9.7990], region: "Lower Saxony", resource: "Wind", price: 0.19, purpose: "Residential" },
    { name: "💨 Horizon Winds", coords: [49.4875, 8.4660], region: "Baden - Württemberg", resource: "Wind", price: 0.14, purpose: "Residential" },
    { name: "💨 Terra Wind Systems", coords: [50.9180, 14.1200], region: "Saxony", resource: "Wind", price: 0.18, purpose:  "Commercial" },
    { name: "💨 Wind Peak Ventures", coords: [50.5800, 6.3310], region: "North Rhine - Westphalia", resource: "Wind", price: 0.11, purpose: "Commercial" },
    { name: "💨 Sky Wave Energy", coords: [50.5800, 13.0200], region: "Saxony", resource: "Wind", price: 0.18, purpose: "Residential" },
    { name: "💨 Aurora Wind Power", coords: [53.2000, 8.5000], region: "Bremen", resource: "Wind", price: 0.15, purpose: "Residential" },

    { name: "🌋 Earth Core Revolve", coords: [49.0134, 12.1016], region: "Bavaria", resource: "Geothermal", price: 0.18, purpose: "Residential" },
    { name: "🌋 Deep Heat Innovations", coords: [50.4060, 8.8250], region: "Hessen", resource: "Geothermal", price: 0.24, purpose: "Commercial" },
    { name: "🌋 Geo Core", coords: [48.4011, 10.0022], region: "Bavaria", resource: "Geothermal", price: 0.12, purpose: "Donation" },
    { name: "🌋 Earth Pulse Systems", coords: [51.8000, 8.6140], region: "North Rhine - Westphalia", resource: "Geothermal", price: 0.13, purpose: "Donation" },
    { name: "🌋 Therma Nova Group", coords: [50.2220, 8.5310], region: "Hessen", resource: "Geothermal", price: 0.15, purpose: "Residential" },
    { name: "🌋 Geo Vita Power", coords: [48.4006, 9.9876], region: "Baden - Württemberg", resource: "Geothermal", price: 0.11, purpose: "Commercial" },
    { name: "🌋 Deep Earth Energies", coords: [51.2080, 8.2140], region: "North Rhine - Westphalia", resource: "Geothermal", price: 0.14, purpose: "Commercial" },
    { name: "🌋 Helio Therm Group", coords: [51.2130, 14.5240], region: "Saxony", resource: "Geothermal", price: 0.10, purpose: "Industrial" },
    { name: "🌋 Epi Geo Thermal", coords: [53.0540, 8.7140], region: "Bremen", resource: "Geothermal", price: 0.09, purpose: "Donation" },
    { name: "🌋 Earth Well Geothermal", coords: [54.1250, 9.1330], region: "Schleswig - Holstein", resource: "Geothermal", price: 0.16, purpose: "Residential" },
    { name: "🌋 Volcanic Heat Energy", coords: [54.1390, 10.4080], region: "Schleswig - Holstein", resource: "Geothermal", price: 0.13, purpose: "Residential" },
    { name: "🌋 Geo Spark Innovations", coords: [50.0741, 10.2310], region: "Bavaria", resource: "Geothermal", price: 0.14, purpose: "Industrial" },
    { name: "🌋 Terra Therm Solutions", coords: [54.3280, 10.1200], region: "Schleswig - Holstein", resource: "Geothermal", price: 0.12, purpose:  "Commercial" },
    { name: "🌋 Hot Core Solutions", coords: [53.5678, 9.9616], region: "Hamburg", resource: "Geothermal", price: 0.11, purpose: "Residential" },
    { name: "🌋 Source of Earth", coords: [53.0370, 8.8017], region: "Lower Saxony", resource: "Geothermal", price: 0.09, purpose:  "Commercial" },

    { name: "🧪 Puro Hydro", coords: [47.9990, 7.8421], region: "Baden - Württemberg", resource: "H2", price: 0.21, purpose: "Residential" },
    { name: "🧪 Green H2 Power", coords: [52.5163, 13.3777], region: "Berlin", resource: "H2", price: 0.20, purpose: "Industrial" },
    { name: "🧪 H2 Future Power", coords: [53.5898, 10.0458], region: "Hamburg", resource: "H2", price: 0.10, purpose: "Donation" },
    { name: "🧪 Aqua Hydrogen", coords: [51.9420, 7.6250], region: "North Rhine - Westphalia", resource: "H2", price: 0.20, purpose: "Residential" },
    { name: "🧪 H2 Next Energy", coords: [49.0069, 8.4037], region: "Baden-Württemberg", resource: "H2", price: 0.20, purpose: "Donation" },
    { name: "🧪 Helio H2 Innovations", coords: [50.7320, 13.0260], region: "Saxony", resource: "H2", price: 0.21, purpose: "Donation" },
    { name: "🧪 Aero Gen Energy", coords: [54.3660, 10.1410], region: "Schleswig - Holstein", resource: "H2", price: 0.20, purpose: "Industrial" },
    { name: "🧪 Blue Wave H2", coords: [53.2000, 8.6000], region: "Bremen", resource: "H2", price: 0.22, purpose: "Commercial" },
    { name: "🧪 Hydro Nova Energy", coords: [50.4130, 12.9680], region: "Saxony", resource: "H2", price: 0.19, purpose: "Residential" },
    { name: "🧪 H2 Fusion Systems", coords: [51.1740, 9.0500], region: "Hessen", resource: "H2", price: 0.20, purpose: "Commercial" },
    { name: "🧪 Sky H2 Solutions", coords: [53.0160, 9.4000], region: "Lower Saxony", resource: "H2", price: 0.23, purpose: "Residential" },
    { name: "🧪 Horizon Green", coords: [53.2250, 9.0000], region: "Lower Saxony", resource: "H2", price: 0.20, purpose: "Residential" },

    { name: "🌞 Sunspire Solutions", coords: [51.8000, 8.6140], region: "North Rhine - Westphalia", resource: "Solar", price: 0.12, purpose: "Residential" },
    { name: "🌞 Solar Wave", coords: [50.5800, 6.3310], region: "North Rhine - Westphalia", resource: "Solar", price: 0.15, purpose: "Commercial" },
    { name: "🌞 Solar Vista Energy", coords: [52.5400, 13.4246], region: "Berlin", resource: "Solar", price: 0.09, purpose: "Commercial" },
    { name: "🌞 Bright Solar Farm", coords: [50.0745, 10.2311], region: "Bavaria", resource: "Solar", price: 0.10, purpose: "Industrial"},
    { name: "🌞 Sun Power Innovations", coords: [53.5116, 9.9822], region: "Hamburg", resource: "Solar", price: 0.08, purpose: "Commercial" },
    { name: "🌞 Solar Green", coords: [50.9000, 14.1200], region: "Saxony", resource: "Solar", price: 0.09, purpose: "Commercial" },
    { name: "🌞 Sol", coords: [50.5450, 8.6821], region: "Hessen", resource: "Solar", price: 0.05, purpose: "Industrial" },
    { name: "🌞 Radiant Sun", coords: [51.2000, 14.3000], region: "Saxony", resource: "Solar", price: 0.11, purpose: "Industrial" },
    { name: "🌞 Solar Edge", coords: [51.0630, 14.7690], region: "Saxony", resource: "Solar", price: 0.09, purpose: "Donation" },
    { name: "🌞 Eco Solar", coords: [49.4960, 8.4660], region: "Baden - Württemberg", resource: "Solar", price: 0.07, purpose: "Residential" },
    { name: "🌞 Photon Harvest Energy", coords: [50.9000, 13.7750], region: "Saxony", resource: "Solar", price: 0.10, purpose: "Donation" },
    { name: "🌞 Metric Sol", coords: [53.1000, 8.4330], region: "Bremen", resource: "Solar", price: 0.06, purpose: "Residential" },
    { name: "🌞 Solar Crest Power", coords: [54.1370, 10.4290], region: "Schleswig - Holstein", resource: "Solar", price: 0.09, purpose: "Residential" },

    { name: "🌽 Green Harvest BioEnergy", coords: [53.5050, 11.5000], region: "Lower Saxony", resource: "Biofuels", price: 0.42, purpose: "Residential" },
    { name: "🌽 Bio Pulse", coords: [48.0741, 11.2310], region: "Bavaria", resource: "Biofuels", price: 0.41, purpose: "Commercial" },
    { name: "🌽 Green Flame Biofuels", coords: [52.5054, 13.3410], region: "Berlin", resource: "Biofuels", price: 0.44, purpose: "Donation" },
    { name: "🌽 Pure Cycle Fuels", coords: [51.1740, 9.0500], region: "Hessen", resource: "Biofuels", price: 0.45, purpose: "Industrial" },
    { name: "🌽 Agro Bio Power", coords: [50.9600, 13.5400], region: "Saxony", resource: "Biofuels", price: 0.40, purpose: "Residential" },
    { name: "🌽 Sunland Biofuels", coords: [50.8300, 14.2880], region: "Saxony", resource: "Biofuels", price: 0.40, purpose: "Donation" },
    { name: "🌽 Blue Earth Bio Energy", coords: [53.1135, 8.7704], region: "Bremen", resource: "Biofuels", price: 0.45, purpose: "Industrial" },
    
    { name: "💧 Hydro Future", coords: [53.2490, 8.6210], region: "Bremen", resource: "Hydro", price: 0.16, purpose: "Residential" },
    { name: "💧 River Flow Energy", coords: [50.5000, 8.2000], region: "Hessen", resource: "Hydro", price: 0.18, purpose: "Commercial" },
    { name: "💧 Blue Stream Power", coords: [58.0740, 11.5810], region: "Bavaria", resource: "Hydro", price: 0.25, purpose: "Donation" },
    { name: "💧 Aqua Dyn Power", coords: [58.0730, 11.5800], region: "Bavaria", resource: "Hydro", price: 0.08, purpose: "Industrial" },
    { name: "💧 Hydra Nova Systems", coords: [48.4300, 9.2600], region: "Baden - Württemberg", resource: "Hydro", price: 0.07, purpose: "Residential" },
    { name: "💧 Cascade Energy", coords: [48.4970, 9.3780], region: "Baden - Württemberg", resource: "Hydro", price: 0.11, purpose: "Donation" },
    { name: "💧 AquaGrid Power", coords: [53.5559, 10.0153], region: "Hamburg", resource: "Hydro", price: 0.07, purpose: "Industrial" },
    { name: "💧 Stream Line Hydro", coords: [54.9570, 11.1210], region: "Schleswig - Holstein", resource: "Hydro", price: 0.13, purpose: "Industrial" },
    { name: "💧 BlueWare Power", coords: [50.9440, 13.8290], region: "Saxony", resource: "Hydro", price: 0.08, purpose: "Industrial" },
    { name: "💧 Hydro Sphere Solutions", coords: [54.7410, 9.9930], region: "Schleswig - Holstein", resource: "Hydro", price: 0.09, purpose: "Industrial" },
    { name: "💧 River Might Energy", coords: [50.8740, 14.1880], region: "Saxony", resource: "Hydro", price: 0.14, purpose: "Industrial" },
    { name: "💧 Eco Hydro Power", coords: [50.1109, 8.6821], region: "North Rhine - Westphalia", resource: "Hydro", price: 0.08, purpose: "Industrial" },
    { name: "💧 Tide Force", coords: [53.2390, 8.5790], region: "Bremen", resource: "Hydro", price: 0.08, purpose: "Industrial" },
    { name: "💧 Hydro Spark", coords: [50.6750, 7.2220], region: "North Rhine - Westphalia", resource: "Hydro", price: 0.07, purpose: "Industrial" },
    { name: "💧 Water Crest Energy", coords: [48.0740, 11.2311], region: "Bavaria", resource: "Hydro", price: 0.09, purpose: "Industrial" },
    
];

providers.forEach(provider => {
    const marker = L.marker(provider.coords).addTo(map);
    marker.bindPopup(`<strong>${provider.name}</strong><br>Resource: ${provider.resource}<br>Price: €${provider.price}/kWh<br>Region: ${provider.region}<br>Purpose: ${provider.purpose}`);
});

const heat = L.heatLayer(
    providers.map(provider => [...provider.coords, 1]),
    {
        radius: 100,
        blur: 35,
        maxZoom: 17,
        gradient: { 0.2: 'red' },
    }
).addTo(map);

const resourcePrices = providers.reduce((acc, provider) => {
    if (!acc[provider.resource]) {
        acc[provider.resource] = [];
    }
    acc[provider.resource].push(provider.price);
    return acc;
}, {});

const priceRanges = Object.entries(resourcePrices).map(([resource, prices]) => {
    const minPrice = Math.min(...prices).toFixed(2);
    const maxPrice = Math.max(...prices).toFixed(2);
    return `${resource.charAt(0).toUpperCase() + resource.slice(1)}: €${minPrice} - €${maxPrice}/kWh`;
}).join('<br>');

document.getElementById('helper-tooltip').innerHTML = priceRanges;

const darkLightToggle = document.getElementById('dark-light-toggle');
darkLightToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? '🌒' : '🌖';
    darkLightToggle.textContent = currentMode;
});

document.getElementById('go-to-platform-btn').addEventListener('click', () => {
    window.location.href = 'https://www.figma.com/proto/ojPeYLDznBkinmY1vFvN88/ui-praktikum---team-5?node-id=57-88&t=Dmp4XGQQM9s9dGZy-1';
});

document.getElementById('criteria-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const selResource = document.getElementById('resource').value;
    const selRegion = document.getElementById('region').value;
    const selPrice = parseFloat(document.getElementById('price').value);

    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) map.removeLayer(layer);
    });

    const filteredProviders = providers.filter(provider =>
        (provider.resource == selResource) || (provider.region == selRegion) || (provider.price == selPrice)
    );

    if (filteredProviders.length > 0) {
        const b = L.latLngBounds(filteredProviders.map(provider => provider.coords));

        filteredProviders.forEach(provider => {
            const marker = L.marker(provider.coords).addTo(map);
            marker.bindPopup(`<b>${provider.name}</b><br>Resource: ${provider.resource}<br>Price: €${provider.price.toFixed(2)}/kWh<br>Region: ${provider.region}<br>Purpose: ${provider.purpose}`);
        });
        map.fitBounds(b, { padding: [20, 20] });
    }
    else {
        alert("No providers were found for the selected criteria. Please review your selections and refresh the page!")
    }
});


document.getElementById('reset-search-btn').addEventListener('click', () => {
    document.getElementById('criteria-form').reset();

    map.setView([51.1657, 10.4515], 6);

    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) { map.removeLayer(layer); }
    });

    providers.forEach(provider => {
        const marker = L.marker(provider.coords).addTo(map);
        marker.bindPopup(`<strong>${provider.name}</strong><br>Resource: ${provider.resource}<br>Price: €${provider.price}/kWh<br>Region: ${provider.region}<br>Purpose: ${provider.purpose}`);
    });

    alert('Search has been reset. All providers are now visible.');
});



