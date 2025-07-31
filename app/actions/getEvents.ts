import { supabase } from "../lib/supabase";

const tier  = ['free','silver','gold','platinum'];

export async function getEvents(userTier:string) {
    const allowedTier = tier.slice(0,tier.indexOf(userTier) +1);

    const {data, error} = await supabase
      .from('events')
      .select('*')
      .in('tier', allowedTier)

    if (error) {
        console.error(error)
        return []
    }
    
    return data;  
}