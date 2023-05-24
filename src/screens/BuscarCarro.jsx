import { FlatList, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarCarro({ navigation }) {
    const [nomeDoCarro, setNomeDoCarro] = useState("");
    const [carros, setCarros] = useState([])

    async function queryCarros(nomeDoCarro = null) {
        try {
            if (!nomeDoCarro) return
            if (nomeDoCarro === "todos" || nomeDoCarro === "Todos") {
                const carrosRef = collection(db, "Carro");
                const querySnapshot = await getDocs(carrosRef);
                const carrosTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        carrosTemp.push(doc.data());
                    }
                );
                setCarros(carrosTemp);
                return
            } else {
                const carrosRef = collection(db, "Carro");
                const queryCarros = query(carrosRef, where("nome", "==", nomeDoCarro));
                const querySnapshot = await getDocs(queryCarros);
                const carrosTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        carrosTemp.push(doc.data());
                    },
                    setCarros(carrosTemp)
                );
                return

            }
        } catch (error) { console.log(error); }
    }
    useEffect(() => {
        queryCarros(nomeDoCarro);
    }
        , [nomeDoCarro])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Carro</Text>
            <Text style={styles.subtitle}>Digite o nome de um carro para pesquisar.</Text>
            <TextInput
                label="Digite a marca do carro"
                value={nomeDoCarro}
                onChangeText={setNomeDoCarro}
                underlineColor="#fff"
                style={styles.input}
                theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#d3d3d3",
                        onSurfaceVariant: "#ececec",
                    }}
                    
                }
                outlineColor="#fff"
            />
            <FlatList
                data={carros}
                renderItem={({ item }) => <Text style={styles.result}>Marca: {item.Marca}, nome: {item.Nome}, ano: {item.Ano}, condição: {item.Condicao}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Home")}
                style={styles.backButton}
            >Voltar</Button>
        </View>
    );
}