import { useEffect, useState } from "react";

export default function useProducts() {
    
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [electronics, setElectronics] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API_URL}/category/men's clothing`)
            .then((response) => response.json())
            .then((data) => {
                setMenProducts(data); 
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos masculinos:", error);
            });

        fetch(`${API_URL}/category/electronics`)
            .then((response) => response.json())
            .then((data) => {
                setElectronics(data); 
            })
            .catch((error) => {
                console.error("Erro ao buscar eletrônicos:", error);
            });
            
        fetch(`${API_URL}/category/women's clothing`)
            .then((response) => response.json())
            .then((data) => {
                setWomenProducts(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos femininos:", error);
            });
            
    }, []);

    return { menProducts, womenProducts, electronics };
}