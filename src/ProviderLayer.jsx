import App from "./App";
import DataProvider from "./Components/context/DataProvider";
const ProviderLayer = () => {
    return (
        <DataProvider>
            <App />
        </DataProvider>
    )
} 
export default ProviderLayer; 