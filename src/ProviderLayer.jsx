import App from "./App";
import { DataProvider } from "/Users/orlan/OneDrive/Documents/PostCodingTemple/OnlineLanguagePro/YProfileR/YuriProfileReact/src/context/DataProvider";



const ProviderLayer = () => {
    return (
        <DataProvider>
            <App />
        </DataProvider>
    )
} 
export default ProviderLayer; 