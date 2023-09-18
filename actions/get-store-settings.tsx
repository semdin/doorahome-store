import { Store } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_SETTINGS_API_URL}`;

const getStoreSettings = async (): Promise<Store> => {

    const res = await fetch(`${URL}`);

    return res.json();
    
}

export default getStoreSettings;