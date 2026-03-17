//Hook usado para filtrar arrays de datos

interface ResponseType<T> {
    dataArray: T[];
    filterBy: any;
}

const useFilter = () =>{    

    const equalTo = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data === filterBy));
    }
    const moreThan = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data > filterBy));
    }
    const equalMoreThan = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data >= filterBy));
    }
    const lessThan = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data < filterBy));
    }
    const equalLessThan = <T>({dataArray, filterBy} :ResponseType<T>) : T[] => {
        return (dataArray.filter( data => data <= filterBy));
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
        equalMoreThanIndex
    }
}

export default useFilter