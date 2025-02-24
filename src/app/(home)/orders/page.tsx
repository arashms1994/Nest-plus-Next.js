import { userGetProducts } from "@/api/server-api/user/user-products";
import PaginationUI from "@/components/home-components/Pagination";
import { Box } from "@mui/material";
import React from "react";

const page = async () => {
  const products = await userGetProducts();
  const count = products.total;

  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 1120,
          marginBottom: "50px",
        }}
      >
        <h1 className="font-semibold text-2xl my-3">سفارشات</h1>
        <PaginationUI count={count} />
      </Box>
    </>
  );
};

export default page;
