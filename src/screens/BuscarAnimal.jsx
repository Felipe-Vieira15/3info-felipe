import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarAnimal({navigation}){
    const [nomeDoAnimal, setNomeDoAnimal] = useState("");
    const [animais, setAnimais] = useState([])

    async function queryAnimais(nomeDoAnimal = null){
        try{
            if(!nomeDoAnimal) return
            if (nomeDoAnimal === "todos" || nomeDoAnimal === "Todos"){
                const animaisRef = collection(db, "animal");
                const querySnapshot = await getDocs(animaisRef);
                const animaisTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        animaisTemp.push(doc.data());
                    }
                );
                setAnimais(animaisTemp);
                return
            } else {
                const animaisRef = collection(db, "animal");
                const queryAnimais = query(animaisRef, where("Nome", "==", nomeDoAnimal));
                const querySnapshot = await getDocs(queryAnimais);
                const animaisTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        animaisTemp.push(doc.data());
                  },
                  setAnimais(animaisTemp)
            );
            
            }
            
        }catch(error){console.log(error);}
    }
    useEffect(()=> {
        queryAnimais(nomeDoAnimal);
    }, [nomeDoAnimal])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Animal</Text>
            <Text style={styles.subtitle}>Digite o nome de um animal para pesquisar.</Text>
            <TextInput
                label="Digite a espécie do animal"
                value={nomeDoAnimal}
                onChangeText={setNomeDoAnimal}
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
                data={animais}
                renderItem={({item}) => <Text style={styles.result}>Nome: {item.Nome}, espécie: {item.Especie}, Raça: {item.Raca}</Text>}
                keyExtractor={(item) => item.id}
                
            />
            <Button
                mode="contained"
                onPress={()=>{navigation.goBack()}}
                style={styles.backButton}
            >Voltar</Button>
        </View>
    )
}
