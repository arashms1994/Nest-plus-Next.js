"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { JSX, useCallback, useMemo } from "react";

type Props = {
  count: number;
  rowsPerPageOptions?: number[];
};

export default function PaginationUI({
  count,
  rowsPerPageOptions = [5, 10, 25],
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageSize = parseInt(
    searchParams.get("pageSize") || `${rowsPerPageOptions[0]}`
  );
  const page = parseInt(searchParams.get("page") ?? "1");

  console.log("Page Size:", pageSize);
  console.log("Page:", page);
  console.log("Search Params:", searchParams);

  const totalPages = useMemo(
    () => Math.ceil(count / pageSize),
    [count, pageSize]
  );

  const createQueryString = useCallback(
    (newParams: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.keys(newParams).forEach((key) => {
        params.set(key, newParams[key]);
      });

      return params.toString();
    },
    [searchParams]
  );

  const handlePageChange = (newPage: number) => {
    router.push(pathname + "?" + createQueryString({ page: `${newPage}` }));
  };

  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - 2 && i <= page + 2)) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === page}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i === page - 3 || i === page + 3) {
        pageNumbers.push(
          <PaginationItem key={`ellipsis-${i}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <Pagination>
        <PaginationContent className="flex flex-row-reverse">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(page - 1)}
              aria-disabled={page === 1}
            >
              قبلی
            </PaginationPrevious>
          </PaginationItem>

          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(page + 1)}
              aria-disabled={page === totalPages}
            >
              بعدی
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
