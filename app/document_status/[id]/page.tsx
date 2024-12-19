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
import Link from "next/link";

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
      <CardHeader className="flex justify-between items-center w-full flex-row">
        <div className="space-y-2">
          <CardTitle>Document Status</CardTitle>
          <CardDescription>
            This is the status of documents prepared by the project of your
            company.
          </CardDescription>
        </div>
        <Link
          href="/document_status/m5gr84i9/documents"
          className={buttonVariants({ size: "lg" })}
        >
          Confirm
        </Link>
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
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                  href="/documents/NNC1.pdf"
                  target="_blank"
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <SignPopup text="2 Signed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Article of Association (A & A)</TableCell>
              <TableCell>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                  href="/documents/AA.pdf"
                  target="_blank"
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                  href="/documents/AA.pdf"
                  target="_blank"
                >
                  Print
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Ordinary Share Agreement</TableCell>
              <TableCell>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                  href="/documents/SA.pdf"
                  target="_blank"
                >
                  Preview
                </Link>
              </TableCell>

              <TableCell>
                <SignPopup text="2 Signed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>Minutes</TableCell>
              <TableCell>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                  href="/documents/MOM.pdf"
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <SignPopup text="2 Signed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5</TableCell>
              <TableCell>IRBRI</TableCell>
              <TableCell>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                  href="/documents/IRBR1.pdf"
                  target="_blank"
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                  href="/documents/IRBR1.pdf"
                  target="_blank"
                >
                  Print
                </Link>
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
                  <TableHead>Print</TableHead>
                  <TableHead>Upload Signed NNC1</TableHead>
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
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Print ID Proof"
                    />
                    <ButtonLink
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Print Address Proof"
                    />
                  </TableCell>
                  <TableCell>
                    <Link
                      href="/documents/Users/Shareholder1/ID.pdf"
                      target="_blank"
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Preview
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Tencent Games Pvt. Ltd.</TableCell>
                  <TableCell>Shareholder 2</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell className="space-x-1.5">
                    <ButtonLink
                      href="/documents/Users/Shareholder2/ID.pdf"
                      toolTipContent="Print ID Proof"
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
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Print ID Proof"
                    />
                    <ButtonLink
                      href="/documents/Users/Shareholder1/ID.pdf"
                      toolTipContent="Print Address Proof"
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
                      href="/documents/Users/Director1Company/ID.pdf"
                      toolTipContent="Print ID Proof"
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
                      href="/documents/Users/CompanySecretary/ID.pdf"
                      toolTipContent="Print ID Proof"
                    />
                    <ButtonLink
                      href="/documents/Users/CompanySecretary/ID.pdf"
                      toolTipContent="Print Address Proof"
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
