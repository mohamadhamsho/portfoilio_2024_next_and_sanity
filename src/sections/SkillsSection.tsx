import SectionTitle from "@/components/sectionTitle";
import { Effect } from "@/components/ui/effects";
import { getSkills } from "@/lib/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsItems } from "@/constants/tab-items";
import SkillsContainer from "@/components/skills-container";

async function SkillsSection() {
  const frontendSkills = await getSkills("frontend");
  const backendSkills = await getSkills("backend");
  const toolsSkills = await getSkills("tools");
  return (
    <section id="skills" className="relative container pt-20 overflow-x-hidden">
      <Effect className="-right-20 md:-right-36 bottom-8 md:bottom-2" />
      <SectionTitle title="skills" description="my technical proficiency" />
      <Tabs defaultValue={tabsItems[0].value}>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {/* tabs List */}
          <TabsList className="grid grid-cols-3 md:grid-cols-1 gap-2 w-full h-fit">
            {tabsItems.map((tab, index) => {
              const { value, label, icon: Icon } = tab;
              return (
                <TabsTrigger key={value} value={value} className="w-full gap-2">
                  <Icon className="size-4" />
                  <span className="capitalize">{label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs Content */}
          <div className="md:col-span-2 bg-background/50">
            <TabsContent value="frontend">
              <SkillsContainer data={frontendSkills} label="front end" />
            </TabsContent>
            <TabsContent value="backend">
              <SkillsContainer data={backendSkills} label="back end" />
            </TabsContent>
            <TabsContent value="tools">
              <SkillsContainer data={toolsSkills} label="tools" />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default SkillsSection;
