import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa Picker desde @react-native-picker/picker
import AppBar from './AppBar';

// Definición de las estaciones y las conexiones entre ellas
const trenMaya = {
    stations: {
        Palenque: { neighbors: { Calakmul: { distance: 100, cost: 50 }, Merida: { distance: 200, cost: 100 } } },
        Calakmul: { neighbors: { Palenque: { distance: 100, cost: 50 }, Merida: { distance: 50, cost: 25 }, ChichenItza: { distance: 150, cost: 75 } } },
        Merida: { neighbors: { Palenque: { distance: 200, cost: 100 }, Calakmul: { distance: 50, cost: 25 }, ChichenItza: { distance: 100, cost: 50 }, Tulum: { distance: 150, cost: 75 } } },
        ChichenItza: { neighbors: { Calakmul: { distance: 150, cost: 75 }, Merida: { distance: 100, cost: 50 }, Tulum: { distance: 50, cost: 25 } } },
        Tulum: { neighbors: { Merida: { distance: 150, cost: 75 }, ChichenItza: { distance: 50, cost: 25 } } }
    }
};

// Función para calcular la ruta más corta y el costo usando el algoritmo de Dijkstra
function dijkstra(graph, source, destination) {
    let shortestDistances = {};
    let previousNodes = {};
    let queue = [];
    let path = [];
    let totalCost = 0;

    for (let station in graph.stations) {
        shortestDistances[station] = Infinity;
        previousNodes[station] = null;
        queue.push(station);
    }

    shortestDistances[source] = 0;

    while (queue.length) {
        let currentStation = queue.shift();

        for (let neighbor in graph.stations[currentStation].neighbors) {
            let distance = graph.stations[currentStation].neighbors[neighbor].distance;
            let cost = graph.stations[currentStation].neighbors[neighbor].cost;
            let tentativeDistance = shortestDistances[currentStation] + distance;

            if (tentativeDistance < shortestDistances[neighbor]) {
                shortestDistances[neighbor] = tentativeDistance;
                previousNodes[neighbor] = currentStation;
                totalCost += cost;
            }
        }
    }

    let currentNode = destination;
    while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = previousNodes[currentNode];
    }

    return { path, totalCost };
}

const UbicacionScreen = ({ navigation }) => {
    const [origin, setOrigin] = useState('Palenque'); // Estado para el punto de origen
    const [destination, setDestination] = useState('Tulum'); // Estado para el punto de destino
    const [cost, setCost] = useState(0); // Estado para el costo total de los boletos

    const handleCalculateRoute = () => {
        const { path, totalCost } = dijkstra(trenMaya, origin, destination);
        setCost(totalCost);
        alert(`La ruta más corta desde ${origin} a ${destination} es: ${path.join(' -> ')}. El costo estimado de los boletos es: ${totalCost} pesos.`);
    };

    return (
        <View>
            <AppBar title="Ubicación" navigation={navigation} />
            <View style={{ padding: 20 }}>
                <Text>Pantalla de Ubicación - Aquí puedes mostrar el mapa y la ubicación del Tren Maya</Text>
                <Text>Selecciona el punto de origen:</Text>
                <Picker selectedValue={origin} onValueChange={(itemValue) => setOrigin(itemValue)}>
                    {Object.keys(trenMaya.stations).map(station => (
                        <Picker.Item key={station} label={station} value={station} />
                    ))}
                </Picker>
                <Text>Selecciona el punto de destino:</Text>
                <Picker selectedValue={destination} onValueChange={(itemValue) => setDestination(itemValue)}>
                    {Object.keys(trenMaya.stations).map(station => (
                        <Picker.Item key={station} label={station} value={station} />
                    ))}
                </Picker>
                <Button title="Calcular ruta más corta" onPress={handleCalculateRoute} />
                <Text>Costo estimado de los boletos: {cost} pesos</Text>
            </View>
        </View>
    );
};

export default UbicacionScreen;
