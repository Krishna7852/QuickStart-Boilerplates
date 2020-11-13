import { Injectable } from '@angular/core';
import {
  isArray,
  isEmpty,
  isEqual,
  isNaN,
  isObject,
  isString,
  isNull,
  isUndefined,
} from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public isArray = isArray;
  public isEqual = isEqual;
  public isNaN = isNaN;
  public isNull = isNull;
  public isEmpty = isEmpty;
  public isObject = isObject;
  public isString = isString;
  public isUndefined = isUndefined;

  constructor() {}

  // tslint:disable-next-line: typedef
  public parseTemplate(
    templateString: string,
    replacements: any,
    enclosingLeft: string = '{',
    enclosingRight: string = '}'
  ) {
    const regexStr = `(\\$)?\\${enclosingLeft}(.*?)\\${enclosingRight}`;
    const gRegex = new RegExp(regexStr, 'g');
    // First find all the instances where replacement is required
    return templateString.replace(gRegex, (matchedStr: string) => {
      // Now get the key for replacement
      const rgx = new RegExp(regexStr);
      const matchedKey = matchedStr.match(rgx).pop();
      // Now return the replacement if it exists else return the match
      return replacements[matchedKey];
    });
  }
}
