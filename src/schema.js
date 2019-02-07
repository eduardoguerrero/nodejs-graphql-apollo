// Build a schema -  graph’s schema

const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    employees(query: String): [Employee!]!
    purchaseOrderHeaders(query: String): [PurchaseOrderHeader!]!
}

type Mutation {
    createEmployee(data: CreateEmployeeInput): Employee!
    deleteEmployee(id: ID!): Employee!
}

type Subscription{
  count: Int!
  employee: Employee!
}

input CreateEmployeeInput {
  NationalIDNumber: String!
  LoginID: String!
  OrganizationNode: Int!
  OrganizationLevel: Int!
  JobTitle: String!
  BirthDate: String!
  MaritalStatus: String!
  Gender: String!
  HireDate: String!
  SalariedFlag: Boolean!
  VacationHours: Int!
  SickLeaveHours: Int!
  CurrentFlag: Boolean!
  rowguid: String
  ModifiedDate: String
}

type Employee {
    id: ID!
    NationalIDNumber: String!
    LoginID: String!
    OrganizationNode: Int!
    OrganizationLevel: Int!
    JobTitle: String!
    BirthDate: String!
    MaritalStatus: String!
    Gender: String!
    HireDate: String!
    SalariedFlag: Boolean!
    VacationHours: Int!
    SickLeaveHours: Int!
    CurrentFlag: Boolean!
    rowguid: String
    ModifiedDate: String
    purchaseOrderHeaders: [PurchaseOrderHeader!]!
}

type PurchaseOrderHeader {
    id: ID!
    Status: Int
    OrderDate: String
    SubTotal: Float!
    TaxAmt: Float!
    Freight: Float!
    TotalDue: Float!
    ModifiedDate: String!
    EmployeeId: Employee!
}
`;

module.exports = typeDefs;
