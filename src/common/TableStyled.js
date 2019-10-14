import styled from "@emotion/styled";


export const TableStyled = styled.table`
border-collapse: collapse;
width: 100%;
table-layout: fixed;
& td,th{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
& tr:nth-of-type(even) {
    background-color: #dddddd;
}
`;