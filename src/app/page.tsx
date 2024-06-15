import { getSkills } from "@/lib/skills";
export default async function Home() {
  const skills = await getSkills();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {skills.map((item) => (
          <div key={item._id}>{item.label}</div>
        ))}
      </div>
    </main>
  );
}
