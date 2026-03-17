//Hook usado para filtrar arrays de datos

interface ResponseType<T> {
    dataArray: T[];
    filterBy: any;
    key: keyof T;
}
interface RangeResponseType<T> {
    dataArray: T[];
    key: keyof T;
    filterMin: any;
    filterMax: any;
}

const useFilter = () =>{    

    const equalTo = <T>({dataArray, filterBy, key} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data[key] === filterBy));
    }
    const moreThan = <T>({dataArray, filterBy, key} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data[key] > filterBy));
    }
    const equalMoreThan = <T>({dataArray, filterBy, key} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data[key] >= filterBy));
    }
    const lessThan = <T>({dataArray, filterBy, key} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data[key] < filterBy));
    }
    const equalLessThan = <T>({dataArray, filterBy, key} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data[key] <= filterBy));
    }
    const inRange = <T>({dataArray, filterMin, filterMax, key} :RangeResponseType<T>) : T[] => {
        return (dataArray.filter( (data) => data[key] <= filterMin && data[key] >= filterMax));
    }
    const byIndex = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( (_unused, i) => i === filterBy));
    }
    const lessThanIndex = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( (_unused, i) => i < filterBy));
    }
    const equalLessThanIndex = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( (_unused, i) => i <= filterBy));
    }
    const moreThanIndex = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( (_unused, i) => i > filterBy));
    }
    const equalMoreThanIndex = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( (_unused, i) => i >= filterBy));
    }
    const inIndexRange = <T>({dataArray, filterMin, filterMax} :RangeResponseType<T>) : T[] => {
        return (dataArray.filter( (_unused, i) => i <= filterMin && i >= filterMax));
    }

    return { 
        equalTo,
        moreThan, 
        equalMoreThan, 
        lessThan, 
        equalLessThan, 
        byIndex, 
        lessThanIndex,
        equalLessThanIndex,
        moreThanIndex,
        equalMoreThanIndex,
        inIndexRange, 
        inRange
    }
}

export default useFilter