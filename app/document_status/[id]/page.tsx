"use client";

import ButtonLink from "@/components/ButtonLink";
import { SignPopup, UploadPopup } from "@/components/Popups";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data } from "@/lib/constants";
import { Slash } from "lucide-react";

const page = ({ params }: { params: { id: string } }) => {
  const projectToFetch = data.find((project) => project.id === params.id);

  return (
    <Card className="my-6 container">
      <Breadcrumb className="py-4 px-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{projectToFetch?.company}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>
              Project - {projectToFetch?.project} (id: {params.id})
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <CardHeader>
        <CardTitle>Document Status</CardTitle>
        <CardDescription>
          This is the status of documents prepared by the project of your
          company.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr No.</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Generated</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>NNC1 Form</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                  onClick={() => window.open("/documents/NNC1.pdf", "_blank")}
                >
                  Print & Preview
                </span>
              </TableCell>
              <TableCell>
                <SignPopup text="3 Signed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Article of Association (A & A)</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                  onClick={() => window.open("/documents/AA.pdf", "_blank")}
                >
                  Print & Preview
                </span>
              </TableCell>
              <TableCell className="text-muted-foreground">
                No Sign Needed
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Share Agreement</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                  onClick={() => window.open("/documents/SA.pdf", "_blank")}
                >
                  Print & Preview
                </span>
              </TableCell>

              <TableCell>
                <SignPopup text="3 Signed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>Minutes</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                  onClick={() => window.open("/documents/MOM.pdf", "_blank")}
                >
                  Print & Preview
                </span>
              </TableCell>
              <TableCell>
                <SignPopup text="3 Signed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5</TableCell>
              <TableCell>IRBRI</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                  onClick={() => window.open("/documents/IRBR1.pdf", "_blank")}
                >
                  Print & Preview
                </span>
              </TableCell>
              <TableCell className="text-muted-foreground">
                No Sign Needed
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Card>
          <CardHeader>
            <CardTitle>User Details</CardTitle>
            <CardDescription>Details about Users</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr No.</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Download</TableHead>
                  <TableHead>Upload</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Ma Heuteng</TableCell>
                  <TableCell>Shareholder 1</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell className="space-x-1.5">
                    <ButtonLink
                      href="/documents/Users/Shareholder1/S1.pdf"
                      toolTipContent="Sign NNC1 Form"
                    />
                    <ButtonLink
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Download ID Proof"
                    />
                    <ButtonLink
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Download Address Proof"
                    />
                  </TableCell>
                  <TableCell>
                    <UploadPopup type="Person" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Tencent Games Pvt. Ltd.</TableCell>
                  <TableCell>Shareholder 2</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell className="space-x-1.5">
                    <ButtonLink
                      href="/documents/Users/Shareholder2/S1.pdf"
                      toolTipContent="Sign NNC1 Form"
                    />
                    <ButtonLink
                      href="/documents/Users/Shareholder2/ID.pdf"
                      toolTipContent="Download ID Proof"
                    />
                  </TableCell>
                  <TableCell>
                    <UploadPopup type="Company" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4</TableCell>
                  <TableCell>Ma Heauteng</TableCell>
                  <TableCell>Director 1</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell className="space-x-1.5">
                    <ButtonLink
                      href="/documents/Users/Shareholder1/S1.pdf"
                      toolTipContent="Sign NNC1 Form"
                    />
                    <ButtonLink
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Download ID Proof"
                    />
                    <ButtonLink
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Download Address Proof"
                    />
                  </TableCell>
                  <TableCell>
                    <UploadPopup type="Person" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5</TableCell>
                  <TableCell>Way to Web Pvt. Ltd.</TableCell>
                  <TableCell>Director 1</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell className="space-x-1.5">
                    <ButtonLink
                      href="/documents/Users/Director1Company/D1C.pdf"
                      toolTipContent="Sign NNC1 Form"
                    />
                    <ButtonLink
                      href="/documents/Users/Director1Company/ID.pdf"
                      toolTipContent="Download ID Proof"
                    />
                  </TableCell>
                  <TableCell>
                    <UploadPopup type="Company" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">6</TableCell>
                  <TableCell>Curtis Mar</TableCell>
                  <TableCell>Company Secretary</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell className="space-x-1.5">
                    <ButtonLink
                      href="/documents/Users/CompanySecretary/CS.pdf"
                      toolTipContent="Sign NNC1 Form"
                    />
                    <ButtonLink
                      href="/documents/Users/CompanySecretary/ID.pdf"
                      toolTipContent="Download ID Proof"
                    />
                    <ButtonLink
                      href="/documents/Users/CompanySecretary/ID.pdf"
                      toolTipContent="Download Address Proof"
                    />
                  </TableCell>
                  <TableCell>
                    <UploadPopup type="Person" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default page;
