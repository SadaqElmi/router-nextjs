"use client";

import ChartProdut from "../chart/page";
import OrderChart from "../orderchart/page";
import ProductChart from "../productchart/page";
import UserChart from "../userchart/page";

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 ">
          <UserChart />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 ">
          <ProductChart />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 bg-red-600">
          <OrderChart />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min ">
        <ChartProdut />
      </div>
    </div>
  );
};

export default Dashboard;