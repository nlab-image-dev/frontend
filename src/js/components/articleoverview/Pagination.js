import React, { Component } from "react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};


class Pagination extends Component{
    constructor(props){
        super(props);
        const{ totalRecords = null, pageLimit = 6, pageNeighbors = 0 } = props;

        this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 6;
        this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
        this.pageNeighbors = typeof pageNeighbors === 'number' ? Math.max(0, Math.min(pageNeighbors, 2)) : 0;
        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

        this.state = { currentPage: 1 };
    }
}