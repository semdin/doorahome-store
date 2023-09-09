import { About } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/about`;

const getAbout = async (): Promise<About> => {

    const res = await fetch(`${URL}`);

    return res.json();
    
}

export default getAbout;