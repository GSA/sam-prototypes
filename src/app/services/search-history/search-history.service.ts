import { Injectable } from "@angular/core";
import { Page, SearchParameters } from "@gsa-sam/layouts";
import * as qs from 'qs';

@Injectable()
export class SearchHistoryService {

  static getHistoryModelFromUrl(): SearchParameters {
    const queryString = window.location.href.substring(window.location.href.indexOf('?') + 1);
    const params: any = this.getUrlParams(queryString);
    const paramModel: any = this.convertToModel(params);

    const pageNumber = paramModel['page'] ? +paramModel['page'] : 1;
    const sortField = paramModel['sort'];
    const filter = paramModel['sfm'] ? paramModel['sfm'] : {};

    const page: Page = {
      pageNumber,
      pageSize: undefined,
      totalPages: undefined
    };

    return {
      filter,
      sortField,
      page
    };
  }

  static getNavigationQueryParams(searchHistoryData: SearchParameters) {
    const queryString = window.location.href.substring(window.location.href.indexOf('?') + 1);
    let queryObj = qs.parse(queryString, { allowPrototypes: true });

    if (queryObj.hasOwnProperty('sfm')) {
      queryObj['sfm'] = {};
    }

    queryObj['page'] =  searchHistoryData.page && searchHistoryData.page.pageNumber ? searchHistoryData.page.pageNumber.toString() : '1'
    queryObj['sort'] = searchHistoryData.sortField ? searchHistoryData.sortField.toString() : '';
    queryObj['sfm'] = searchHistoryData.filter;
    const params = this.convertToParam(queryObj);
    return params;
  }


  private static getUrlParams(queryString) {
    const target = {};
    queryString.split('&').forEach((pair) => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[splitpair[0]] =
          splitpair[1] === '' || splitpair[1] === 'false' ? null : splitpair[1];
      }
    });
    return target;
  }

  private static convertToParam(filters) {

    const shortFormatDate = (prefix, value) => {
      const fixDigit = (val) => {
        return val.toString().length === 1 ? '0' + val : val;
      };
      const getFormattedDate = (date) =>
        `${fixDigit(
          date.getMonth() + 1
        )}/${date.getDate()}/${date.getFullYear()}`;
      if (value instanceof Date) {
        value = getFormattedDate(new Date(value));
      }
      return value;
    };

    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: shortFormatDate,
    });
    if (encodedValues) {
      return this.getUrlParams(encodedValues);
    } else {
      return '';
    }
  }

  private static convertToModel(filters) {
    const longFormatDate = (prefix, value) => {
      const val = decodeURIComponent(value);
      const isDate = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(val);
      if (isDate) {
        value = new Date(val).toISOString();
      }
      return value;
    };

    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: longFormatDate,
    });
    obj = qs.parse(encodedValues);
    return obj;
  }
}