import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompanyRevise from "./CompanyRevise";
import ObtainDocuments from "./ObtainDocuments";
import ShareCertificate from "./ShareCertificate";
import Other from "./Other";

const Main = () => {
  return (
    <Tabs defaultValue="revise">
      <TabsList>
        <TabsTrigger value="revise">Revise Details</TabsTrigger>
        <TabsTrigger value="documents">Obtain Documents</TabsTrigger>
        <TabsTrigger value="certificate">Share Certificate</TabsTrigger>
        <TabsTrigger value="other">Published Documents</TabsTrigger>
      </TabsList>
      <TabsContent value="revise">
        <CompanyRevise />
      </TabsContent>
      <TabsContent value="documents">
        <ObtainDocuments />
      </TabsContent>
      <TabsContent value="certificate">
        <ShareCertificate/>
      </TabsContent>
      <TabsContent value="other">
        <Other/>
      </TabsContent>
    </Tabs>
  );
};

export default Main;
