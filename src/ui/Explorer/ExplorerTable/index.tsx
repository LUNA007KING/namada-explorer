import { LastBlockTable } from "./components/LastBlockTable";
import { LastTransactionTable } from "./components/LastTransactionTable";

export const ExplorerTable = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-4 sm:flex-row">
      <LastBlockTable />
      <LastTransactionTable />
    </div>
  );
};
