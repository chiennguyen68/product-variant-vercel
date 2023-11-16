import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { useSession, getSession } from "next-auth/react";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import AdminNavbar from "../components/dashboard/Navbars/AdminNavbar";
import HeaderStats from "../components/dashboard/Headers/HeaderStats";
import { DataTable } from "../components/data-table";
import { columns } from "./columns";
import { useEffect, useState } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany();
  const products = await prisma.product.findMany();
  const serializedProducts = products.map((product) => ({
    ...product,
    createdAt: product.createdAt.toISOString(), // Convert Date to string
    updatedAt: product.updatedAt.toISOString(), // Convert Date to string
  }));

  const brands = await prisma.brand.findMany();
  return {
    props: { feed, products: serializedProducts, brands },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
  products: any;
  brands: any;
};

const Dashboard: React.FC<Props> = (props) => {
  const [listProduct, setListProduct] = useState(props.products);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <section className="py-2">
            <div className="container">
              <h1 className="mb-6 text-3xl font-bold">Product Manager</h1>
              <DataTable
                columns={columns}
                data={listProduct.length ? listProduct : []}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
