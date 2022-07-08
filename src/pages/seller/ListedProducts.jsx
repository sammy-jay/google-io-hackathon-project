import { listedProductsData, listedProductsGrid } from "./data/dummy";

import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Toolbar,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "./components";

const ListedProducts = () => {
  const toolbarOptions = ["Delete"];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Products" title="Listed" />
      <GridComponent
        id="gridcomp"
        dataSource={listedProductsData}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
        allowExcelExport
        allowPdfExport
        pageSettings={{ pageCount: 5 }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {listedProductsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Toolbar,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default ListedProducts;
