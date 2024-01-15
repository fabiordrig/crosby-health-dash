import { Table, TableColumnsType, Tag } from "antd";
import { FC } from "react";
import { Appeal } from "./types";

const columns: TableColumnsType<Appeal> = [
  {
    title: "Patient ID",
    dataIndex: "id",
    sorter: (a: Appeal, b: Appeal) => a.id.localeCompare(b.id),
  },
  {
    title: "Patient Name",
    dataIndex: "name",
    sorter: (a: Appeal, b: Appeal) => a.name.localeCompare(b.name),
  },
  {
    title: "Date Services",
    dataIndex: "dateServices",
    sorter: true,
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    sorter: true,
  },
  {
    title: "Clinic Location",
    dataIndex: "clinicLocation",
    sorter: (a: Appeal, b: Appeal) => a.clinicLocation.localeCompare(b.clinicLocation),
  },
  {
    title: "Insurance Company",
    dataIndex: "insuranceCompany",
    sorter: (a: Appeal, b: Appeal) => a.insuranceCompany.localeCompare(b.insuranceCompany),
  },
  {
    dataIndex: "status",
    align: "center",
    width: 10,
    render: (status: string) => (
      <Tag bordered color="red">
        {status}
      </Tag>
    ),
  },
];

const CrosbyTable: FC<{
  dataSources: Appeal[];
}> = ({ dataSources }) => {
  return <Table size="large" columns={columns} dataSource={dataSources} pagination={false} />;
};

export default CrosbyTable;
