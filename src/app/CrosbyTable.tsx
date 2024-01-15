import { Table, Tag } from "antd";
import { FC } from "react";

const columns = [
  {
    title: "Patient ID",
    dataIndex: "id",
    width: 100,
    sorter: (a, b) => a.id.localeCompare(b.id),
  },
  {
    title: "Patient Name",
    dataIndex: "name",
    width: 150,
    sorter: (a, b) => a.name.localeCompare(b.name),
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
    sorter: (a, b) => a.clinicLocation.localeCompare(b.clinicLocation),
  },
  {
    title: "Insurance Company",
    dataIndex: "insuranceCompany",
    sorter: (a, b) => a.insuranceCompany.localeCompare(b.insuranceCompany),
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

const dataSources = [
  {
    key: "1",
    id: "0D7676053256",
    name: "John Miller",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    key: "2",
    id: "0D7676053251",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    key: "3",
    id: "0D7676053256",
    name: "John Doe",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    key: "4",
    id: "0D7676053253",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    key: "5",
    id: "0D767605325",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    key: "6",
    id: "0D7676053254",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    key: "7",
    id: "0D7676053256",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Dummy",
    status: "Need Review",
  },
];

const CrosbyTable: FC = () => {
  return <Table size="large" columns={columns} dataSource={dataSources} pagination={false} />;
};

export default CrosbyTable;
