import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarCor({navigation}){
    const [nomeDaCor, setNomeDaCor] = useState("");
    const [cores, setCores] = useState([])

    async function queryCores(name = null){
        try{
            const coresRef = collection(db, "cor");
            const queryCores = query(coresRef, where("Cor", "==", name));
            const querySnapshot = await getDocs(queryCores);

            const coresTemp = [];
            querySnapshot.forEach(
                (doc) => {
                    coresTemp.push(doc.data());
                },
                setCores(coresTemp)
            );

        } catch(error){console.log(error);}
    }

    useEffect(()=> {
        queryCores(nomeDaCor);
    }
    , [nomeDaCor])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Cor</Text>
            <Text style={styles.subtitle}>Digite o nome de uma cor para pesquisar.</Text>
            <TextInput
                label="Digite o nome da cor"
                value={nomeDaCor}
                onChangeText={setNomeDaCor}
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
                data={cores}
                renderItem={({item}) => <Text style={styles.result}>Cor: {item.Cor}</Text>}
                key={(item) => item.id}
            />
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Home")}
                style={styles.backButton}
            >
                Voltar
            </Button>
        </View>
    )
}