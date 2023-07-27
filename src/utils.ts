import { NewJobApp } from "./types";

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };
  
  const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
  };

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

  const parsePosition = (position: unknown): string => {
    if(!position || !isString(position)) {
        throw new Error("Incorrect or missing position name");
    }
    return position;
}

const parseCompany = (company: unknown): string => {
    if(!company || !isString(company)) {
        throw new Error("Incorrect or missing company name");
    }
    return company;
}

const parseResponse = (response: unknown): string => {
    if(!response || !isString(response)) {
        throw new Error("Incorrect format or missing comment");
    }
    return response;
}

const toNewJobApp = (object: unknown): NewJobApp => {
    if( !object || typeof object !== 'object' ) {
        throw new Error("Incorrect or Missing data");    
    }
    if ( 'date' in object && 'position' in object && 'company' in object && 'response' in object) {


        const newEntry: NewJobApp = {
            date: parseDate(object.date),
            position: parsePosition(object.position),
            company: parseCompany(object.company),
            response: parseResponse(object.response),
        }
        return newEntry;
    }
    throw new Error("Incorrect data: some fields are missing");
    
}

export default toNewJobApp