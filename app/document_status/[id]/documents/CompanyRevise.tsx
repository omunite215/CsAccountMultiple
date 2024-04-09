import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const CompanyRevise = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revise Company Details and Documents</CardTitle>
        <CardDescription>Revise your Company Details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <div className="space-y-3">
            <CardDescription>
              Note: Clicking this will need to enter all the details again.
            </CardDescription>
            <Link
              href="/document_status/m5gr84i9"
              className={buttonVariants({ size: "lg", variant: "destructive" })}
            >
              Revert to Company Details
            </Link>
          </div>
          <div className="space-y-3">
            <CardDescription>
              If you don&apos;t want to revise the company details click on next to generate
            </CardDescription>
            <Button size="lg">Next</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyRevise;
