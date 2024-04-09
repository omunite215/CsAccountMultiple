"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ObtainDocumentsFormSchema } from "@/app/validationSchemas";

const ObtainDocuments = () => {
  const form = useForm<z.infer<typeof ObtainDocumentsFormSchema>>({
    resolver: zodResolver(ObtainDocumentsFormSchema),
  });

  const certificateRef = form.register("certificateOfIncorporate", {
    required: true,
  });
  const noticeRef = form.register("notice", { required: true });
  const recieptsRef = form.register("reciepts");

  function onSubmit(values: z.infer<typeof ObtainDocumentsFormSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Obtain the company certificate & documents from Companies Registry
        </CardTitle>
        <CardDescription>These documents will be published</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="certificateOfIncorporate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Certificate of Incorporate</FormLabel>
                  <FormControl>
                    <Input placeholder="Certificate of Incorporate" type="file" {...certificateRef} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Registration Notice</FormLabel>
                  <FormControl>
                    <Input placeholder="Notice" type="file" {...noticeRef} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reciepts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receipt</FormLabel>
                  <FormControl>
                    <Input placeholder="Reciepts" type="file" {...recieptsRef} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ObtainDocuments;
