import { Skill } from "@/types/interfaces";
import { client } from "../../sanity/lib/client";

export async function getSkills() {
  const query = `
    *[_type=="skills"]{
        _id,value,label,category
    }
    `;
  const data = await client.fetch(query);
  return data as Skill[];
}
