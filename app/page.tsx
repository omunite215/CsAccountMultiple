import Card from "@/components/StatCard";
import { Projects, Companies } from "@/components/Tables";
import { buttonVariants } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cardData } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-6">
      <section className="grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>
      <section className="mt-6 font-sans">
        <Tabs defaultValue="projects">
          <TabsList className="grid w-full grid-cols-2 sm:mb-0 mb-40">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="font-sans">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="https://cs-account-single.vercel.app/"
              target="_blank"
            >
              + Add New Project
            </Link>
            <Projects />
          </TabsContent>
          <TabsContent value="companies">
            <div className="flex items-center gap-2">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="https://cs-account-single.vercel.app/"
                target="_blank"
              >
                + Add New Company
              </Link>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="https://cs-account-single.vercel.app/"
                target="_blank"
              >
                + Add New Project
              </Link>
            </div>
            <Companies />
          </TabsContent>
        </Tabs>
      </section>
      <CardDescription className="mt-4">
        Copyright © 2012 - 2024 ComSec360®. All rights reserved.
      </CardDescription>
    </main>
  );
}
